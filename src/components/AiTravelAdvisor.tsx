import { useState, useRef, useEffect, useMemo } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Bot,
  Sparkles,
  X,
  Send,
  PlaneTakeoff,
  Stamp,
  FileCheck2,
  BedDouble,
  ExternalLink,
  MessageCircle,
  HelpCircle,
  CornerDownLeft,
  RefreshCw,
  CheckCircle2,
  Globe2,
} from "lucide-react";
import { countries, getCountry } from "@/data/countries";
import { contactInfo } from "@/data/site";
import { cn } from "@/lib/utils";
import { trackWhatsAppContact } from "@/lib/analytics";

type Message = {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
  suggestedCountry?: string | undefined;
  suggestedLink?: { title: string; url: string } | undefined;
  actionChips?: string[] | undefined;
};

const INITIAL_SUGGESTIONS = [
  "What documents are required for Turkey visa?",
  "How does verifiable flight reservation work?",
  "Which countries have easy e-visas for Pakistanis?",
  "How does HEC & MOFA degree attestation work?",
  "What is the bank statement requirement for UK?",
];

export function AiTravelAdvisor() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Current country if user is browsing a country page
  const currentCountry = useMemo(() => {
    if (pathname.startsWith("/countries/")) {
      const slug = pathname.split("/")[2];
      return slug ? getCountry(slug) : null;
    }
    return null;
  }, [pathname]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "As-salamu alaykum! I am Areera AI, your 24/7 Travel & Visa Intelligence Assistant. Ask me anything about visa requirements for 42 countries, verifiable flight reservations with live PNR, hotel vouchers, or MOFA attestation.",
      timestamp: "Just now",
      actionChips: [
        "Turkey Visa Requirements",
        "Embassy Flight Reservation",
        "E-Visa Countries",
        "MOFA Attestation",
      ],
    },
  ]);

  // Scroll to bottom on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  // Knowledge retrieval & response generation
  const answerQuery = (userText: string) => {
    const textLower = userText.toLowerCase().trim();

    // 1. Check if user is asking about a specific country
    const matchedCountry = countries.find(
      (c) =>
        textLower.includes(c.name.toLowerCase()) ||
        textLower.includes(c.slug.toLowerCase()) ||
        textLower.includes(c.capital.toLowerCase())
    );

    if (matchedCountry) {
      const docs = matchedCountry.documents.slice(0, 5).map((d) => `• ${d}`).join("\n");
      const cats = matchedCountry.visaCategories
        ?.slice(0, 3)
        .map((vc) => `• **${vc.name}**: ${vc.duration} (${vc.typeBadge}) — Process: ${vc.processingTime}`)
        .join("\n");

      return {
        text: `Here is the official visa intelligence for **${matchedCountry.name}** (${matchedCountry.region}):\n\n` +
          `⏱️ **Processing Time**: ${matchedCountry.processingTime || "5-15 working days"}\n` +
          `💰 **Government/Embassy Fees**: ${matchedCountry.fees || "Standard official embassy fee"}\n` +
          `🏛️ **Capital**: ${matchedCountry.capital} | **Currency**: ${matchedCountry.currency}\n\n` +
          `📋 **Core Document Requirements**:\n${docs}\n\n` +
          (cats ? `🏷️ **Available Visa Categories**:\n${cats}\n\n` : "") +
          `💡 *Need a verifiable flight reservation or hotel voucher for ${matchedCountry.name}? Areera Travel issues authentic GDS PNRs within hours.*`,
        suggestedCountry: matchedCountry.slug,
        suggestedLink: {
          title: `Explore Full ${matchedCountry.name} Guide`,
          url: `/countries/${matchedCountry.slug}`,
        },
        actionChips: [
          `Apply for ${matchedCountry.name} Visa`,
          "Flight Reservation for Visa",
          "Hotel Booking Voucher",
        ],
      };
    }

    // 2. Flight reservation / PNR query
    if (
      textLower.includes("flight") ||
      textLower.includes("reservation") ||
      textLower.includes("pnr") ||
      textLower.includes("dummy") ||
      textLower.includes("itinerary") ||
      textLower.includes("ticket")
    ) {
      return {
        text: `✈️ **Verifiable Flight Reservations for Visa Applications**:\n\n` +
          `• **Official GDS PNR**: We generate live bookings via Sabre, Amadeus, and Galileo under your exact passport name.\n` +
          `• **Direct Embassy Verification**: Visa officers can verify the reservation directly on the airline's official website.\n` +
          `• **Risk-Free**: Protects you from paying for costly non-refundable air tickets before your visa is granted (as recommended by Schengen, UK, and US embassies).\n` +
          `• **Turnaround**: Delivered to your WhatsApp or email in 15–45 minutes.`,
        suggestedLink: {
          title: "Book Verifiable Flight Reservation",
          url: "/flight-reservation",
        },
        actionChips: ["Book Flight Reservation", "Hotel Booking Voucher", "WhatsApp Visa Expert"],
      };
    }

    // 3. Hotel booking query
    if (
      textLower.includes("hotel") ||
      textLower.includes("accommodation") ||
      textLower.includes("stay") ||
      textLower.includes("voucher")
    ) {
      return {
        text: `🏨 **Confirmed Hotel Bookings for Visa Applications**:\n\n` +
          `• **Embassy-Compliant Vouchers**: Fully confirmed reservations showing applicant full legal name, hotel contact, and exact travel dates.\n` +
          `• **Accepted Worldwide**: 100% compliant with Schengen, UK, USA, Canada, Japan, and GCC visa criteria.\n` +
          `• **Free Dates Adjustment**: In case of embassy rescheduling, we adjust dates seamlessly.`,
        suggestedLink: {
          title: "Get Confirmed Hotel Voucher",
          url: "/hotel-booking",
        },
        actionChips: ["Book Hotel Voucher", "Flight Reservation", "WhatsApp Visa Expert"],
      };
    }

    // 4. Document Attestation / MOFA / HEC
    if (
      textLower.includes("attestation") ||
      textLower.includes("mofa") ||
      textLower.includes("hec") ||
      textLower.includes("ibcc") ||
      textLower.includes("degree") ||
      textLower.includes("nikahnama") ||
      textLower.includes("marriage")
    ) {
      return {
        text: `📜 **Official Document Attestation Services**:\n\n` +
          `Areera Travel manages end-to-end legal attestation in Islamabad:\n` +
          `1. **Educational Degrees**: IBCC (Matric/Inter) ➔ HEC (Degree & Transcript) ➔ MOFA ➔ Embassy (Saudi, UAE, Qatar, Kuwait, Oman, Bahrain).\n` +
          `2. **Family & Civil Records**: NADRA FRC, Nikahnama/Marriage Certificate, Birth Certificates, Police Clearance ➔ MOFA ➔ Destination Embassy.\n` +
          `📍 **Office**: Blue Area, Islamabad with rapid daily courier dispatch nationwide.`,
        suggestedLink: {
          title: "View Attestation Guide & Pricing",
          url: "/services/attestation",
        },
        actionChips: ["HEC Attestation", "MOFA Attestation", "UAE Embassy Attestation"],
      };
    }

    // 5. Easy e-visa / visa-free destinations for Pakistan
    if (
      textLower.includes("easy") ||
      textLower.includes("visa free") ||
      textLower.includes("evisa") ||
      textLower.includes("e-visa") ||
      textLower.includes("voa") ||
      textLower.includes("arrival")
    ) {
      return {
        text: `🌍 **Easiest Travel Destinations for Pakistani Passport Holders (2026)**:\n\n` +
          `• **Malaysia**: Fast e-Visa (2-4 days) + MDAC digital arrival card.\n` +
          `• **Azerbaijan**: ASAN E-Visa issued online in 3 hours (Urgent) or 3 days (Standard).\n` +
          `• **United Arab Emirates (UAE)**: 30-day or 60-day tourist e-visa with quick 24-48 hr turnaround.\n` +
          `• **Maldives**: 30-day Free Visa on Arrival for tourists with confirmed hotel & IMUGA declaration.\n` +
          `• **Sri Lanka**: Electronic Travel Authorization (ETA) approved within 24-48 hours.\n` +
          `• **Thailand**: Fast-track eVOA or tourist sticker visa with basic financial proof.`,
        suggestedLink: {
          title: "Read Visa-Free & Easy Access Guide 2026",
          url: "/guides/visa-free-asian-destinations",
        },
        actionChips: ["Malaysia Visa", "Azerbaijan Visa", "UAE Visa", "Thailand Visa"],
      };
    }

    // 6. Bank statement requirement
    if (
      textLower.includes("bank") ||
      textLower.includes("statement") ||
      textLower.includes("finance") ||
      textLower.includes("balance") ||
      textLower.includes("funds")
    ) {
      return {
        text: `💰 **Embassy Bank Statement Guidelines**:\n\n` +
          `• **Southeast Asia (Malaysia, Thailand, Vietnam)**: Recommended closing balance of PKR 400,000 – 600,000.\n` +
          `• **Gulf / Middle East (UAE, Saudi, Oman)**: Recommended balance of PKR 300,000 – 500,000.\n` +
          `• **UK, USA, Canada, Schengen, Australia**: Minimum PKR 1,500,000 – 3,500,000+ with 6 months of legitimate salary credits or verifiable business turnover.\n` +
          `⚠️ *Rule of Thumb: The funds must reflect continuous, verified activity rather than sudden unexplained bulk deposits before visa filing.*`,
        actionChips: ["UK Visa Details", "USA B1/B2 Visa", "WhatsApp Visa Expert"],
      };
    }

    // 7. Founders / About
    if (
      textLower.includes("who are you") ||
      textLower.includes("founder") ||
      textLower.includes("arslan") ||
      textLower.includes("hareera") ||
      textLower.includes("company") ||
      textLower.includes("location") ||
      textLower.includes("address") ||
      textLower.includes("office")
    ) {
      return {
        text: `🏢 **About Areera Travel and Tours**:\n\n` +
          `• **Founders**: Founded by **Arslan Ahmed** (Founder & Managing Director) and **Hareera** (Co-Founder & Director).\n` +
          `• **Headquarters**: Blue Area, Islamabad Capital Territory 44000, Pakistan.\n` +
          `• **Coverage**: Serving travelers nationwide across Islamabad, Rawalpindi, Lahore, Karachi, Peshawar, Multan, and the global Pakistani diaspora.\n` +
          `• **Helpline / WhatsApp**: +92 314 5556024 | Email: areeratravel@gmail.com`,
        suggestedLink: {
          title: "About Areera Travel & Tours",
          url: "/about",
        },
        actionChips: ["Contact Office", "Visa Services", "WhatsApp Helpline"],
      };
    }

    // Default Fallback
    return {
      text: `Thank you for your question! Areera Travel and Tours specializes in **42 international destinations**, flight reservations with live PNR, verified hotel vouchers, and official MOFA attestation.\n\n` +
        `Would you like specific details on:\n` +
        `• A particular country (e.g. Turkey, UK, Malaysia, UAE, Saudi Arabia)?\n` +
        `• Verifiable flight bookings for embassy filing?\n` +
        `• Or speaking directly with an Islamabad visa consultant on WhatsApp?`,
      actionChips: ["Turkey Visa", "UK Visa", "Flight Reservation", "Talk to Consultant"],
    };
  };

  const handleSend = (textToSend?: string) => {
    const inputMsg = (textToSend || query).trim();
    if (!inputMsg) return;

    setHasInteracted(true);
    const userMsg: Message = {
      id: String(Date.now()),
      sender: "user",
      text: inputMsg,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setQuery("");
    setIsTyping(true);

    // Dynamic typing delay for realistic AI feel
    setTimeout(() => {
      const responseData = answerQuery(inputMsg);
      const assistantMsg: Message = {
        id: String(Date.now() + 1),
        sender: "assistant",
        text: responseData.text,
        timestamp: "Just now",
        suggestedCountry: responseData.suggestedCountry,
        suggestedLink: responseData.suggestedLink,
        actionChips: responseData.actionChips,
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 600);
  };

  const cleanWhatsApp = contactInfo.whatsapp.replace(/[^0-9]/g, "");

  const handleWhatsAppChat = (inquiryContext?: string) => {
    trackWhatsAppContact({ context: "ai_advisor_handoff" });
    const text = inquiryContext
      ? `Hello Areera Travel, I was using your AI Travel Assistant and would like expert assistance regarding: "${inquiryContext}"`
      : `Hello Areera Travel, I would like direct visa and travel consultation.`;
    window.open(`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-20 left-4 z-40 md:bottom-6 md:left-6 print:hidden">
        {!isOpen && (
          <button
            onClick={() => {
              setIsOpen(true);
              setHasInteracted(true);
            }}
            aria-label="Open Areera AI Travel Assistant"
            className="group relative flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 p-[2px] shadow-xl shadow-blue-950/15 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-background"
          >
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-slate-800 transition-colors group-hover:bg-slate-50 border border-slate-200/80 shadow-md">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500" />
              </span>
              <Bot className="h-4 w-4 text-blue-600 transition-transform group-hover:rotate-12" />
              <span className="text-xs font-semibold tracking-wide sm:text-sm">
                Ask Areera AI
              </span>
              <Sparkles className="h-3.5 w-3.5 text-blue-500 animate-pulse" />
            </div>
          </button>
        )}
      </div>

      {/* AI Assistant Chat Drawer / Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-start p-2 sm:p-4 md:p-6 bg-black/40 backdrop-blur-xs transition-opacity duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col h-[85vh] max-h-[680px] w-full max-w-[440px] rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/80 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100/80 border border-blue-200 text-blue-700">
                  <Bot className="h-5 w-5" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold tracking-tight text-slate-900">
                      Areera AI Assistant
                    </h3>
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-1.5 py-0.5 text-[10px] font-medium text-blue-700 ring-1 ring-inset ring-blue-500/20">
                      24/7 Intelligence
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Visa Requirements • Live PNR • Attestation
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleWhatsAppChat(messages[messages.length - 1]?.text)}
                  title="Hand off conversation to human expert on WhatsApp"
                  className="rounded-lg p-2 text-emerald-600 hover:bg-emerald-50 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Areera AI Assistant"
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Conversation Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs bg-slate-50/50">
              {/* Context Banner if on Country Page */}
              {currentCountry && (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/90 p-2.5 flex items-center justify-between text-emerald-900 shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{currentCountry.flag}</span>
                    <span className="font-medium text-[11px]">
                      Viewing {currentCountry.name} Visa Guide
                    </span>
                  </div>
                  <button
                    onClick={() => handleSend(`What are all the visa requirements for ${currentCountry.name}?`)}
                    className="text-[10px] bg-emerald-600 hover:bg-emerald-700 text-white px-2 py-1 rounded-md transition-colors font-semibold shadow-xs"
                  >
                    Ask about {currentCountry.name}
                  </button>
                </div>
              )}

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex flex-col space-y-1.5",
                    msg.sender === "user" ? "items-end" : "items-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[88%] rounded-2xl px-3.5 py-2.5 leading-relaxed",
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-xs shadow-xs"
                        : "bg-white border border-slate-200 text-slate-800 rounded-bl-xs shadow-xs"
                    )}
                  >
                    <div className="whitespace-pre-wrap">{msg.text}</div>

                    {/* Suggested Link */}
                    {msg.suggestedLink && (
                      <div className="mt-2.5 pt-2 border-t border-slate-100">
                        <Link
                          to={msg.suggestedLink.url as any}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <span>{msg.suggestedLink.title}</span>
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Action Chips */}
                  {msg.actionChips && msg.actionChips.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.actionChips.map((chip, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            if (chip.includes("WhatsApp") || chip.includes("Consultant") || chip.includes("Specialist")) {
                              handleWhatsAppChat(msg.text);
                            } else {
                              handleSend(chip);
                            }
                          }}
                          className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-[11px] text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-colors flex items-center gap-1 shadow-xs"
                        >
                          {chip.includes("WhatsApp") || chip.includes("Consultant") ? (
                            <MessageCircle className="h-2.5 w-2.5 text-emerald-600" />
                          ) : (
                            <Sparkles className="h-2.5 w-2.5 text-blue-500" />
                          )}
                          <span>{chip}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="text-[9px] text-slate-400 px-1">
                    {msg.sender === "user" ? "You" : "Areera AI"} • {msg.timestamp}
                  </span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-slate-500 bg-white border border-slate-200 rounded-2xl px-3.5 py-2.5 w-fit shadow-xs">
                  <Bot className="h-3.5 w-3.5 text-blue-600 animate-spin" />
                  <span className="text-xs">Consulting Areera Knowledge Base...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions (if no interaction yet) */}
            {!hasInteracted && (
              <div className="px-4 py-2 border-t border-slate-200 bg-white">
                <p className="text-[10px] text-slate-500 mb-1.5 font-medium">Frequently Asked:</p>
                <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
                  {INITIAL_SUGGESTIONS.slice(0, 3).map((sugg, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(sugg)}
                      className="shrink-0 text-[10px] rounded-md bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 px-2 py-1 text-slate-600 transition-colors"
                    >
                      {sugg}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Human WhatsApp Escalation Banner */}
            <div className="flex items-center justify-between border-t border-slate-200 bg-emerald-50/80 px-4 py-2 text-[11px]">
              <span className="text-slate-600 flex items-center gap-1.5">
                <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                Prefer a human specialist?
              </span>
              <button
                onClick={() => handleWhatsAppChat(query || "General Visa Consultation")}
                className="font-semibold text-emerald-700 hover:text-emerald-800 hover:underline transition-colors"
              >
                Chat on WhatsApp ➔
              </button>
            </div>

            {/* Chat Input Bar */}
            <div className="p-3 border-t border-slate-200 bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask about Turkey visa, flight PNR, MOFA..."
                  className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={!query.trim() || isTyping}
                  aria-label="Send query to Areera AI"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm hover:from-blue-700 hover:to-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <div className="mt-1.5 flex items-center justify-between text-[9px] text-slate-400 px-1">
                <span>Verified against Areera Travel Knowledge Base</span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-slate-500">↵</kbd> to send
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
