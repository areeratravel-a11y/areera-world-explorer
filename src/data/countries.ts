export const REGIONS = ["Asia", "Middle East", "North Africa", "Africa", "Western"] as const;
export type Region = (typeof REGIONS)[number];

export const REGION_SLUGS: Record<Region, string> = {
  Asia: "asia",
  "Middle East": "middle-east",
  "North Africa": "north-africa",
  Africa: "africa",
  Western: "western",
};

export type VisaCategory = {
  name: string;
  duration: string;
  validity: string;
  entryType: "Single Entry" | "Multiple Entry" | "Transit";
  typeBadge: "e-Visa" | "Sticker Visa" | "Visa on Arrival" | "Fast Track" | "Standard Visa";
  processingTime: string;
  bestFor: string;
};

export type Country = {
  name: string;
  slug: string;
  isoCode: string;
  region: Region;
  flag: string;
  capital: string;
  currency: string;
  processingTime: string;
  fees: string;
  visaTypes: string[];
  visaCategories: VisaCategory[];
  documents: string[];
  popularCities: string[];
  highlights: string[];
  bestSeason: string;
  stepProcess: { step: number; title: string; desc: string }[];
  relatedCountries: string[];
  blurb: string;
};

const STANDARD_DOCS = [
  "Passport valid for at least 6 months with min. 2 blank pages",
  "Recent passport-sized photographs (white background, 35x45mm)",
  "Accurately completed and signed visa application form",
  "Confirmed return/onward flight reservation & hotel booking",
  "Original bank statement of last 3-6 months (duly stamped)",
  "Employment letter / NOC / Business registration certificate",
  "National ID card copy & previous visa copies (if applicable)",
];

const DEFAULT_PROCESS_STEPS = [
  {
    step: 1,
    title: "Free Profile & Document Assessment",
    desc: "Our visa specialists review your passport, financial profile, and purpose of travel to choose the optimal visa route.",
  },
  {
    step: 2,
    title: "File Preparation & Verification",
    desc: "We verify and format all mandatory paperwork, application forms, travel itineraries, and hotel reservations.",
  },
  {
    step: 3,
    title: "Submission to Embassy or E-Portal",
    desc: "Your file is lodged via official embassy channels or accelerated e-visa systems with real-time tracking.",
  },
  {
    step: 4,
    title: "Visa Delivery & Travel Briefing",
    desc: "Receive your approved visa alongside essential immigration entry guidelines, insurance, and air ticket support.",
  },
];

type Seed = {
  name: string;
  slug: string;
  isoCode: string;
  region: Region;
  flag: string;
  capital: string;
  currency: string;
  processingTime?: string;
  fees?: string;
  visaTypes?: string[];
  visaCategories?: VisaCategory[];
  extraDocs?: string[];
  popularCities?: string[];
  highlights?: string[];
  bestSeason?: string;
  blurb: string;
};

