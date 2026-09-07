import { contactInfo } from "@/data/site";
import { trackWhatsAppContact } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.201.3-.777.978-.953 1.178-.175.2-.351.226-.652.076-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.502-1.786-1.678-2.086-.176-.3-.019-.462.132-.612.135-.135.301-.351.452-.527.15-.175.2-.3.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.928-2.235-.245-.588-.493-.509-.677-.518l-.577-.01c-.2 0-.527.075-.802.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.201 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.23 1.378.197 1.897.12.578-.087 1.78-.728 2.03-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.351zM12.04 2C6.52 2 2.03 6.49 2.03 12.01c0 1.98.58 3.82 1.58 5.37L2 22l4.79-1.55c1.5 1 3.28 1.56 5.25 1.56 5.52 0 10.01-4.49 10.01-10.01S17.56 2 12.04 2zm0 18.25c-1.72 0-3.32-.48-4.7-1.32l-.34-.2-3.48 1.12 1.14-3.39-.22-.36c-.95-1.5-1.46-3.23-1.46-5.08 0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25-3.7 8.25-8.25 8.25z" />
    </svg>
  );
}

interface FloatingWhatsAppProps {
  message?: string;
  className?: string;
}

export function FloatingWhatsApp({
  message = "Hello Areera Travel, I would like to inquire about visa and travel assistance.",
  className,
}: FloatingWhatsAppProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cleanWhatsApp = contactInfo.whatsapp.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    trackWhatsAppContact({
      context: "FloatingWhatsAppWidget",
      service: "General Consultation",
    });
  };

  return (
    <div
      className={cn(
        "hidden md:flex fixed bottom-6 right-6 z-50 items-center select-none",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Tooltip / Chat Prompt on Desktop */}
      <div
        className={cn(
          "mr-3 hidden md:flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/95 px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-xl backdrop-blur-md transition-all duration-300 pointer-events-none",
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2 pointer-events-none",
        )}
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span>Chat with a Visa Specialist</span>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly with Areera Travel on WhatsApp"
        className="group relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-600/30 transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] hover:shadow-2xl hover:shadow-emerald-600/40 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Pulsing Ripple Effect */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10 [animation-duration:3s]"
          aria-hidden="true"
        />

        {/* Online Status Dot */}
        <span
          className="absolute top-0 right-0 flex h-3.5 w-3.5 -mt-0.5 -mr-0.5"
          aria-hidden="true"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400" />
        </span>

        {/* WhatsApp Brand Icon */}
        <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8 transition-transform duration-300 group-hover:scale-105" />
      </a>
    </div>
  );
}
