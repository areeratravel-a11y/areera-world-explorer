export type Service = {
  slug: string;
  path: string;
  title: string;
  short: string;
  description: string;
  icon: "visa" | "ticket" | "attestation" | "hotel" | "flight";
};

export const services: Service[] = [
  {
    slug: "visa",
    path: "/services/visa",
    title: "Visa Services",
    short: "Tourist, business, student and work visa filing support",
    description:
      "End-to-end visa guidance: eligibility review, document checklist, form filling, appointment scheduling and submission support.",
    icon: "visa",
  },
  {
    slug: "ticket",
    path: "/services/ticket",
    title: "Ticket Booking",
    short: "Domestic and international air ticketing",
    description:
      "Fare comparison across airlines, group bookings, date changes and 24/7 itinerary support for domestic and international routes.",
    icon: "ticket",
  },
  {
    slug: "attestation",
    path: "/services/attestation",
    title: "Attestation Services",
    short: "Educational, personal and commercial document attestation",
    description:
      "Notary, HEC/board, Ministry of Foreign Affairs and embassy attestation handled in the correct order, with tracking at each stage.",
    icon: "attestation",
  },
  {
    slug: "hotel-booking",
    path: "/hotel-booking",
    title: "Hotel Booking",
    short: "Verified hotels and visa-compliant reservations",
    description:
      "Hand-picked stays across every price band, with confirmed bookings suitable for visa applications.",
    icon: "hotel",
  },
  {
    slug: "flight-reservation",
    path: "/flight-reservation",
    title: "Flight Reservation",
    short: "Dummy and confirmed flight reservations",
    description:
      "Verifiable flight reservations for embassy submission, plus confirmed ticketing when your visa is approved.",
    icon: "flight",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const testimonials = [
  {
    name: "Hamza Riaz",
    role: "Business traveller, Lahore",
    quote:
      "The team reviewed my documents line by line before submission and kept me updated at every stage. Genuinely organised people.",
  },
  {
    name: "Ayesha Naveed",
    role: "Family holiday, Karachi",
    quote:
      "They handled our hotel bookings and flight reservations together, so the paperwork matched perfectly. Zero stress for us.",
  },
  {
    name: "Bilal Ahmed",
    role: "Attestation client, Islamabad",
    quote:
      "My degree attestation went through the ministry and embassy stages without me visiting a single office. Clear communication throughout.",
  },
  {
    name: "Sana Kamran",
    role: "Student applicant, Multan",
    quote:
      "I got a proper checklist instead of guesswork. Everything was explained in plain language before I paid anything.",
  },
];

export const contactInfo = {
  name: "Areera Travel and Tours",
  phone: "+92 314 5556024",
  whatsapp: "+92 314 5556024",
  email: "areeratravel@gmail.com",
  address: "Blue Area, Islamabad, Pakistan",
  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
    { day: "Saturday", time: "10:00 AM – 5:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const siteConfig = contactInfo;