const seeds: Seed[] = [
  // ASIA
  {
    name: "Pakistan",
    slug: "pakistan",
    isoCode: "pk",
    region: "Asia",
    flag: "🇵🇰",
    capital: "Islamabad",
    currency: "PKR",
    processingTime: "2-7 working days",
    popularCities: ["Islamabad", "Lahore", "Karachi", "Hunza Valley", "Skardu"],
    highlights: ["Karakoram Highway", "Badshahi Mosque", "Fairy Meadows", "Historic Lahore"],
    bestSeason: "October to April (South) / May to September (North)",
    visaTypes: ["Tourist e-Visa", "Business e-Visa", "Family Visit Visa", "Work Visa"],
    blurb:
      "Majestic Himalayan and Karakoram peaks, ancient Mughal heritage, vibrant cultural capitals, and a streamlined official e-visa portal.",
  },
  {
    name: "India",
    slug: "india",
    isoCode: "in",
    region: "Asia",
    flag: "🇮🇳",
    capital: "New Delhi",
    currency: "INR",
    processingTime: "3-7 working days",
    popularCities: ["New Delhi", "Mumbai", "Jaipur", "Bengaluru", "Goa"],
    highlights: ["Taj Mahal", "Rajasthan Forts", "Kerala Backwaters", "Varanasi Ghats"],
    bestSeason: "October to March",
    visaTypes: [
      "e-Tourist Visa (30 Days / 1 Year)",
      "e-Business Visa",
      "e-Medical Visa",
      "Conference Visa",
    ],
    blurb:
      "From the timeless Taj Mahal to bustling tech hubs and tropical coastal backwaters, India provides versatile e-visa routes for tourism and trade.",
  },
  {
    name: "China",
    slug: "china",
    isoCode: "cn",
    region: "Asia",
    flag: "🇨🇳",
    capital: "Beijing",
    currency: "CNY",
    processingTime: "7-15 working days",
    popularCities: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu"],
    highlights: ["The Great Wall", "Forbidden City", "The Bund Shanghai", "Terracotta Army"],
    bestSeason: "April to May & September to October",
    visaTypes: [
      "L Visa (Tourist)",
      "M Visa (Commercial Trade)",
      "F Visa (Non-commercial)",
      "Z Visa (Work)",
    ],
    blurb:
      "Global trade powerhouse, ancient imperial capitals, and futuristic mega-cities served by dedicated visa center filing.",
  },
  {
    name: "Japan",
    slug: "japan",
    isoCode: "jp",
    region: "Asia",
    flag: "🇯🇵",
    capital: "Tokyo",
    currency: "JPY",
    processingTime: "5-10 working days",
    popularCities: ["Tokyo", "Kyoto", "Osaka", "Sapporo", "Fukuoka"],
    highlights: ["Mount Fuji", "Kyoto Temples", "Shibuya Crossing", "Hiroshima Peace Memorial"],
    bestSeason: "March to May (Cherry Blossom) & September to November (Autumn)",
    visaTypes: [
      "Temporary Visitor Visa (Tourism)",
      "Business Short-Term Visa",
      "Transit Visa",
      "Multiple Entry Tourist Visa",
    ],
    blurb:
      "Pinnacle of technology, centuries-old shrines, and seasonal natural beauty processed through designated visa application centers.",
  },
  {
    name: "South Korea",
    slug: "south-korea",
    isoCode: "kr",
    region: "Asia",
    flag: "🇰🇷",
    capital: "Seoul",
    currency: "KRW",
    processingTime: "7-14 working days",
    popularCities: ["Seoul", "Busan", "Jeju Island", "Incheon", "Gyeongju"],
    highlights: ["Gyeongbokgung Palace", "Jeju Lava Tubes", "Haeundae Beach", "N Seoul Tower"],
    bestSeason: "March to May & September to November",
    visaTypes: [
      "C-3-9 (General Tourist Visa)",
      "C-3-4 (Business Visa)",
      "K-ETA (Eligible Passports)",
      "D-Series Study Visa",
    ],
    blurb:
      "Dynamic K-culture capital, scenic Jeju coastlines, and a structured short-stay visa framework with verified documentation.",
  },
  {
    name: "Thailand",
    slug: "thailand",
    isoCode: "th",
    region: "Asia",
    flag: "🇹🇭",
    capital: "Bangkok",
    currency: "THB",
    processingTime: "3-7 working days",
    popularCities: ["Bangkok", "Phuket", "Pattaya", "Chiang Mai", "Koh Samui"],
    highlights: [
      "Grand Palace",
      "Phi Phi Islands",
      "Ayutthaya Historical Park",
      "Floating Markets",
    ],
    bestSeason: "November to February",
    visaTypes: [
      "Tourist Visa (TR - 60 Days)",
      "e-Visa on Arrival (e-VOA)",
      "Non-Immigrant B (Business)",
      "Special Tourist Visa (STV)",
    ],
    blurb:
      "Tropical islands, golden temples, world-renowned street cuisine, and one of Southeast Asia's most accessible tourist visa procedures.",
  },
  {
    name: "Malaysia",
    slug: "malaysia",
    isoCode: "my",
    region: "Asia",
    flag: "🇲🇾",
    capital: "Kuala Lumpur",
    currency: "MYR",
    processingTime: "3-5 working days",
    popularCities: ["Kuala Lumpur", "Penang", "Langkawi", "Malacca", "Kota Kinabalu"],
    highlights: ["Petronas Twin Towers", "Batu Caves", "Langkawi Sky Bridge", "Mount Kinabalu"],
    bestSeason: "December to April",
    visaTypes: [
      "eVisa (Tourism - 30 Days)",
      "Multiple Entry eVisa",
      "Student Pass",
      "Social Visit Pass",
    ],
    blurb:
      "Iconic Petronas Twin Towers, pristine Langkawi beaches, and rich cultural diversity with rapid online eVisa issuance.",
  },
  {
    name: "Singapore",
    slug: "singapore",
    isoCode: "sg",
    region: "Asia",
    flag: "🇸🇬",
    capital: "Singapore",
    currency: "SGD",
    processingTime: "3-5 working days",
    popularCities: ["Singapore City", "Sentosa Island", "Marina Bay", "Jurong"],
    highlights: ["Marina Bay Sands", "Gardens by the Bay", "Universal Studios", "Changi Jewel"],
    bestSeason: "Year-round (November to January for festivals)",
    visaTypes: [
      "e-Visa (Authorized Agency Submission)",
      "Business Visit Visa",
      "Social Visit Pass",
    ],
    blurb:
      "Ultra-modern global finance capital, family entertainment hub, and premium business stopover destination.",
  },
  {
    name: "Indonesia",
    slug: "indonesia",
    isoCode: "id",
    region: "Asia",
    flag: "🇮🇩",
    capital: "Jakarta",
    currency: "IDR",
    processingTime: "3-5 working days",
    popularCities: ["Jakarta", "Bali (Denpasar)", "Yogyakarta", "Surabaya", "Lombok"],
    highlights: ["Ubud Rice Terraces", "Borobudur Temple", "Komodo Island", "Mount Bromo"],
    bestSeason: "April to October (Dry Season)",
    visaTypes: ["e-VOA (30 Days)", "B211A Visit Visa (60-180 Days)", "Business e-Visa"],
    blurb:
      "Enchanting Bali resorts, volcanic landscapes, ancient temple complexes, and fast online Electronic Visa on Arrival.",
  },
  {
    name: "Philippines",
    slug: "philippines",
    isoCode: "ph",
    region: "Asia",
    flag: "🇵🇭",
    capital: "Manila",
    currency: "PHP",
    processingTime: "5-10 working days",
    popularCities: ["Manila", "Cebu", "Boracay", "Palawan (El Nido)", "Davao"],
    highlights: ["El Nido Lagoons", "Chocolate Hills", "White Beach Boracay", "Intramuros Manila"],
    bestSeason: "December to April",
    visaTypes: ["9(a) Temporary Visitor Visa", "e-Visa (Pilot)", "Business Visa"],
    blurb:
      "Archipelago of over 7,000 tropical islands, world-class diving reefs, crystal lagoons, and hospitable English-friendly culture.",
  },
  {
    name: "Vietnam",
    slug: "vietnam",
    isoCode: "vn",
    region: "Asia",
    flag: "🇻🇳",
    capital: "Hanoi",
    currency: "VND",
    processingTime: "3-5 working days",
    popularCities: ["Hanoi", "Ho Chi Minh City", "Da Nang", "Hoi An", "Nha Trang"],
    highlights: [
      "Halong Bay",
      "Hoi An Ancient Town",
      "Cu Chi Tunnels",
      "Golden Bridge Ba Na Hills",
    ],
    bestSeason: "February to April & August to October",
    visaTypes: [
      "e-Visa (30/90 Days Single/Multiple)",
      "Business e-Visa",
      "Tourist Visa on Arrival Approval Letter",
    ],
    blurb:
      "Emerald waters of Halong Bay, historic lantern-lit Hoi An, and a convenient, official 90-day electronic visa program.",
  },
  {
    name: "Sri Lanka",
    slug: "sri-lanka",
    isoCode: "lk",
    region: "Asia",
    flag: "🇱🇰",
    capital: "Colombo",
    currency: "LKR",
    processingTime: "2-4 working days",
    popularCities: ["Colombo", "Kandy", "Galle", "Nuwara Eliya", "Ella"],
    highlights: ["Sigiriya Rock Fortress", "Nine Arch Bridge", "Yala Safari", "Galle Dutch Fort"],
    bestSeason: "December to April (South & West) / May to September (East)",
    visaTypes: ["Electronic Travel Authorization (ETA - 30 Days)", "Business ETA", "Transit ETA"],
    blurb:
      "Lush tea plantations, ancient UNESCO heritage fortresses, golden coastlines, and swift online ETA authorization.",
  },
  {
    name: "Bangladesh",
    slug: "bangladesh",
    isoCode: "bd",
    region: "Asia",
    flag: "🇧🇩",
    capital: "Dhaka",
    currency: "BDT",
    processingTime: "5-10 working days",
    popularCities: ["Dhaka", "Chittagong", "Sylhet", "Cox's Bazar", "Khulna"],
    highlights: [
      "Sundarbans Mangrove Forest",
      "Cox's Bazar Longest Beach",
      "Srimangal Tea Gardens",
    ],
    bestSeason: "November to February",
    visaTypes: ["Tourist Visa", "Business Visa", "Employment Visa", "Visa on Arrival (Eligible)"],
    blurb:
      "Flourishing textile trade, the world's largest natural mangrove forest, and traditional hospitality with embassy processing.",
  },
  {
    name: "Nepal",
    slug: "nepal",
    isoCode: "np",
    region: "Asia",
    flag: "🇳🇵",
    capital: "Kathmandu",
    currency: "NPR",
    processingTime: "2-4 working days / On Arrival",
    popularCities: ["Kathmandu", "Pokhara", "Lumbini", "Chitwan", "Nagarkot"],
    highlights: [
      "Mount Everest Base Camp",
      "Phewa Lake Pokhara",
      "Pashupatinath Temple",
      "Chitwan National Park",
    ],
    bestSeason: "October to December & March to May",
    visaTypes: [
      "Tourist Visa on Arrival",
      "Online Visa Pre-Approval (15/30/90 Days)",
      "Business Visa",
    ],
    blurb:
      "Himalayan trekking capital, birth place of Buddha in Lumbini, and straightforward on-arrival visa processing.",
  },
  {
    name: "Maldives",
    slug: "maldives",
    isoCode: "mv",
    region: "Asia",
    flag: "🇲🇻",
    capital: "Malé",
    currency: "MVR",
    processingTime: "Instant (30-Day Free Visa on Arrival)",
    popularCities: ["Malé", "Maafushi", "Hulhumalé", "Baa Atoll", "Ari Atoll"],
    highlights: [
      "Luxury Overwater Villas",
      "Coral Reef Diving",
      "Bioluminescent Beach",
      "Island Hopping",
    ],
    bestSeason: "November to April",
    visaTypes: ["Tourist Visa on Arrival (Free 30 Days)", "Business Visa", "Work Permit Visa"],
    blurb:
      "Turquoise lagoons, private overwater bungalows, honeymoon paradise with a complimentary 30-day visa on arrival for all nationalities.",
  },
  {
    name: "Cambodia",
    slug: "cambodia",
    isoCode: "kh",
    region: "Asia",
    flag: "🇰🇭",
    capital: "Phnom Penh",
    currency: "KHR",
    processingTime: "3-5 working days",
    popularCities: ["Phnom Penh", "Siem Reap", "Sihanoukville", "Battambang", "Kampot"],
    highlights: [
      "Angkor Wat Complex",
      "Royal Palace Phnom Penh",
      "Koh Rong Island",
      "Tonle Sap Lake",
    ],
    bestSeason: "November to February",
    visaTypes: [
      "e-Visa (Tourist Type T - 30 Days)",
      "Visa on Arrival",
      "Ordinary Visa (Type E - Business)",
    ],
    blurb:
      "Magnificent Angkor Wat temple wonders, French colonial riverfronts, and an uncomplicated government e-visa framework.",
  },
  {
    name: "Hong Kong",
    slug: "hong-kong",
    isoCode: "hk",
    region: "Asia",
    flag: "🇭🇰",
    capital: "Hong Kong",
    currency: "HKD",
    processingTime: "Instant / 2-4 weeks",
    popularCities: ["Hong Kong Island", "Kowloon", "Lantau Island", "New Territories"],
    highlights: [
      "Victoria Peak Sky Terrace",
      "Big Buddha Lantau",
      "Tsim Sha Tsui Promenade",
      "Disneyland",
    ],
    bestSeason: "October to December",
    visaTypes: [
      "Pre-arrival Registration (PAR)",
      "Tourist Entry Permit",
      "Business & Investment Visa",
    ],
    blurb:
      "Dazzling skyline, world-class culinary capital, duty-free shopping haven, and efficient entry clearance.",
  },
  {
    name: "Azerbaijan",
    slug: "azerbaijan",
    isoCode: "az",
    region: "Asia",
    flag: "🇦🇿",
    capital: "Baku",
    currency: "AZN",
    processingTime: "1-3 working days (ASAN e-Visa)",
    popularCities: ["Baku", "Gabala", "Shahdag", "Ganja", "Sheki"],
    highlights: [
      "Flame Towers Baku",
      "Old City Icherisheher",
      "Shahdag Mountain Resort",
      "Gobustan Mud Volcanoes",
    ],
    bestSeason: "April to June & September to October",
    visaTypes: ["ASAN e-Visa (Standard - 3 Days)", "ASAN Urgent e-Visa (3 Hours)", "Business Visa"],
    blurb:
      "Where modern architecture meets Caspian Sea breezes and Caucasus ski slopes, featuring rapid 3-day ASAN e-visas.",
  },
  {
    name: "Georgia",
    slug: "georgia",
    isoCode: "ge",
    region: "Asia",
    flag: "🇬🇪",
    capital: "Tbilisi",
    currency: "GEL",
    processingTime: "5-10 working days",
    popularCities: ["Tbilisi", "Batumi", "Gudauri", "Kazbegi", "Kutaisi"],
    highlights: [
      "Old Tbilisi Sulphur Baths",
      "Gergeti Trinity Church Kazbegi",
      "Batumi Boulevard",
      "Gudauri Ski Slopes",
    ],
    bestSeason: "May to June & September to October",
    visaTypes: [
      "e-Visa (Short-Term Tourist)",
      "Consulate Visa",
      "Visa-Free for GCC Residents & Valid US/Schengen Visa Holders",
    ],
    blurb:
      "Ancient cobblestone streets, snow-capped Caucasus peaks, Black Sea beaches, and welcoming travel regulations.",
  },
  {
    name: "Kazakhstan",
    slug: "kazakhstan",
    isoCode: "kz",
    region: "Asia",
    flag: "🇰🇿",
    capital: "Astana",
    currency: "KZT",
    processingTime: "5-10 working days",
    popularCities: ["Astana", "Almaty", "Shymkent", "Aktau", "Turkistan"],
    highlights: [
      "Baiterek Tower Astana",
      "Charyn Canyon",
      "Medeu High-Altitude Rink",
      "Big Almaty Lake",
    ],
    bestSeason: "May to September",
    visaTypes: ["Tourist e-Visa", "Business Visa", "Consular Visa Entry"],
    blurb:
      "Central Asia's economic powerhouse, dramatic canyon landscapes, and futuristic architecture with modern e-visa options.",
  },

  // MIDDLE EAST
  {
    name: "United Arab Emirates",
    slug: "uae",
    isoCode: "ae",
    region: "Middle East",
    flag: "🇦🇪",
    capital: "Abu Dhabi",
    currency: "AED",
    processingTime: "24-72 hours",
    popularCities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah"],
    highlights: [
      "Burj Khalifa",
      "Sheikh Zayed Grand Mosque",
      "Museum of the Future",
      "Palm Jumeirah",
      "Desert Safari",
    ],
    bestSeason: "October to April",
    visaTypes: [
      "30-Day Tourist Visa",
      "60-Day Tourist Visa",
      "Multiple Entry Visit Visa",
      "48/96-Hour Transit Visa",
      "Investor & Freelance Entry",
    ],
    blurb:
      "Dubai and Abu Dhabi — the world's premiere destination for luxury tourism, global business expos, and seamless e-visa approvals.",
  },
  {
    name: "Saudi Arabia",
    slug: "saudi-arabia",
    isoCode: "sa",
    region: "Middle East",
    flag: "🇸🇦",
    capital: "Riyadh",
    currency: "SAR",
    processingTime: "24-48 hours (e-Visa) / 3-5 days",
    popularCities: ["Riyadh", "Jeddah", "Makkah", "Madinah", "AlUla", "Dammam"],
    highlights: [
      "Al-Masjid an-Nabawi & Makkah",
      "AlUla Hegra UNESCO Site",
      "Kingdom Centre Riyadh",
      "Jeddah Corniche",
    ],
    bestSeason: "November to March",
    visaTypes: [
      "Tourist e-Visa (1 Year Multiple Entry)",
      "Umrah Visa",
      "Business Visit Visa",
      "Family Visit Visa",
      "Work Entry Visa",
    ],
    blurb:
      "Umrah pilgrims, mega-events in Riyadh, and ancient heritage in AlUla powered by fast 1-year multiple entry electronic tourist visas.",
  },
  {
    name: "Qatar",
    slug: "qatar",
    isoCode: "qa",
    region: "Middle East",
    flag: "🇶🇦",
    capital: "Doha",
    currency: "QAR",
    processingTime: "2-4 working days (Hayya Portal)",
    popularCities: ["Doha", "Al Wakrah", "Lusail", "Al Khor"],
    highlights: [
      "Museum of Islamic Art",
      "Souq Waqif",
      "The Pearl Qatar",
      "Lusail Marina",
      "Inland Sea Safari",
    ],
    bestSeason: "November to April",
    visaTypes: ["Hayya Tourist Visa (A1/A2/A3)", "Business Visit Visa", "Transit Visa"],
    blurb:
      "Doha's world-renowned museums, vibrant Souq Waqif, luxury corniche, and efficient Hayya e-visa portal.",
  },
  {
    name: "Kuwait",
    slug: "kuwait",
    isoCode: "kw",
    region: "Middle East",
    flag: "🇰🇼",
    capital: "Kuwait City",
    currency: "KWD",
    processingTime: "3-5 working days",
    popularCities: ["Kuwait City", "Salmiya", "Hawalli", "Al Ahmadi"],
    highlights: [
      "Kuwait Towers",
      "The Avenues Mall",
      "Grand Mosque Kuwait",
      "Sheikh Jaber Cultural Centre",
    ],
    bestSeason: "November to March",
    visaTypes: ["Tourist e-Visa", "Commercial Visit Visa", "Family Visit Visa", "Work Visa"],
    blurb:
      "A historic Gulf hub known for commercial prosperity, cultural landmarks, and structured commercial/visit visa channels.",
  },
  {
    name: "Bahrain",
    slug: "bahrain",
    isoCode: "bh",
    region: "Middle East",
    flag: "🇧🇭",
    capital: "Manama",
    currency: "BHD",
    processingTime: "2-4 working days",
    popularCities: ["Manama", "Muharraq", "Riffa", "Amwaj Islands"],
    highlights: [
      "Bahrain Fort (Qal'at al-Bahrain)",
      "Al Fateh Grand Mosque",
      "Bahrain International Circuit",
      "Bab Al Bahrain",
    ],
    bestSeason: "November to March",
    visaTypes: [
      "Tourist eVisa (2 Weeks / 1 Month / 1 Year)",
      "Business eVisa",
      "On-Arrival Visa (Eligible)",
    ],
    blurb:
      "Compact, easy-access island kingdom with rapid electronic visas, heritage pearl trails, and Formula 1 excitement.",
  },
  {
    name: "Oman",
    slug: "oman",
    isoCode: "om",
    region: "Middle East",
    flag: "🇴🇲",
    capital: "Muscat",
    currency: "OMR",
    processingTime: "2-4 working days (Royal Oman Police eVisa)",
    popularCities: ["Muscat", "Salalah", "Nizwa", "Sur", "Musandam"],
    highlights: [
      "Sultan Qaboos Grand Mosque",
      "Wadi Shab & Bimmah Sinkhole",
      "Nizwa Fort",
      "Salalah Khareef Season",
    ],
    bestSeason: "October to April (Muscat) / July to September (Salalah)",
    visaTypes: [
      "26M Tourist eVisa (30 Days)",
      "26A Tourist eVisa (10 Days)",
      "GCC Resident eVisa",
      "Business Visa",
    ],
    blurb:
      "Majestic wadis, ancient desert forts, untouched coastlines, and swift official Royal Oman Police eVisas.",
  },
  {
    name: "Jordan",
    slug: "jordan",
    isoCode: "jo",
    region: "Middle East",
    flag: "🇯🇴",
    capital: "Amman",
    currency: "JOD",
    processingTime: "3-5 working days",
    popularCities: ["Amman", "Petra (Wadi Musa)", "Aqaba", "Jerash", "Madaba"],
    highlights: [
      "Petra Treasury UNESCO Wonder",
      "Wadi Rum Desert",
      "Dead Sea Floating",
      "Roman Ruins of Jerash",
    ],
    bestSeason: "March to May & September to November",
    visaTypes: [
      "Tourist e-Visa",
      "Jordan Pass (Visa + Attractions)",
      "Business Visa",
      "Visa on Arrival",
    ],
    blurb:
      "Wonder of Petra carved in rose-red rock, Martian landscapes in Wadi Rum, and the buoyant waters of the Dead Sea.",
  },
  {
    name: "Lebanon",
    slug: "lebanon",
    isoCode: "lb",
    region: "Middle East",
    flag: "🇱🇧",
    capital: "Beirut",
    currency: "LBP",
    processingTime: "5-10 working days",
    popularCities: ["Beirut", "Byblos", "Tripoli", "Jounieh", "Baalbek"],
    highlights: [
      "Jeita Grotto",
      "Byblos Old Port & Castle",
      "Baalbek Roman Temples",
      "Beirut Raouche Rocks",
    ],
    bestSeason: "April to June & September to November",
    visaTypes: ["Tourist Visa", "Business Visa", "Visa on Arrival (Eligible Nationalities)"],
    blurb:
      "Mediterranean dining, ancient Phoenician port cities, mountain vineyards, and rich cultural history.",
  },
  {
    name: "Iraq",
    slug: "iraq",
    isoCode: "iq",
    region: "Middle East",
    flag: "🇮🇶",
    capital: "Baghdad",
    currency: "IQD",
    processingTime: "7-15 working days",
    popularCities: ["Baghdad", "Najaf", "Karbala", "Erbil", "Basra"],
    highlights: [
      "Holy Shrines of Najaf & Karbala",
      "Erbil Citadel",
      "Ziggurat of Ur",
      "Baghdad Museum",
    ],
    bestSeason: "October to April",
    visaTypes: [
      "Ziyarat / Religious Pilgrimage Visa",
      "Tourist e-Visa (Selected Ports)",
      "Business Entry Visa",
    ],
    blurb:
      "Cradle of civilization, holy shrines of Najaf and Karbala for Ziyarat travelers, and growing business delegations.",
  },
  {
    name: "Israel",
    slug: "israel",
    isoCode: "il",
    region: "Middle East",
    flag: "🇮🇱",
    capital: "Jerusalem",
    currency: "ILS",
    processingTime: "10-20 working days",
    popularCities: ["Jerusalem", "Tel Aviv", "Haifa", "Eilat", "Nazareth"],
    highlights: [
      "Old City Jerusalem",
      "Western Wall & Dome of the Rock",
      "Tel Aviv Promenade",
      "Dead Sea",
    ],
    bestSeason: "March to May & October to November",
    visaTypes: ["B/2 Visitor Visa", "B/1 Work Visa", "Official / Religious Visa"],
    blurb:
      "Sacred historical sites, Mediterranean coastlines, and thorough documentation requirements.",
  },
  {
    name: "Yemen",
    slug: "yemen",
    isoCode: "ye",
    region: "Middle East",
    flag: "🇾🇪",
    capital: "Sana'a",
    currency: "YER",
    processingTime: "Varies (Case by Case)",
    popularCities: ["Sana'a", "Aden", "Socotra Island", "Mukalla"],
    highlights: [
      "Socotra Island Dragon Blood Trees",
      "Old City of Sana'a",
      "Shibam Manhattan of the Desert",
    ],
    bestSeason: "October to April",
    visaTypes: ["Tourist Visa (Socotra Permits)", "Business Visa", "Family Visit Visa"],
    blurb:
      "Unique biodiversity in Socotra and ancient high-rise mudbrick architecture with specialized approval procedures.",
  },
  {
    name: "Syria",
    slug: "syria",
    isoCode: "sy",
    region: "Middle East",
    flag: "🇸🇾",
    capital: "Damascus",
    currency: "SYP",
    processingTime: "10-20 working days",
    popularCities: ["Damascus", "Aleppo", "Latakia", "Homs", "Palmyra"],
    highlights: [
      "Umayyad Mosque Damascus",
      "Citadel of Aleppo",
      "Krak des Chevaliers",
      "Old Souqs",
    ],
    bestSeason: "March to May & September to November",
    visaTypes: ["Tourist Visa (Security Clearance)", "Ziyarat Visa", "Business Visa"],
    blurb:
      "One of the world's oldest continuously inhabited capitals with specialized visa support and security approvals.",
  },
  {
    name: "Turkey",
    slug: "turkey",
    isoCode: "tr",
    region: "Middle East",
    flag: "🇹🇷",
    capital: "Ankara",
    currency: "TRY",
    processingTime: "24-48 hours (e-Visa) / 7-15 days (Sticker)",
    popularCities: ["Istanbul", "Antalya", "Cappadocia (Goreme)", "Bursa", "Trabzon", "Izmir"],
    highlights: [
      "Hagia Sophia & Blue Mosque",
      "Cappadocia Hot Air Balloons",
      "Pamukkale Thermal Pools",
      "Bosphorus Cruise",
    ],
    bestSeason: "April to May & September to November",
    visaTypes: [
      "Tourist e-Visa (Conditional / Direct)",
      "Sticker Tourist Visa",
      "Business Single/Multiple Entry",
      "Medical & Transit Visa",
    ],
    blurb:
      "Magical Cappadocia hot air balloons, Istanbul's historic Bosphorus skyline, Mediterranean beaches, and quick electronic visas.",
  },

  // NORTH AFRICA
  {
    name: "Egypt",
    slug: "egypt",
    isoCode: "eg",
    region: "North Africa",
    flag: "🇪🇬",
    capital: "Cairo",
    currency: "EGP",
    processingTime: "3-7 working days (e-Visa)",
    popularCities: ["Cairo", "Alexandria", "Sharm El Sheikh", "Hurghada", "Luxor", "Aswan"],
    highlights: [
      "Giza Pyramids & Sphinx",
      "Valley of the Kings Luxor",
      "Nile River Cruise",
      "Red Sea Coral Reefs",
    ],
    bestSeason: "October to April",
    visaTypes: [
      "e-Visa (Single / Multiple Entry 30 Days)",
      "Visa on Arrival",
      "Consulate Tourist Visa",
      "Business Visa",
    ],
    blurb:
      "Great Pyramids of Giza, ancient tombs along the Nile, Red Sea luxury dive resorts, and convenient online e-visa issuance.",
  },
  {
    name: "Morocco",
    slug: "morocco",
    isoCode: "ma",
    region: "North Africa",
    flag: "🇲🇦",
    capital: "Rabat",
    currency: "MAD",
    processingTime: "3-7 working days (eVisa) / 10-15 days",
    popularCities: ["Marrakech", "Casablanca", "Fes", "Chefchaouen", "Tangier"],
    highlights: [
      "Jemaa el-Fnaa Marrakech",
      "Hassan II Mosque Casablanca",
      "Blue City Chefchaouen",
      "Sahara Desert Dunes",
    ],
    bestSeason: "March to May & September to November",
    visaTypes: ["eVisa (Tourism - 30 Days)", "Consulate Tourist Visa", "Business Visa"],
    blurb:
      "Vibrant Marrakech souqs, the iconic blue alleys of Chefchaouen, Sahara desert glamping, and modern eVisa processing.",
  },
  {
    name: "Tunisia",
    slug: "tunisia",
    isoCode: "tn",
    region: "North Africa",
    flag: "🇹🇳",
    capital: "Tunis",
    currency: "TND",
    processingTime: "5-10 working days",
    popularCities: ["Tunis", "Sousse", "Hammamet", "Djerba", "Sidi Bou Said"],
    highlights: [
      "Sidi Bou Said Blue Village",
      "El Jem Roman Amphitheatre",
      "Ancient Carthage Ruins",
      "Sahara Oasis",
    ],
    bestSeason: "April to June & September to November",
    visaTypes: ["Tourist Visa", "Business Visa", "Transit Visa"],
    blurb:
      "Picturesque whitewashed clifftop villages, Roman colosseums, Mediterranean shores, and relaxed coastal travel.",
  },
  {
    name: "Algeria",
    slug: "algeria",
    isoCode: "dz",
    region: "North Africa",
    flag: "🇩🇿",
    capital: "Algiers",
    currency: "DZD",
    processingTime: "10-20 working days",
    popularCities: ["Algiers", "Oran", "Constantine", "Ghardaia", "Tamanrasset"],
    highlights: [
      "Casbah of Algiers",
      "Bridges of Constantine",
      "Tassili n'Ajjer Rock Art",
      "Santa Cruz Fort Oran",
    ],
    bestSeason: "October to April",
    visaTypes: [
      "Tourist Visa (Invitation Required)",
      "Business Visa",
      "On-Arrival Visa for Sahara Tours",
    ],
    blurb:
      "Magnificent Sahara dunes, cliffside bridges of Constantine, French colonial grandeur in Algiers with consulate verification.",
  },
  {
    name: "Libya",
    slug: "libya",
    isoCode: "ly",
    region: "North Africa",
    flag: "🇱🇾",
    capital: "Tripoli",
    currency: "LYD",
    processingTime: "Varies (Sponsor Driven)",
    popularCities: ["Tripoli", "Benghazi", "Misrata", "Ghadames"],
    highlights: ["Leptis Magna Roman City", "Old Tripoli Medina", "Ghadames Oasis Desert City"],
    bestSeason: "November to March",
    visaTypes: ["Business Visa (Company Sponsor)", "Work Permit Entry", "Official Visit Visa"],
    blurb:
      "Pristine Roman architectural gems at Leptis Magna and commercial trade requiring authorized local corporate sponsorship.",
  },
  {
    name: "Sudan",
    slug: "sudan",
    isoCode: "sd",
    region: "North Africa",
    flag: "🇸🇩",
    capital: "Khartoum",
    currency: "SDG",
    processingTime: "10-20 working days",
    popularCities: ["Khartoum", "Port Sudan", "Omdurman", "Kassala"],
    highlights: [
      "Nubian Pyramids of Meroe",
      "Confluence of the Blue & White Nile",
      "Red Sea Port Sudan",
    ],
    bestSeason: "November to February",
    visaTypes: ["Entry Visa", "Business Visa", "Humanitarian & Official Visa"],
    blurb:
      "Ancient Meroe Nubian pyramids and trade routes along the Nile with case-by-case consular processing.",
  },

  // AFRICA
  {
    name: "South Africa",
    slug: "south-africa",
    isoCode: "za",
    region: "Africa",
    flag: "🇿🇦",
    capital: "Pretoria",
    currency: "ZAR",
    processingTime: "10-20 working days (eVisa / VFS)",
    popularCities: ["Cape Town", "Johannesburg", "Durban", "Kruger Area", "Port Elizabeth"],
    highlights: [
      "Table Mountain Cape Town",
      "Kruger National Park Big 5",
      "Cape of Good Hope",
      "Garden Route Coast",
    ],
    bestSeason: "November to March (Cape Town) / May to September (Kruger Safari)",
    visaTypes: [
      "Tourist eVisa (90 Days)",
      "VFS Sticker Visitor Visa",
      "Business Visit Visa",
      "Critical Skills & Study Visa",
    ],
    blurb:
      "Breathtaking Table Mountain, world-class Big 5 Kruger safaris, scenic Garden Route, and official eVisa availability.",
  },

  // WESTERN & GLOBAL
  {
    name: "United Kingdom",
    slug: "united-kingdom",
    isoCode: "gb",
    region: "Western",
    flag: "🇬🇧",
    capital: "London",
    currency: "GBP",
    processingTime: "15-20 working days",
    popularCities: ["London", "Manchester", "Edinburgh", "Birmingham", "Oxford"],
    highlights: ["Big Ben & Parliament", "Tower Bridge London", "Edinburgh Castle", "Stonehenge"],
    bestSeason: "May to September",
    visaTypes: [
      "Standard Visitor Visa (6 Months / 2, 5, 10 Years)",
      "Business Visitor Visa",
      "Student Visa",
      "Transit Visa",
    ],
    blurb:
      "Iconic historic landmarks in London, prestigious Scottish highlands, and thorough documentation assistance for UK Standard Visitor Visas.",
  },
  {
    name: "United States",
    slug: "united-states",
    isoCode: "us",
    region: "Western",
    flag: "🇺🇸",
    capital: "Washington D.C.",
    currency: "USD",
    processingTime: "Appointment Dependent + DS-160 Prep",
    popularCities: ["New York", "Los Angeles", "Chicago", "Miami", "San Francisco", "Orlando"],
    highlights: [
      "Statue of Liberty NY",
      "Grand Canyon",
      "Golden Gate Bridge",
      "Times Square & Broadway",
    ],
    bestSeason: "April to October",
    visaTypes: [
      "B1/B2 Tourist & Business Visa (Up to 10 Years)",
      "F-1 Student Visa",
      "C-1 Transit Visa",
    ],
    blurb:
      "World-class business opportunities, theme parks, coast-to-coast landscapes with expert DS-160 filing and interview preparation.",
  },
  {
    name: "Canada",
    slug: "canada",
    isoCode: "ca",
    region: "Western",
    flag: "🇨🇦",
    capital: "Ottawa",
    currency: "CAD",
    processingTime: "30-60 days (IRCC Portal)",
    popularCities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Niagara Falls"],
    highlights: [
      "Niagara Falls",
      "Banff National Park Rockies",
      "CN Tower Toronto",
      "Old Quebec City",
    ],
    bestSeason: "May to October (Summer) / December to March (Skiing)",
    visaTypes: [
      "Temporary Resident Visa (V-1 Tourist)",
      "Business Visitor Visa",
      "eTA (Eligible Passports)",
      "Super Visa for Parents",
    ],
    blurb:
      "Stunning Canadian Rockies in Banff, Niagara Falls, cosmopolitan cities with end-to-end IRCC portal application support.",
  },
  {
    name: "Australia",
    slug: "australia",
    isoCode: "au",
    region: "Western",
    flag: "🇦🇺",
    capital: "Canberra",
    currency: "AUD",
    processingTime: "15-30 days (ImmiAccount)",
    popularCities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Gold Coast"],
    highlights: [
      "Sydney Opera House",
      "Great Barrier Reef",
      "Bondi Beach",
      "Melbourne Great Ocean Road",
    ],
    bestSeason: "September to November & March to May",
    visaTypes: [
      "Visitor Visa Subclass 600 (Tourist Stream)",
      "Subclass 600 (Business Stream)",
      "Transit Visa Subclass 771",
    ],
    blurb:
      "Sydney Opera House, Great Barrier Reef, pristine sunny beaches with complete ImmiAccount filing and financial verification.",
  },
];

function generateVisaCategories(s: Seed): VisaCategory[] {
  if (s.visaCategories && s.visaCategories.length > 0) return s.visaCategories;

  const isEvisa =
    s.blurb.toLowerCase().includes("e-visa") ||
    s.blurb.toLowerCase().includes("evisa") ||
    s.blurb.toLowerCase().includes("eta");
  const isVoa = s.blurb.toLowerCase().includes("arrival");

  const categories: VisaCategory[] = [
    {
      name: "Tourist / Leisure Visit",
      duration: "30 to 90 Days",
      validity: "90 to 180 Days",
      entryType: "Single Entry",
      typeBadge: isEvisa ? "e-Visa" : isVoa ? "Visa on Arrival" : "Sticker Visa",
      processingTime: s.processingTime ?? "5-10 working days",
      bestFor: "Vacations, sightseeing, visiting relatives and cultural tours",
    },
    {
      name: "Commercial / Business Visa",
      duration: "30 to 90 Days",
      validity: "6 Months to 1 Year",
      entryType: "Multiple Entry",
      typeBadge: isEvisa ? "Fast Track" : "Standard Visa",
      processingTime: s.processingTime ?? "5-10 working days",
      bestFor: "Meetings, conferences, client visits, trade exhibitions & scouting",
    },
    {
      name: "Family & Sponsored Visit",
      duration: "30 to 90 Days",
      validity: "90 Days",
      entryType: "Single Entry",
      typeBadge: "Standard Visa",
      processingTime: s.processingTime ?? "7-14 working days",
      bestFor: "Visiting immediate family members, weddings and personal ceremonies",
    },
    {
      name: "Transit Entry Permit",
      duration: "48 to 96 Hours",
      validity: "30 Days",
      entryType: "Transit",
      typeBadge: isEvisa ? "e-Visa" : "Standard Visa",
      processingTime: "1-3 working days",
      bestFor: "Layover passengers wishing to tour the city before connecting flights",
    },
  ];

  return categories;
}

export const countries: Country[] = seeds.map((s) => {
  const regionList = seeds.filter((o) => o.region === s.region);
  const selfIdx = regionList.findIndex((o) => o.slug === s.slug);
  const related: string[] = [];
  for (let i = 1; i < regionList.length && related.length < 4; i++) {
    const pick = regionList[(selfIdx + i) % regionList.length];
    if (pick && pick.slug !== s.slug) related.push(pick.slug);
  }

  // If fewer than 4 related in same region, fill with top popular
  if (related.length < 4) {
    const backup = ["uae", "saudi-arabia", "turkey", "malaysia", "thailand", "egypt"];
    for (const b of backup) {
      if (b !== s.slug && !related.includes(b) && related.length < 4) {
        related.push(b);
      }
    }
  }

  return {
    name: s.name,
    slug: s.slug,
    isoCode: s.isoCode,
    region: s.region,
    flag: s.flag,
    capital: s.capital,
    currency: s.currency,
    visaTypes: s.visaTypes ?? [
      "Tourist / Visit Visa",
      "Business Visa",
      "Transit Visa",
      "Work / Employment Entry",
    ],
    visaCategories: generateVisaCategories(s),
    documents: [...STANDARD_DOCS, ...(s.extraDocs ?? [])],
    popularCities: s.popularCities ?? [s.capital],
    highlights: s.highlights ?? [
      `Capital City of ${s.capital}`,
      "Cultural & Heritage Landmarks",
      "Natural Attractions",
    ],
    bestSeason: s.bestSeason ?? "Year-round (Check seasonal climate)",
    stepProcess: DEFAULT_PROCESS_STEPS,
    processingTime: s.processingTime ?? "5-15 working days",
    fees: s.fees ?? "Standard government embassy fees — transparent quote provided before filing",
    relatedCountries: related,
    blurb: s.blurb,
  };
});

export const getCountry = (slug: string) => countries.find((c) => c.slug === slug);

export const getRegionBySlug = (slug: string): Region | undefined =>
  REGIONS.find((r) => REGION_SLUGS[r] === slug);

export const countriesByRegion = (region: Region) => countries.filter((c) => c.region === region);

export const popularDestinations = [
  "uae",
  "saudi-arabia",
  "turkey",
  "malaysia",
  "thailand",
  "egypt",
  "azerbaijan",
  "south-africa",
  "united-kingdom",
  "china",
  "singapore",
  "qatar",
];

export const popularVisaDestinations = [
  "uae",
  "saudi-arabia",
  "turkey",
  "china",
  "egypt",
  "south-africa",
  "united-kingdom",
  "malaysia",
];

export const attestationCountries = ["saudi-arabia", "uae", "qatar", "kuwait", "oman", "bahrain"];
