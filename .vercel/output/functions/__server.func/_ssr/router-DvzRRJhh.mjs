import { i as __toESM } from "../_runtime.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, j as notFound, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as House, F as Clock, H as BedDouble, L as ChevronRight, M as Earth, R as ChevronDown, S as Mail, W as ArrowRight, _ as PhoneCall, b as Menu, d as Search, g as Phone, h as PlaneTakeoff, i as TicketsPlane, j as FileCheckCorner, l as ShieldCheck, s as Stamp, t as X, v as MessageSquare, w as LayoutGrid, x as MapPin } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { D as ticketFaqs, S as hotelFaqs, T as servicesFaqs, b as homeFaqs, c as aboutFaqs, f as contactFaqs, g as countryFaqs, k as visaFaqs, m as countriesHubFaqs, n as contactInfo, o as cn, r as services, u as attestationFaqs, v as flightFaqs } from "./router-DvzRRJhh2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/json-ld-DIRm8X3N.js
var LOGO_URL = "/areera-logo.svg";
function organizationSchema(origin = "") {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "Areera Travel and Tours",
		url: `${origin}/`,
		logo: `${origin}${LOGO_URL}`,
		description: "Visa assistance, air ticketing, document attestation, hotel booking and flight reservation services.",
		telephone: contactInfo.phone,
		email: contactInfo.email,
		address: {
			"@type": "PostalAddress",
			streetAddress: contactInfo.address,
			addressCountry: "PK"
		}
	};
}
function websiteSchema(origin = "") {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Areera Travel and Tours",
		url: `${origin}/`,
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `${origin}/countries?search={search_term_string}`
			},
			"query-input": "required name=search_term_string"
		}
	};
}
function breadcrumbSchema(items, origin = "") {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			...item.item ? { item: `${origin}${item.item}` } : {}
		}))
	};
}
function serviceSchema(service, origin = "") {
	return {
		"@context": "https://schema.org",
		"@type": "Service",
		name: service.title,
		description: service.description,
		provider: {
			"@type": "Organization",
			name: "Areera Travel and Tours"
		},
		url: `${origin}${service.path}`
	};
}
function faqPageSchema(questions) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: questions.map((q) => ({
			"@type": "Question",
			name: q.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: q.answer
			}
		}))
	};
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/countries-B3pPxzMw.js
var REGIONS = [
	"Asia",
	"Middle East",
	"North Africa",
	"Africa",
	"Western"
];
var REGION_SLUGS = {
	Asia: "asia",
	"Middle East": "middle-east",
	"North Africa": "north-africa",
	Africa: "africa",
	Western: "western"
};
var STANDARD_DOCS = [
	"Passport valid for at least 6 months with min. 2 blank pages",
	"Recent passport-sized photographs (white background, 35x45mm)",
	"Accurately completed and signed visa application form",
	"Confirmed return/onward flight reservation & hotel booking",
	"Original bank statement of last 3-6 months (duly stamped)",
	"Employment letter / NOC / Business registration certificate",
	"National ID card copy & previous visa copies (if applicable)"
];
var DEFAULT_PROCESS_STEPS = [
	{
		step: 1,
		title: "Free Profile & Document Assessment",
		desc: "Our visa specialists review your passport, financial profile, and purpose of travel to choose the optimal visa route."
	},
	{
		step: 2,
		title: "File Preparation & Verification",
		desc: "We verify and format all mandatory paperwork, application forms, travel itineraries, and hotel reservations."
	},
	{
		step: 3,
		title: "Submission to Embassy or E-Portal",
		desc: "Your file is lodged via official embassy channels or accelerated e-visa systems with real-time tracking."
	},
	{
		step: 4,
		title: "Visa Delivery & Travel Briefing",
		desc: "Receive your approved visa alongside essential immigration entry guidelines, insurance, and air ticket support."
	}
];
var seeds = [
	{
		name: "Pakistan",
		slug: "pakistan",
		isoCode: "pk",
		region: "Asia",
		flag: "🇵🇰",
		capital: "Islamabad",
		currency: "PKR",
		processingTime: "2-7 working days",
		popularCities: [
			"Islamabad",
			"Lahore",
			"Karachi",
			"Hunza Valley",
			"Skardu"
		],
		highlights: [
			"Karakoram Highway",
			"Badshahi Mosque",
			"Fairy Meadows",
			"Historic Lahore"
		],
		bestSeason: "October to April (South) / May to September (North)",
		visaTypes: [
			"Tourist e-Visa",
			"Business e-Visa",
			"Family Visit Visa",
			"Work Visa"
		],
		blurb: "Majestic Himalayan and Karakoram peaks, ancient Mughal heritage, vibrant cultural capitals, and a streamlined official e-visa portal."
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
		popularCities: [
			"New Delhi",
			"Mumbai",
			"Jaipur",
			"Bengaluru",
			"Goa"
		],
		highlights: [
			"Taj Mahal",
			"Rajasthan Forts",
			"Kerala Backwaters",
			"Varanasi Ghats"
		],
		bestSeason: "October to March",
		visaTypes: [
			"e-Tourist Visa (30 Days / 1 Year)",
			"e-Business Visa",
			"e-Medical Visa",
			"Conference Visa"
		],
		blurb: "From the timeless Taj Mahal to bustling tech hubs and tropical coastal backwaters, India provides versatile e-visa routes for tourism and trade."
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
		popularCities: [
			"Beijing",
			"Shanghai",
			"Guangzhou",
			"Shenzhen",
			"Chengdu"
		],
		highlights: [
			"The Great Wall",
			"Forbidden City",
			"The Bund Shanghai",
			"Terracotta Army"
		],
		bestSeason: "April to May & September to October",
		visaTypes: [
			"L Visa (Tourist)",
			"M Visa (Commercial Trade)",
			"F Visa (Non-commercial)",
			"Z Visa (Work)"
		],
		blurb: "Global trade powerhouse, ancient imperial capitals, and futuristic mega-cities served by dedicated visa center filing."
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
		popularCities: [
			"Tokyo",
			"Kyoto",
			"Osaka",
			"Sapporo",
			"Fukuoka"
		],
		highlights: [
			"Mount Fuji",
			"Kyoto Temples",
			"Shibuya Crossing",
			"Hiroshima Peace Memorial"
		],
		bestSeason: "March to May (Cherry Blossom) & September to November (Autumn)",
		visaTypes: [
			"Temporary Visitor Visa (Tourism)",
			"Business Short-Term Visa",
			"Transit Visa",
			"Multiple Entry Tourist Visa"
		],
		blurb: "Pinnacle of technology, centuries-old shrines, and seasonal natural beauty processed through designated visa application centers."
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
		popularCities: [
			"Seoul",
			"Busan",
			"Jeju Island",
			"Incheon",
			"Gyeongju"
		],
		highlights: [
			"Gyeongbokgung Palace",
			"Jeju Lava Tubes",
			"Haeundae Beach",
			"N Seoul Tower"
		],
		bestSeason: "March to May & September to November",
		visaTypes: [
			"C-3-9 (General Tourist Visa)",
			"C-3-4 (Business Visa)",
			"K-ETA (Eligible Passports)",
			"D-Series Study Visa"
		],
		blurb: "Dynamic K-culture capital, scenic Jeju coastlines, and a structured short-stay visa framework with verified documentation."
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
		popularCities: [
			"Bangkok",
			"Phuket",
			"Pattaya",
			"Chiang Mai",
			"Koh Samui"
		],
		highlights: [
			"Grand Palace",
			"Phi Phi Islands",
			"Ayutthaya Historical Park",
			"Floating Markets"
		],
		bestSeason: "November to February",
		visaTypes: [
			"Tourist Visa (TR - 60 Days)",
			"e-Visa on Arrival (e-VOA)",
			"Non-Immigrant B (Business)",
			"Special Tourist Visa (STV)"
		],
		blurb: "Tropical islands, golden temples, world-renowned street cuisine, and one of Southeast Asia's most accessible tourist visa procedures."
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
		popularCities: [
			"Kuala Lumpur",
			"Penang",
			"Langkawi",
			"Malacca",
			"Kota Kinabalu"
		],
		highlights: [
			"Petronas Twin Towers",
			"Batu Caves",
			"Langkawi Sky Bridge",
			"Mount Kinabalu"
		],
		bestSeason: "December to April",
		visaTypes: [
			"eVisa (Tourism - 30 Days)",
			"Multiple Entry eVisa",
			"Student Pass",
			"Social Visit Pass"
		],
		blurb: "Iconic Petronas Twin Towers, pristine Langkawi beaches, and rich cultural diversity with rapid online eVisa issuance."
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
		popularCities: [
			"Singapore City",
			"Sentosa Island",
			"Marina Bay",
			"Jurong"
		],
		highlights: [
			"Marina Bay Sands",
			"Gardens by the Bay",
			"Universal Studios",
			"Changi Jewel"
		],
		bestSeason: "Year-round (November to January for festivals)",
		visaTypes: [
			"e-Visa (Authorized Agency Submission)",
			"Business Visit Visa",
			"Social Visit Pass"
		],
		blurb: "Ultra-modern global finance capital, family entertainment hub, and premium business stopover destination."
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
		popularCities: [
			"Jakarta",
			"Bali (Denpasar)",
			"Yogyakarta",
			"Surabaya",
			"Lombok"
		],
		highlights: [
			"Ubud Rice Terraces",
			"Borobudur Temple",
			"Komodo Island",
			"Mount Bromo"
		],
		bestSeason: "April to October (Dry Season)",
		visaTypes: [
			"e-VOA (30 Days)",
			"B211A Visit Visa (60-180 Days)",
			"Business e-Visa"
		],
		blurb: "Enchanting Bali resorts, volcanic landscapes, ancient temple complexes, and fast online Electronic Visa on Arrival."
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
		popularCities: [
			"Manila",
			"Cebu",
			"Boracay",
			"Palawan (El Nido)",
			"Davao"
		],
		highlights: [
			"El Nido Lagoons",
			"Chocolate Hills",
			"White Beach Boracay",
			"Intramuros Manila"
		],
		bestSeason: "December to April",
		visaTypes: [
			"9(a) Temporary Visitor Visa",
			"e-Visa (Pilot)",
			"Business Visa"
		],
		blurb: "Archipelago of over 7,000 tropical islands, world-class diving reefs, crystal lagoons, and hospitable English-friendly culture."
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
		popularCities: [
			"Hanoi",
			"Ho Chi Minh City",
			"Da Nang",
			"Hoi An",
			"Nha Trang"
		],
		highlights: [
			"Halong Bay",
			"Hoi An Ancient Town",
			"Cu Chi Tunnels",
			"Golden Bridge Ba Na Hills"
		],
		bestSeason: "February to April & August to October",
		visaTypes: [
			"e-Visa (30/90 Days Single/Multiple)",
			"Business e-Visa",
			"Tourist Visa on Arrival Approval Letter"
		],
		blurb: "Emerald waters of Halong Bay, historic lantern-lit Hoi An, and a convenient, official 90-day electronic visa program."
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
		popularCities: [
			"Colombo",
			"Kandy",
			"Galle",
			"Nuwara Eliya",
			"Ella"
		],
		highlights: [
			"Sigiriya Rock Fortress",
			"Nine Arch Bridge",
			"Yala Safari",
			"Galle Dutch Fort"
		],
		bestSeason: "December to April (South & West) / May to September (East)",
		visaTypes: [
			"Electronic Travel Authorization (ETA - 30 Days)",
			"Business ETA",
			"Transit ETA"
		],
		blurb: "Lush tea plantations, ancient UNESCO heritage fortresses, golden coastlines, and swift online ETA authorization."
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
		popularCities: [
			"Dhaka",
			"Chittagong",
			"Sylhet",
			"Cox's Bazar",
			"Khulna"
		],
		highlights: [
			"Sundarbans Mangrove Forest",
			"Cox's Bazar Longest Beach",
			"Srimangal Tea Gardens"
		],
		bestSeason: "November to February",
		visaTypes: [
			"Tourist Visa",
			"Business Visa",
			"Employment Visa",
			"Visa on Arrival (Eligible)"
		],
		blurb: "Flourishing textile trade, the world's largest natural mangrove forest, and traditional hospitality with embassy processing."
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
		popularCities: [
			"Kathmandu",
			"Pokhara",
			"Lumbini",
			"Chitwan",
			"Nagarkot"
		],
		highlights: [
			"Mount Everest Base Camp",
			"Phewa Lake Pokhara",
			"Pashupatinath Temple",
			"Chitwan National Park"
		],
		bestSeason: "October to December & March to May",
		visaTypes: [
			"Tourist Visa on Arrival",
			"Online Visa Pre-Approval (15/30/90 Days)",
			"Business Visa"
		],
		blurb: "Himalayan trekking capital, birth place of Buddha in Lumbini, and straightforward on-arrival visa processing."
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
		popularCities: [
			"Malé",
			"Maafushi",
			"Hulhumalé",
			"Baa Atoll",
			"Ari Atoll"
		],
		highlights: [
			"Luxury Overwater Villas",
			"Coral Reef Diving",
			"Bioluminescent Beach",
			"Island Hopping"
		],
		bestSeason: "November to April",
		visaTypes: [
			"Tourist Visa on Arrival (Free 30 Days)",
			"Business Visa",
			"Work Permit Visa"
		],
		blurb: "Turquoise lagoons, private overwater bungalows, honeymoon paradise with a complimentary 30-day visa on arrival for all nationalities."
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
		popularCities: [
			"Phnom Penh",
			"Siem Reap",
			"Sihanoukville",
			"Battambang",
			"Kampot"
		],
		highlights: [
			"Angkor Wat Complex",
			"Royal Palace Phnom Penh",
			"Koh Rong Island",
			"Tonle Sap Lake"
		],
		bestSeason: "November to February",
		visaTypes: [
			"e-Visa (Tourist Type T - 30 Days)",
			"Visa on Arrival",
			"Ordinary Visa (Type E - Business)"
		],
		blurb: "Magnificent Angkor Wat temple wonders, French colonial riverfronts, and an uncomplicated government e-visa framework."
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
		popularCities: [
			"Hong Kong Island",
			"Kowloon",
			"Lantau Island",
			"New Territories"
		],
		highlights: [
			"Victoria Peak Sky Terrace",
			"Big Buddha Lantau",
			"Tsim Sha Tsui Promenade",
			"Disneyland"
		],
		bestSeason: "October to December",
		visaTypes: [
			"Pre-arrival Registration (PAR)",
			"Tourist Entry Permit",
			"Business & Investment Visa"
		],
		blurb: "Dazzling skyline, world-class culinary capital, duty-free shopping haven, and efficient entry clearance."
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
		popularCities: [
			"Baku",
			"Gabala",
			"Shahdag",
			"Ganja",
			"Sheki"
		],
		highlights: [
			"Flame Towers Baku",
			"Old City Icherisheher",
			"Shahdag Mountain Resort",
			"Gobustan Mud Volcanoes"
		],
		bestSeason: "April to June & September to October",
		visaTypes: [
			"ASAN e-Visa (Standard - 3 Days)",
			"ASAN Urgent e-Visa (3 Hours)",
			"Business Visa"
		],
		blurb: "Where modern architecture meets Caspian Sea breezes and Caucasus ski slopes, featuring rapid 3-day ASAN e-visas."
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
		popularCities: [
			"Tbilisi",
			"Batumi",
			"Gudauri",
			"Kazbegi",
			"Kutaisi"
		],
		highlights: [
			"Old Tbilisi Sulphur Baths",
			"Gergeti Trinity Church Kazbegi",
			"Batumi Boulevard",
			"Gudauri Ski Slopes"
		],
		bestSeason: "May to June & September to October",
		visaTypes: [
			"e-Visa (Short-Term Tourist)",
			"Consulate Visa",
			"Visa-Free for GCC Residents & Valid US/Schengen Visa Holders"
		],
		blurb: "Ancient cobblestone streets, snow-capped Caucasus peaks, Black Sea beaches, and welcoming travel regulations."
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
		popularCities: [
			"Astana",
			"Almaty",
			"Shymkent",
			"Aktau",
			"Turkistan"
		],
		highlights: [
			"Baiterek Tower Astana",
			"Charyn Canyon",
			"Medeu High-Altitude Rink",
			"Big Almaty Lake"
		],
		bestSeason: "May to September",
		visaTypes: [
			"Tourist e-Visa",
			"Business Visa",
			"Consular Visa Entry"
		],
		blurb: "Central Asia's economic powerhouse, dramatic canyon landscapes, and futuristic architecture with modern e-visa options."
	},
	{
		name: "United Arab Emirates",
		slug: "uae",
		isoCode: "ae",
		region: "Middle East",
		flag: "🇦🇪",
		capital: "Abu Dhabi",
		currency: "AED",
		processingTime: "24-72 hours",
		popularCities: [
			"Dubai",
			"Abu Dhabi",
			"Sharjah",
			"Ajman",
			"Ras Al Khaimah"
		],
		highlights: [
			"Burj Khalifa",
			"Sheikh Zayed Grand Mosque",
			"Museum of the Future",
			"Palm Jumeirah",
			"Desert Safari"
		],
		bestSeason: "October to April",
		visaTypes: [
			"30-Day Tourist Visa",
			"60-Day Tourist Visa",
			"Multiple Entry Visit Visa",
			"48/96-Hour Transit Visa",
			"Investor & Freelance Entry"
		],
		blurb: "Dubai and Abu Dhabi — the world's premiere destination for luxury tourism, global business expos, and seamless e-visa approvals."
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
		popularCities: [
			"Riyadh",
			"Jeddah",
			"Makkah",
			"Madinah",
			"AlUla",
			"Dammam"
		],
		highlights: [
			"Al-Masjid an-Nabawi & Makkah",
			"AlUla Hegra UNESCO Site",
			"Kingdom Centre Riyadh",
			"Jeddah Corniche"
		],
		bestSeason: "November to March",
		visaTypes: [
			"Tourist e-Visa (1 Year Multiple Entry)",
			"Umrah Visa",
			"Business Visit Visa",
			"Family Visit Visa",
			"Work Entry Visa"
		],
		blurb: "Umrah pilgrims, mega-events in Riyadh, and ancient heritage in AlUla powered by fast 1-year multiple entry electronic tourist visas."
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
		popularCities: [
			"Doha",
			"Al Wakrah",
			"Lusail",
			"Al Khor"
		],
		highlights: [
			"Museum of Islamic Art",
			"Souq Waqif",
			"The Pearl Qatar",
			"Lusail Marina",
			"Inland Sea Safari"
		],
		bestSeason: "November to April",
		visaTypes: [
			"Hayya Tourist Visa (A1/A2/A3)",
			"Business Visit Visa",
			"Transit Visa"
		],
		blurb: "Doha's world-renowned museums, vibrant Souq Waqif, luxury corniche, and efficient Hayya e-visa portal."
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
		popularCities: [
			"Kuwait City",
			"Salmiya",
			"Hawalli",
			"Al Ahmadi"
		],
		highlights: [
			"Kuwait Towers",
			"The Avenues Mall",
			"Grand Mosque Kuwait",
			"Sheikh Jaber Cultural Centre"
		],
		bestSeason: "November to March",
		visaTypes: [
			"Tourist e-Visa",
			"Commercial Visit Visa",
			"Family Visit Visa",
			"Work Visa"
		],
		blurb: "A historic Gulf hub known for commercial prosperity, cultural landmarks, and structured commercial/visit visa channels."
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
		popularCities: [
			"Manama",
			"Muharraq",
			"Riffa",
			"Amwaj Islands"
		],
		highlights: [
			"Bahrain Fort (Qal'at al-Bahrain)",
			"Al Fateh Grand Mosque",
			"Bahrain International Circuit",
			"Bab Al Bahrain"
		],
		bestSeason: "November to March",
		visaTypes: [
			"Tourist eVisa (2 Weeks / 1 Month / 1 Year)",
			"Business eVisa",
			"On-Arrival Visa (Eligible)"
		],
		blurb: "Compact, easy-access island kingdom with rapid electronic visas, heritage pearl trails, and Formula 1 excitement."
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
		popularCities: [
			"Muscat",
			"Salalah",
			"Nizwa",
			"Sur",
			"Musandam"
		],
		highlights: [
			"Sultan Qaboos Grand Mosque",
			"Wadi Shab & Bimmah Sinkhole",
			"Nizwa Fort",
			"Salalah Khareef Season"
		],
		bestSeason: "October to April (Muscat) / July to September (Salalah)",
		visaTypes: [
			"26M Tourist eVisa (30 Days)",
			"26A Tourist eVisa (10 Days)",
			"GCC Resident eVisa",
			"Business Visa"
		],
		blurb: "Majestic wadis, ancient desert forts, untouched coastlines, and swift official Royal Oman Police eVisas."
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
		popularCities: [
			"Amman",
			"Petra (Wadi Musa)",
			"Aqaba",
			"Jerash",
			"Madaba"
		],
		highlights: [
			"Petra Treasury UNESCO Wonder",
			"Wadi Rum Desert",
			"Dead Sea Floating",
			"Roman Ruins of Jerash"
		],
		bestSeason: "March to May & September to November",
		visaTypes: [
			"Tourist e-Visa",
			"Jordan Pass (Visa + Attractions)",
			"Business Visa",
			"Visa on Arrival"
		],
		blurb: "Wonder of Petra carved in rose-red rock, Martian landscapes in Wadi Rum, and the buoyant waters of the Dead Sea."
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
		popularCities: [
			"Beirut",
			"Byblos",
			"Tripoli",
			"Jounieh",
			"Baalbek"
		],
		highlights: [
			"Jeita Grotto",
			"Byblos Old Port & Castle",
			"Baalbek Roman Temples",
			"Beirut Raouche Rocks"
		],
		bestSeason: "April to June & September to November",
		visaTypes: [
			"Tourist Visa",
			"Business Visa",
			"Visa on Arrival (Eligible Nationalities)"
		],
		blurb: "Mediterranean dining, ancient Phoenician port cities, mountain vineyards, and rich cultural history."
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
		popularCities: [
			"Baghdad",
			"Najaf",
			"Karbala",
			"Erbil",
			"Basra"
		],
		highlights: [
			"Holy Shrines of Najaf & Karbala",
			"Erbil Citadel",
			"Ziggurat of Ur",
			"Baghdad Museum"
		],
		bestSeason: "October to April",
		visaTypes: [
			"Ziyarat / Religious Pilgrimage Visa",
			"Tourist e-Visa (Selected Ports)",
			"Business Entry Visa"
		],
		blurb: "Cradle of civilization, holy shrines of Najaf and Karbala for Ziyarat travelers, and growing business delegations."
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
		popularCities: [
			"Jerusalem",
			"Tel Aviv",
			"Haifa",
			"Eilat",
			"Nazareth"
		],
		highlights: [
			"Old City Jerusalem",
			"Western Wall & Dome of the Rock",
			"Tel Aviv Promenade",
			"Dead Sea"
		],
		bestSeason: "March to May & October to November",
		visaTypes: [
			"B/2 Visitor Visa",
			"B/1 Work Visa",
			"Official / Religious Visa"
		],
		blurb: "Sacred historical sites, Mediterranean coastlines, and thorough documentation requirements."
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
		popularCities: [
			"Sana'a",
			"Aden",
			"Socotra Island",
			"Mukalla"
		],
		highlights: [
			"Socotra Island Dragon Blood Trees",
			"Old City of Sana'a",
			"Shibam Manhattan of the Desert"
		],
		bestSeason: "October to April",
		visaTypes: [
			"Tourist Visa (Socotra Permits)",
			"Business Visa",
			"Family Visit Visa"
		],
		blurb: "Unique biodiversity in Socotra and ancient high-rise mudbrick architecture with specialized approval procedures."
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
		popularCities: [
			"Damascus",
			"Aleppo",
			"Latakia",
			"Homs",
			"Palmyra"
		],
		highlights: [
			"Umayyad Mosque Damascus",
			"Citadel of Aleppo",
			"Krak des Chevaliers",
			"Old Souqs"
		],
		bestSeason: "March to May & September to November",
		visaTypes: [
			"Tourist Visa (Security Clearance)",
			"Ziyarat Visa",
			"Business Visa"
		],
		blurb: "One of the world's oldest continuously inhabited capitals with specialized visa support and security approvals."
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
		popularCities: [
			"Istanbul",
			"Antalya",
			"Cappadocia (Goreme)",
			"Bursa",
			"Trabzon",
			"Izmir"
		],
		highlights: [
			"Hagia Sophia & Blue Mosque",
			"Cappadocia Hot Air Balloons",
			"Pamukkale Thermal Pools",
			"Bosphorus Cruise"
		],
		bestSeason: "April to May & September to November",
		visaTypes: [
			"Tourist e-Visa (Conditional / Direct)",
			"Sticker Tourist Visa",
			"Business Single/Multiple Entry",
			"Medical & Transit Visa"
		],
		blurb: "Magical Cappadocia hot air balloons, Istanbul's historic Bosphorus skyline, Mediterranean beaches, and quick electronic visas."
	},
	{
		name: "Egypt",
		slug: "egypt",
		isoCode: "eg",
		region: "North Africa",
		flag: "🇪🇬",
		capital: "Cairo",
		currency: "EGP",
		processingTime: "3-7 working days (e-Visa)",
		popularCities: [
			"Cairo",
			"Alexandria",
			"Sharm El Sheikh",
			"Hurghada",
			"Luxor",
			"Aswan"
		],
		highlights: [
			"Giza Pyramids & Sphinx",
			"Valley of the Kings Luxor",
			"Nile River Cruise",
			"Red Sea Coral Reefs"
		],
		bestSeason: "October to April",
		visaTypes: [
			"e-Visa (Single / Multiple Entry 30 Days)",
			"Visa on Arrival",
			"Consulate Tourist Visa",
			"Business Visa"
		],
		blurb: "Great Pyramids of Giza, ancient tombs along the Nile, Red Sea luxury dive resorts, and convenient online e-visa issuance."
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
		popularCities: [
			"Marrakech",
			"Casablanca",
			"Fes",
			"Chefchaouen",
			"Tangier"
		],
		highlights: [
			"Jemaa el-Fnaa Marrakech",
			"Hassan II Mosque Casablanca",
			"Blue City Chefchaouen",
			"Sahara Desert Dunes"
		],
		bestSeason: "March to May & September to November",
		visaTypes: [
			"eVisa (Tourism - 30 Days)",
			"Consulate Tourist Visa",
			"Business Visa"
		],
		blurb: "Vibrant Marrakech souqs, the iconic blue alleys of Chefchaouen, Sahara desert glamping, and modern eVisa processing."
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
		popularCities: [
			"Tunis",
			"Sousse",
			"Hammamet",
			"Djerba",
			"Sidi Bou Said"
		],
		highlights: [
			"Sidi Bou Said Blue Village",
			"El Jem Roman Amphitheatre",
			"Ancient Carthage Ruins",
			"Sahara Oasis"
		],
		bestSeason: "April to June & September to November",
		visaTypes: [
			"Tourist Visa",
			"Business Visa",
			"Transit Visa"
		],
		blurb: "Picturesque whitewashed clifftop villages, Roman colosseums, Mediterranean shores, and relaxed coastal travel."
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
		popularCities: [
			"Algiers",
			"Oran",
			"Constantine",
			"Ghardaia",
			"Tamanrasset"
		],
		highlights: [
			"Casbah of Algiers",
			"Bridges of Constantine",
			"Tassili n'Ajjer Rock Art",
			"Santa Cruz Fort Oran"
		],
		bestSeason: "October to April",
		visaTypes: [
			"Tourist Visa (Invitation Required)",
			"Business Visa",
			"On-Arrival Visa for Sahara Tours"
		],
		blurb: "Magnificent Sahara dunes, cliffside bridges of Constantine, French colonial grandeur in Algiers with consulate verification."
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
		popularCities: [
			"Tripoli",
			"Benghazi",
			"Misrata",
			"Ghadames"
		],
		highlights: [
			"Leptis Magna Roman City",
			"Old Tripoli Medina",
			"Ghadames Oasis Desert City"
		],
		bestSeason: "November to March",
		visaTypes: [
			"Business Visa (Company Sponsor)",
			"Work Permit Entry",
			"Official Visit Visa"
		],
		blurb: "Pristine Roman architectural gems at Leptis Magna and commercial trade requiring authorized local corporate sponsorship."
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
		popularCities: [
			"Khartoum",
			"Port Sudan",
			"Omdurman",
			"Kassala"
		],
		highlights: [
			"Nubian Pyramids of Meroe",
			"Confluence of the Blue & White Nile",
			"Red Sea Port Sudan"
		],
		bestSeason: "November to February",
		visaTypes: [
			"Entry Visa",
			"Business Visa",
			"Humanitarian & Official Visa"
		],
		blurb: "Ancient Meroe Nubian pyramids and trade routes along the Nile with case-by-case consular processing."
	},
	{
		name: "South Africa",
		slug: "south-africa",
		isoCode: "za",
		region: "Africa",
		flag: "🇿🇦",
		capital: "Pretoria",
		currency: "ZAR",
		processingTime: "10-20 working days (eVisa / VFS)",
		popularCities: [
			"Cape Town",
			"Johannesburg",
			"Durban",
			"Kruger Area",
			"Port Elizabeth"
		],
		highlights: [
			"Table Mountain Cape Town",
			"Kruger National Park Big 5",
			"Cape of Good Hope",
			"Garden Route Coast"
		],
		bestSeason: "November to March (Cape Town) / May to September (Kruger Safari)",
		visaTypes: [
			"Tourist eVisa (90 Days)",
			"VFS Sticker Visitor Visa",
			"Business Visit Visa",
			"Critical Skills & Study Visa"
		],
		blurb: "Breathtaking Table Mountain, world-class Big 5 Kruger safaris, scenic Garden Route, and official eVisa availability."
	},
	{
		name: "United Kingdom",
		slug: "united-kingdom",
		isoCode: "gb",
		region: "Western",
		flag: "🇬🇧",
		capital: "London",
		currency: "GBP",
		processingTime: "15-20 working days",
		popularCities: [
			"London",
			"Manchester",
			"Edinburgh",
			"Birmingham",
			"Oxford"
		],
		highlights: [
			"Big Ben & Parliament",
			"Tower Bridge London",
			"Edinburgh Castle",
			"Stonehenge"
		],
		bestSeason: "May to September",
		visaTypes: [
			"Standard Visitor Visa (6 Months / 2, 5, 10 Years)",
			"Business Visitor Visa",
			"Student Visa",
			"Transit Visa"
		],
		blurb: "Iconic historic landmarks in London, prestigious Scottish highlands, and thorough documentation assistance for UK Standard Visitor Visas."
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
		popularCities: [
			"New York",
			"Los Angeles",
			"Chicago",
			"Miami",
			"San Francisco",
			"Orlando"
		],
		highlights: [
			"Statue of Liberty NY",
			"Grand Canyon",
			"Golden Gate Bridge",
			"Times Square & Broadway"
		],
		bestSeason: "April to October",
		visaTypes: [
			"B1/B2 Tourist & Business Visa (Up to 10 Years)",
			"F-1 Student Visa",
			"C-1 Transit Visa"
		],
		blurb: "World-class business opportunities, theme parks, coast-to-coast landscapes with expert DS-160 filing and interview preparation."
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
		popularCities: [
			"Toronto",
			"Vancouver",
			"Montreal",
			"Calgary",
			"Niagara Falls"
		],
		highlights: [
			"Niagara Falls",
			"Banff National Park Rockies",
			"CN Tower Toronto",
			"Old Quebec City"
		],
		bestSeason: "May to October (Summer) / December to March (Skiing)",
		visaTypes: [
			"Temporary Resident Visa (V-1 Tourist)",
			"Business Visitor Visa",
			"eTA (Eligible Passports)",
			"Super Visa for Parents"
		],
		blurb: "Stunning Canadian Rockies in Banff, Niagara Falls, cosmopolitan cities with end-to-end IRCC portal application support."
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
		popularCities: [
			"Sydney",
			"Melbourne",
			"Brisbane",
			"Perth",
			"Gold Coast"
		],
		highlights: [
			"Sydney Opera House",
			"Great Barrier Reef",
			"Bondi Beach",
			"Melbourne Great Ocean Road"
		],
		bestSeason: "September to November & March to May",
		visaTypes: [
			"Visitor Visa Subclass 600 (Tourist Stream)",
			"Subclass 600 (Business Stream)",
			"Transit Visa Subclass 771"
		],
		blurb: "Sydney Opera House, Great Barrier Reef, pristine sunny beaches with complete ImmiAccount filing and financial verification."
	}
];
function generateVisaCategories(s) {
	if (s.visaCategories && s.visaCategories.length > 0) return s.visaCategories;
	const isEvisa = s.blurb.toLowerCase().includes("e-visa") || s.blurb.toLowerCase().includes("evisa") || s.blurb.toLowerCase().includes("eta");
	const isVoa = s.blurb.toLowerCase().includes("arrival");
	return [
		{
			name: "Tourist / Leisure Visit",
			duration: "30 to 90 Days",
			validity: "90 to 180 Days",
			entryType: "Single Entry",
			typeBadge: isEvisa ? "e-Visa" : isVoa ? "Visa on Arrival" : "Sticker Visa",
			processingTime: s.processingTime ?? "5-10 working days",
			bestFor: "Vacations, sightseeing, visiting relatives and cultural tours"
		},
		{
			name: "Commercial / Business Visa",
			duration: "30 to 90 Days",
			validity: "6 Months to 1 Year",
			entryType: "Multiple Entry",
			typeBadge: isEvisa ? "Fast Track" : "Standard Visa",
			processingTime: s.processingTime ?? "5-10 working days",
			bestFor: "Meetings, conferences, client visits, trade exhibitions & scouting"
		},
		{
			name: "Family & Sponsored Visit",
			duration: "30 to 90 Days",
			validity: "90 Days",
			entryType: "Single Entry",
			typeBadge: "Standard Visa",
			processingTime: s.processingTime ?? "7-14 working days",
			bestFor: "Visiting immediate family members, weddings and personal ceremonies"
		},
		{
			name: "Transit Entry Permit",
			duration: "48 to 96 Hours",
			validity: "30 Days",
			entryType: "Transit",
			typeBadge: isEvisa ? "e-Visa" : "Standard Visa",
			processingTime: "1-3 working days",
			bestFor: "Layover passengers wishing to tour the city before connecting flights"
		}
	];
}
var countries = seeds.map((s) => {
	const regionList = seeds.filter((o) => o.region === s.region);
	const selfIdx = regionList.findIndex((o) => o.slug === s.slug);
	const related = [];
	for (let i = 1; i < regionList.length && related.length < 4; i++) {
		const pick = regionList[(selfIdx + i) % regionList.length];
		if (pick && pick.slug !== s.slug) related.push(pick.slug);
	}
	if (related.length < 4) {
		for (const b of [
			"uae",
			"saudi-arabia",
			"turkey",
			"malaysia",
			"thailand",
			"egypt"
		]) if (b !== s.slug && !related.includes(b) && related.length < 4) related.push(b);
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
			"Work / Employment Entry"
		],
		visaCategories: generateVisaCategories(s),
		documents: [...STANDARD_DOCS, ...s.extraDocs ?? []],
		popularCities: s.popularCities ?? [s.capital],
		highlights: s.highlights ?? [
			`Capital City of ${s.capital}`,
			"Cultural & Heritage Landmarks",
			"Natural Attractions"
		],
		bestSeason: s.bestSeason ?? "Year-round (Check seasonal climate)",
		stepProcess: DEFAULT_PROCESS_STEPS,
		processingTime: s.processingTime ?? "5-15 working days",
		fees: s.fees ?? "Standard government embassy fees — transparent quote provided before filing",
		relatedCountries: related,
		blurb: s.blurb
	};
});
var getCountry = (slug) => countries.find((c) => c.slug === slug);
var getRegionBySlug = (slug) => REGIONS.find((r) => REGION_SLUGS[r] === slug);
var countriesByRegion = (region) => countries.filter((c) => c.region === region);
var popularDestinations = [
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
	"qatar"
];
var popularVisaDestinations = [
	"uae",
	"saudi-arabia",
	"turkey",
	"china",
	"egypt",
	"south-africa",
	"united-kingdom",
	"malaysia"
];
var attestationCountries = [
	"saudi-arabia",
	"uae",
	"qatar",
	"kuwait",
	"oman",
	"bahrain"
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DvzRRJhh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-B-0P53Ug.css";
var sizeMap$1 = {
	xs: {
		width: "w-5",
		height: "h-3.5",
		imgWidth: 24
	},
	sm: {
		width: "w-7",
		height: "h-5",
		imgWidth: 32
	},
	md: {
		width: "w-9",
		height: "h-6",
		imgWidth: 48
	},
	lg: {
		width: "w-12",
		height: "h-8",
		imgWidth: 64
	},
	xl: {
		width: "w-16",
		height: "h-11",
		imgWidth: 80
	},
	hero: {
		width: "w-20 sm:w-24",
		height: "h-14 sm:h-16",
		imgWidth: 120
	}
};
var roundedMap = {
	sm: "rounded-xs",
	md: "rounded-sm",
	lg: "rounded-md",
	full: "rounded-full aspect-square object-cover"
};
function CountryFlag({ isoCode, countryName, size = "md", className, fallbackEmoji, rounded = "md" }) {
	const [hasError, setHasError] = (0, import_react.useState)(false);
	const code = (isoCode || "").toLowerCase().trim();
	const dimensions = sizeMap$1[size] || sizeMap$1.md;
	const roundedClass = roundedMap[rounded] || roundedMap.md;
	if (!code || hasError) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		role: "img",
		"aria-label": `${countryName} flag`,
		className: cn("inline-flex items-center justify-center select-none font-normal leading-none", size === "hero" ? "text-4xl" : size === "xl" ? "text-3xl" : size === "lg" ? "text-2xl" : "text-base", className),
		children: fallbackEmoji || "🌐"
	});
	const flagUrl = `https://flagcdn.com/${code}.svg`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex shrink-0 items-center justify-center overflow-hidden bg-white/5 ring-1 ring-white/20 shadow-xs", dimensions.width, dimensions.height, roundedClass, className),
		title: `${countryName} Flag`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: flagUrl,
			alt: `${countryName} flag`,
			loading: "lazy",
			width: dimensions.imgWidth,
			height: Math.round(dimensions.imgWidth * 2 / 3),
			className: "h-full w-full object-cover",
			onError: () => setHasError(true)
		})
	});
}
var areera_logo_default = "/assets/areera-logo-bWvcBLDE.png";
var sizeMap = {
	sm: {
		icon: "h-8 w-8",
		textTitle: "text-sm",
		textSub: "text-[9px]"
	},
	md: {
		icon: "h-10 w-10",
		textTitle: "text-base",
		textSub: "text-[10px]"
	},
	lg: {
		icon: "h-12 w-12",
		textTitle: "text-lg",
		textSub: "text-xs"
	},
	xl: {
		icon: "h-16 w-16",
		textTitle: "text-2xl",
		textSub: "text-sm"
	}
};
function Logo({ className, size = "md", showText = true, textColor }) {
	const currentSize = sizeMap[size] || sizeMap.md;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("inline-flex items-center gap-2.5 select-none shrink-0 whitespace-nowrap", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("relative shrink-0 flex items-center justify-center overflow-hidden rounded-xl bg-slate-900 border border-slate-700/60 shadow-xs", currentSize.icon),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: areera_logo_default,
				alt: "Areera Travel & Tours logo",
				width: 64,
				height: 64,
				className: "h-full w-full object-cover"
			})
		}), showText && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-center whitespace-nowrap shrink-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center leading-none whitespace-nowrap",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: cn("font-display font-bold tracking-tight text-white whitespace-nowrap", currentSize.textTitle, textColor),
					children: ["AREERA ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-blue-400 font-semibold",
						children: "TRAVEL & TOURS"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("mt-1 font-medium tracking-[0.18em] text-slate-400 uppercase whitespace-nowrap", currentSize.textSub),
				children: "Visa · Air Tickets · Attestation"
			})]
		})]
	});
}
var serviceIcons = {
	visa: Stamp,
	ticket: TicketsPlane,
	attestation: FileCheckCorner,
	hotel: BedDouble,
	flight: PlaneTakeoff
};
function Navbar() {
	const [openDropdown, setOpenDropdown] = (0, import_react.useState)(null);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [selectedRegion, setSelectedRegion] = (0, import_react.useState)("Asia");
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	const dropdownRef = (0, import_react.useRef)(null);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		setOpenDropdown(null);
		setMobileOpen(false);
		setQuery("");
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 15);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setOpenDropdown(null);
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);
	const filteredCountries = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return countries.filter((c) => c.region === selectedRegion);
		return countries.filter((c) => c.name.toLowerCase().includes(q) || c.capital.toLowerCase().includes(q) || c.region.toLowerCase().includes(q));
	}, [query, selectedRegion]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		ref: dropdownRef,
		className: cn("sticky top-0 z-50 w-full transition-all duration-300", isScrolled ? "border-b border-white/20 bg-slate-800/45 shadow-xl shadow-black/25 backdrop-blur-2xl backdrop-saturate-180" : "border-b border-white/15 bg-slate-800/25 backdrop-blur-xl backdrop-saturate-150"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("bg-slate-200/5 px-4 text-xs text-slate-200 backdrop-blur-md transition-all duration-300 overflow-hidden", isScrolled ? "max-h-0 opacity-0 -translate-y-4 py-0 border-b-0 pointer-events-none" : "max-h-12 opacity-100 translate-y-0 py-1.5 border-b border-white/10"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between flex-nowrap whitespace-nowrap gap-4 overflow-x-auto text-[11px] sm:text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 sm:gap-5 shrink-0 whitespace-nowrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 text-slate-100 font-medium whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-blue-300 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contactInfo.address })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline text-white/25",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden sm:flex items-center gap-1.5 text-slate-200/90 whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-blue-300 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mon – Sat: 9:00 AM – 7:00 PM" })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 sm:gap-5 shrink-0 whitespace-nowrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${contactInfo.email}`,
								className: "hidden md:flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5 text-blue-300 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contactInfo.email })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden md:inline text-white/25",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`,
								className: "flex items-center gap-1.5 text-slate-100 font-semibold hover:text-white transition-colors whitespace-nowrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 text-blue-300 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: contactInfo.phone })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline text-white/25",
								children: "|"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Areera%20Travel%2C%20I%20would%20like%20to%20inquire%20about%20visa%20services.`,
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-1.5 text-emerald-300 font-semibold hover:text-emerald-200 transition-colors whitespace-nowrap bg-emerald-500/15 border border-emerald-400/30 px-2 py-0.5 rounded-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative flex h-2 w-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-400" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-3 w-3 shrink-0" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "WhatsApp Desk"
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 flex-nowrap whitespace-nowrap w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex items-center shrink-0 whitespace-nowrap transition-opacity hover:opacity-95",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { size: "md" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-1 lg:gap-1.5 lg:flex shrink-0 whitespace-nowrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: cn("rounded-xl px-3.5 py-2 text-sm font-semibold transition-all whitespace-nowrap", pathname === "/" ? "bg-white/20 text-white border border-white/30 shadow-xs" : "text-slate-100 hover:text-white hover:bg-white/12"),
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOpenDropdown(openDropdown === "services" ? null : "services"),
								className: cn("inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-semibold transition-all whitespace-nowrap", openDropdown === "services" || pathname.startsWith("/services") ? "bg-white/20 text-white border border-white/30 shadow-xs" : "text-slate-100 hover:text-white hover:bg-white/12"),
								"aria-expanded": openDropdown === "services",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Services" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-3.5 w-3.5 transition-transform duration-200", openDropdown === "services" && "rotate-180 text-blue-300") })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOpenDropdown(openDropdown === "destinations" ? null : "destinations"),
								className: cn("inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-semibold transition-all whitespace-nowrap", openDropdown === "destinations" || pathname.startsWith("/countries") ? "bg-white/20 text-white border border-white/30 shadow-xs" : "text-slate-100 hover:text-white hover:bg-white/12"),
								"aria-expanded": openDropdown === "destinations",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Destinations" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-3.5 w-3.5 transition-transform duration-200", openDropdown === "destinations" && "rotate-180 text-blue-300") })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: cn("rounded-xl px-3.5 py-2 text-sm font-semibold transition-all whitespace-nowrap", pathname === "/about" ? "bg-white/20 text-white border border-white/30 shadow-xs" : "text-slate-100 hover:text-white hover:bg-white/12"),
								children: "About Us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: cn("rounded-xl px-3.5 py-2 text-sm font-semibold transition-all whitespace-nowrap", pathname === "/contact" ? "text-blue-400 font-semibold" : "text-slate-100 hover:text-white hover:bg-white/12"),
								children: "Contact"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-center gap-3 md:flex shrink-0 whitespace-nowrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20Areera%20Travel%2C%20I%20would%20like%20to%20inquire%20about%20visa%20assistance.`,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-1.5 rounded-xl border border-emerald-400/30 bg-emerald-500/15 px-3 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-500 hover:text-white transition-all whitespace-nowrap shadow-xs backdrop-blur-md",
							title: "Chat directly on WhatsApp",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden xl:inline",
								children: "WhatsApp Help"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services/visa",
							className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 border border-white/25 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:scale-[1.02] hover:shadow-blue-500/40 shrink-0 whitespace-nowrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Apply For Visa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMobileOpen((v) => !v),
						className: "flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white lg:hidden hover:bg-white/20 shrink-0 backdrop-blur-md",
						"aria-label": mobileOpen ? "Close menu" : "Open menu",
						children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})
				]
			}),
			openDropdown === "services" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 top-full border-b border-white/15 bg-slate-900/90 shadow-2xl backdrop-blur-3xl animate-fade-up",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 py-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center justify-between border-b border-white/10 pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold uppercase tracking-widest text-slate-300",
								children: "Core Travel & Visa Solutions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								className: "text-xs font-semibold text-blue-300 hover:text-white hover:underline",
								children: "All Services Overview →"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
							children: services.map((service) => {
								const Icon = serviceIcons[service.icon] || Stamp;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: service.path,
									className: "group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:border-white/30 hover:bg-white/12 backdrop-blur-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300 transition-colors group-hover:bg-blue-600 group-hover:text-white shadow-xs",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-sm font-bold text-white group-hover:text-blue-300 transition-colors",
											children: service.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-xs text-slate-300/80 leading-relaxed line-clamp-2",
											children: service.short
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-4 inline-flex items-center gap-1 text-[11px] font-semibold text-blue-300 group-hover:translate-x-0.5 transition-transform",
										children: ["Learn More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" })]
									})]
								}, service.slug);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300 backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-emerald-400" }), "100% Embassy-Compliant Documentation & Verified Travel Vouchers"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`,
								className: "font-semibold text-white hover:underline",
								children: ["Direct Desk: ", contactInfo.phone]
							})]
						})
					]
				})
			}),
			openDropdown === "destinations" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 top-full border-b border-white/15 bg-slate-900/90 shadow-2xl backdrop-blur-3xl animate-fade-up",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-5 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative w-full sm:w-80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-300" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: query,
										onChange: (e) => setQuery(e.target.value),
										placeholder: "Filter countries by name...",
										"aria-label": "Filter countries",
										maxLength: 50,
										className: "h-9 w-full rounded-xl border border-white/20 bg-white/10 pl-9 pr-3 text-xs text-white placeholder:text-slate-400 outline-none transition-colors focus:border-white/40 backdrop-blur-md"
									}),
									query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setQuery(""),
										className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white text-xs",
										children: "✕"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-slate-300",
									children: "Popular:"
								}), popularDestinations.slice(0, 5).map((slug) => {
									const country = countries.find((c) => c.slug === slug);
									if (!country) return null;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/countries/$slug",
										params: { slug: country.slug },
										className: "inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2 py-1 text-xs text-slate-100 hover:border-white/40 hover:bg-white/20 transition-colors backdrop-blur-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
											isoCode: country.isoCode,
											countryName: country.name,
											size: "xs"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: country.name })]
									}, country.slug);
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/countries",
								className: "text-xs font-semibold text-blue-300 hover:text-white hover:underline",
								children: "View All 44+ Countries →"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 md:grid-cols-[180px_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1 border-r border-white/10 pr-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-2 block text-[10px] font-bold uppercase tracking-wider text-slate-400",
								children: "Regions"
							}), REGIONS.map((r) => {
								const count = countries.filter((c) => c.region === r).length;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setSelectedRegion(r);
										setQuery("");
									},
									className: cn("flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-colors", selectedRegion === r && !query ? "bg-white/20 text-white border border-white/30 shadow-xs" : "text-slate-200 hover:bg-white/10 hover:text-white"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md bg-white/15 px-1.5 py-0.2 text-[10px] text-slate-200 font-bold",
										children: count
									})]
								}, r);
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-h-[220px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2.5 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-bold uppercase tracking-wider text-slate-300",
									children: query ? `Search Results (${filteredCountries.length})` : `${selectedRegion} Destinations (${filteredCountries.length})`
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/countries/$slug",
									params: { slug: REGION_SLUGS[selectedRegion] },
									className: "text-xs text-slate-300 hover:text-blue-300",
									children: [
										"Open ",
										selectedRegion,
										" Hub →"
									]
								})]
							}), filteredCountries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-36 items-center justify-center rounded-2xl border border-dashed border-white/20 text-xs text-slate-400 bg-white/5",
								children: "No destinations match your search."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid max-h-64 grid-cols-2 gap-2 overflow-y-auto pr-2 sm:grid-cols-3 lg:grid-cols-4",
								children: filteredCountries.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/countries/$slug",
									params: { slug: c.slug },
									className: "group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-2 text-xs transition-colors hover:border-white/30 hover:bg-white/15 backdrop-blur-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
										isoCode: c.isoCode,
										countryName: c.name,
										fallbackEmoji: c.flag,
										size: "xs"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate font-semibold text-white group-hover:text-blue-300",
											children: c.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-[10px] text-slate-300/80",
											children: c.capital
										})]
									})]
								}, c.slug))
							})]
						})]
					})]
				})
			}),
			mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("fixed inset-x-0 bottom-0 z-50 overflow-y-auto border-b border-white/20 bg-slate-900/95 p-5 backdrop-blur-3xl lg:hidden animate-fade-up transition-all duration-300", isScrolled ? "top-[72px]" : "top-[108px]"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Search 44+ countries...",
							"aria-label": "Search countries",
							maxLength: 50,
							className: "h-10 w-full rounded-xl border border-white/20 bg-white/10 pl-10 pr-4 text-xs text-white placeholder:text-slate-400 outline-none focus:border-white/40"
						})]
					}),
					query ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-bold uppercase tracking-wider text-slate-300",
							children: [
								"Matching Countries (",
								filteredCountries.length,
								")"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-1.5 max-h-72 overflow-y-auto",
							children: filteredCountries.slice(0, 12).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/countries/$slug",
								params: { slug: c.slug },
								className: "flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-2.5 text-xs font-medium text-white hover:border-white/40 backdrop-blur-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryFlag, {
									isoCode: c.isoCode,
									countryName: c.name,
									size: "sm"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-white",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[10px] text-slate-300",
									children: [
										c.region,
										" · ",
										c.processingTime
									]
								})] })]
							}, c.slug))
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1 border-b border-white/15 pb-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										className: "block rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10",
										children: "Home"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/services",
										className: "block rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10",
										children: "Services"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/countries",
										className: "block rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10",
										children: "All Destinations (44+)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/about",
										className: "block rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10",
										children: "About Us"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										className: "block rounded-xl px-3 py-2 text-sm font-semibold text-white hover:bg-white/10",
										children: "Contact"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${contactInfo.phone.replace(/[^0-9+]/g, "")}`,
									className: "flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 py-2.5 text-xs font-semibold text-white backdrop-blur-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 text-blue-300" }), " Direct Call"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`,
									target: "_blank",
									rel: "noreferrer",
									className: "flex items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/20 py-2.5 text-xs font-semibold text-emerald-300 backdrop-blur-md",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-3.5 w-3.5" }), " WhatsApp"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services/visa",
								className: "block w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 border border-white/25 py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/30",
								children: "Apply For Visa Online"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setMobileOpen(false),
						className: "mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 py-2.5 text-xs font-semibold text-slate-300 hover:text-white backdrop-blur-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), " Close Menu"]
					})
				]
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-16 border-t border-border/80 bg-card/60 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-[1.2fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { size: "lg" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-sm leading-relaxed text-muted-foreground",
							children: "Visa filing support, air ticketing, document attestation, hotel bookings and flight reservations — handled by people who explain every step before you commit."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
										"aria-hidden": true
									}), contactInfo.address]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "h-4 w-4 shrink-0 text-primary",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
										className: "hover:text-foreground",
										children: contactInfo.phone
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "h-4 w-4 shrink-0 text-primary",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${contactInfo.email}`,
										className: "hover:text-foreground",
										children: contactInfo.email
									})]
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary",
							children: "Services"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2 text-sm text-muted-foreground",
							children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: s.path,
								className: "hover:text-foreground",
								children: s.title
							}) }, s.slug))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary",
							children: "Company"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "hover:text-foreground",
									children: "About Areera Travel and Tours"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "hover:text-foreground",
									children: "Contact our travel consultants"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/countries",
									className: "hover:text-foreground",
									children: "All visa destinations"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/hotel-booking",
									className: "hover:text-foreground",
									children: "Hotel booking inquiries"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/flight-reservation",
									className: "hover:text-foreground",
									children: "Flight reservation requests"
								}) })
							]
						})] })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-4",
					children: REGIONS.map((region) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/countries/$slug",
						params: { slug: REGION_SLUGS[region] },
						className: "mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-primary",
						children: region
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1.5 text-sm text-muted-foreground",
						children: countriesByRegion(region).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/countries/$slug",
							params: { slug: c.slug },
							className: "hover:text-foreground",
							children: [c.name, " visa"]
						}) }, c.slug))
					})] }, region))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-10 border-t border-border pt-6 text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Areera Travel and Tours. Visa decisions rest solely with the relevant embassy or consulate; we provide documentation and filing support only."
					]
				})
			]
		})
	});
}
var items = [
	{
		to: "/",
		label: "Home",
		Icon: House
	},
	{
		to: "/services",
		label: "Services",
		Icon: LayoutGrid
	},
	{
		to: "/countries",
		label: "Countries",
		Icon: Earth
	},
	{
		to: "/contact",
		label: "Contact",
		Icon: PhoneCall
	}
];
function MobileNav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Primary mobile navigation",
		className: "glass fixed inset-x-0 bottom-0 z-50 border-t border-border pb-[env(safe-area-inset-bottom)] md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mx-auto grid max-w-md grid-cols-4",
			children: items.map(({ to, label, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to,
				activeOptions: { exact: to === "/" },
				activeProps: { className: "text-primary" },
				inactiveProps: { className: "text-muted-foreground" },
				className: "flex flex-col items-center gap-1 py-2.5 text-[11px] font-medium",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-5 w-5",
					"aria-hidden": true
				}), label]
			}) }, to))
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong while rendering this page."
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 text-left overflow-x-auto rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-xs font-mono text-destructive",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-bold",
						children: [
							error.name,
							": ",
							error.message
						]
					}), error.stack ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-2 whitespace-pre-wrap text-[11px] text-muted-foreground opacity-80 max-h-48 overflow-y-auto",
						children: error.stack
					}) : null]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-xl border border-input bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Areera Travel and Tours" },
			{
				name: "description",
				content: "Visa assistance, air ticketing, attestation, hotel booking and flight reservations by Areera Travel and Tours."
			},
			{
				property: "og:site_name",
				content: "Areera Travel and Tours"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(organizationSchema())
		}, {
			type: "application/ld+json",
			children: JSON.stringify(websiteSchema())
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-h-[60vh] pb-20 md:pb-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" })
		]
	});
}
var $$splitComponentImporter$11 = () => import("./routes-BpyVkfqf.mjs");
var Route$11 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Areera Travel and Tours — Visa Assistance, Air Tickets & Attestation" },
			{
				name: "description",
				content: "Professional visa assistance, air ticketing, official document attestation, verified hotel reservations, and travel support for 40+ global destinations."
			},
			{
				property: "og:title",
				content: "Areera Travel and Tours — Visa & Travel Experts"
			},
			{
				property: "og:description",
				content: "Premium visa filing, air ticketing, and attestation support for travellers across Asia, Middle East, Europe, and Africa."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema([{
				name: "Home",
				item: "/"
			}]))
		}, {
			type: "application/ld+json",
			children: JSON.stringify(faqPageSchema(homeFaqs))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./about-BNFeWu9Y.mjs");
var Route$10 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Areera Travel and Tours — Our Story & Team" },
			{
				name: "description",
				content: "Areera Travel and Tours helps travellers with visa filing, ticketing and attestation. Meet the team and read how we work."
			},
			{
				property: "og:title",
				content: "About Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Our story, mission and the consultants behind every application we file."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(faqPageSchema(aboutFaqs))
		}, {
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema([{
				name: "Home",
				item: "/"
			}, {
				name: "About Us",
				item: "/about"
			}]))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./contact-8WrJqu_9.mjs");
var Route$9 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Areera Travel and Tours — Phone, WhatsApp & Office" },
			{
				name: "description",
				content: "Contact Areera Travel and Tours for visa, ticketing, attestation and booking support. Office address, phone, WhatsApp, email and business hours."
			},
			{
				property: "og:title",
				content: "Contact Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Reach our travel consultants by phone, WhatsApp, email or at our office."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(faqPageSchema(contactFaqs))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(organizationSchema())
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(breadcrumbSchema([{
					name: "Home",
					item: "/"
				}, {
					name: "Contact Us",
					item: "/contact"
				}]))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("animate-pulse rounded-md bg-primary/10", className),
		...props
	});
}
/** Placeholder grid shown while country routes/chunks are loading or retrying. */
function CountriesSkeleton({ cards = 6 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-6 h-9 w-72" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-3 h-4 w-full max-w-xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-8 h-12 w-full rounded-xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 w-24 rounded-full" }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: Array.from({ length: cards }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card/60 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-10 w-10 rounded-full" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-4 h-5 w-32" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-2 h-4 w-full" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-2 h-4 w-3/4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mt-5 h-4 w-24" })
					]
				}, i))
			})
		]
	});
}
var $$splitErrorComponentImporter = () => import("./countries-CJPMOUcm.mjs");
var $$splitComponentImporter$8 = () => import("./countries-fHxncJ_y.mjs");
var Route$8 = createFileRoute("/countries")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	pendingComponent: CountriesPending,
	pendingMs: 200
});
function CountriesPending() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountriesSkeleton, {});
}
var $$splitComponentImporter$7 = () => import("./flight-reservation-DCy5mwDN.mjs");
var Route$7 = createFileRoute("/flight-reservation")({
	validateSearch: (search) => ({ destination: typeof search["destination"] === "string" ? search["destination"].slice(0, 60) : void 0 }),
	head: () => ({
		meta: [
			{ title: "Flight Reservation — Visa-Ready Bookings & Ticketing | Areera" },
			{
				name: "description",
				content: "Request verifiable flight reservations for embassy submission and confirmed tickets after approval, on domestic and international routes."
			},
			{
				property: "og:title",
				content: "Flight Reservation | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Verifiable flight reservations for visa files, plus confirmed ticketing when you are ready to fly."
			},
			{
				property: "og:url",
				content: "/flight-reservation"
			}
		],
		links: [{
			rel: "canonical",
			href: "/flight-reservation"
		}],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(faqPageSchema(flightFaqs))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(breadcrumbSchema([{
					name: "Home",
					item: "/"
				}, {
					name: "Flight Reservation",
					item: "/flight-reservation"
				}]))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema({
					title: "Flight Reservation",
					description: "Verifiable flight reservations for embassy submission, plus confirmed ticketing when your visa is approved.",
					path: "/flight-reservation"
				}))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./hotel-booking-BwlMhHue.mjs");
var Route$6 = createFileRoute("/hotel-booking")({
	validateSearch: (search) => ({ destination: typeof search["destination"] === "string" ? search["destination"].slice(0, 60) : void 0 }),
	head: () => ({
		meta: [
			{ title: "Hotel Booking — Verified Stays & Visa-Ready Reservations | Areera" },
			{
				name: "description",
				content: "Request hotel bookings across Asia, the Middle East and Africa, including confirmed reservations suitable for visa applications."
			},
			{
				property: "og:title",
				content: "Hotel Booking | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Hand-picked hotels and visa-compliant reservations arranged by our travel consultants."
			},
			{
				property: "og:url",
				content: "/hotel-booking"
			}
		],
		links: [{
			rel: "canonical",
			href: "/hotel-booking"
		}],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(faqPageSchema(hotelFaqs))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(breadcrumbSchema([{
					name: "Home",
					item: "/"
				}, {
					name: "Hotel Booking",
					item: "/hotel-booking"
				}]))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema({
					title: "Hotel Booking",
					description: "Hand-picked stays across every price band, with confirmed bookings suitable for visa applications.",
					path: "/hotel-booking"
				}))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./countries.index-DXf2AR6T.mjs");
var Route$5 = createFileRoute("/countries/")({
	head: () => ({
		meta: [
			{ title: "Visa Destinations & Requirements by Country | Areera Travel & Tours" },
			{
				name: "description",
				content: "Explore visa requirements, processing times, fees, and required documents for 40+ countries across Asia, the Middle East, North Africa, Africa and Western destinations."
			},
			{
				property: "og:title",
				content: "Global Visa Destinations | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Detailed country guides with visa types, required documents and expert filing support."
			},
			{
				property: "og:url",
				content: "/countries"
			}
		],
		links: [{
			rel: "canonical",
			href: "/countries"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(faqPageSchema(countriesHubFaqs))
		}, {
			type: "application/ld+json",
			children: JSON.stringify(breadcrumbSchema([{
				name: "Home",
				item: "/"
			}, {
				name: "Countries",
				item: "/countries"
			}]))
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./countries._slug-SLha3Nyy.mjs");
var Route$4 = createFileRoute("/countries/$slug")({
	loader: ({ params }) => {
		const region = getRegionBySlug(params.slug);
		if (region) return {
			kind: "region",
			region
		};
		const country = getCountry(params.slug);
		if (country) return {
			kind: "country",
			country
		};
		throw notFound();
	},
	head: ({ params, loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Destination not found | Areera Travel and Tours" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = loaderData.kind === "region" ? `${loaderData.region} Visa Destinations — Country Guides & Requirements | Areera` : `${loaderData.country.name} Visa Requirements, Fees & Application Guide | Areera`;
		const description = loaderData.kind === "region" ? `Visa guidelines for all countries in ${loaderData.region}: required documents, e-visa processing timeframes, and flight booking assistance.` : `Apply for your ${loaderData.country.name} visa with Areera Travel and Tours. Detailed requirements, documents checklist, processing times, fees, and application support.`;
		const breadcrumbItems = loaderData.kind === "region" ? [
			{
				name: "Home",
				item: "/"
			},
			{
				name: "Countries",
				item: "/countries"
			},
			{
				name: loaderData.region,
				item: `/countries/${params.slug}`
			}
		] : [
			{
				name: "Home",
				item: "/"
			},
			{
				name: "Countries",
				item: "/countries"
			},
			{
				name: loaderData.country.region,
				item: `/countries/${REGION_SLUGS[loaderData.country.region]}`
			},
			{
				name: loaderData.country.name,
				item: `/countries/${params.slug}`
			}
		];
		const faqQuestions = loaderData.kind === "country" ? countryFaqs(loaderData.country) : null;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:url",
					content: `/countries/${params.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/countries/${params.slug}`
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify(breadcrumbSchema(breadcrumbItems))
			}, ...faqQuestions ? [{
				type: "application/ld+json",
				children: JSON.stringify(faqPageSchema(faqQuestions))
			}] : []]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./services.index-DzTYnJQK.mjs");
var Route$3 = createFileRoute("/services/")({
	head: () => ({
		meta: [
			{ title: "Travel Services — Visa, Ticketing & Attestation | Areera" },
			{
				name: "description",
				content: "Explore Areera Travel and Tours services: visa filing support, domestic and international ticketing, document attestation, hotel booking and flight reservations."
			},
			{
				property: "og:title",
				content: "Travel Services | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Visa, ticketing, attestation, hotel booking and flight reservation services."
			},
			{
				property: "og:url",
				content: "/services"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(breadcrumbSchema([{
					name: "Home",
					item: "/"
				}, {
					name: "Services",
					item: "/services"
				}]))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(faqPageSchema(servicesFaqs))
			},
			...services.map((s) => ({
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema(s))
			}))
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./services.attestation-BRWeQVax.mjs");
var Route$2 = createFileRoute("/services/attestation")({
	head: () => ({
		meta: [
			{ title: "Document Attestation Services — Educational & Commercial | Areera" },
			{
				name: "description",
				content: "Educational, personal and commercial document attestation: notary, board/HEC, Ministry of Foreign Affairs and embassy stages handled in the correct order."
			},
			{
				property: "og:title",
				content: "Attestation Services | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Degree, marriage certificate and commercial document attestation for Gulf employment and residency."
			},
			{
				property: "og:url",
				content: "/services/attestation"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services/attestation"
		}],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(faqPageSchema(attestationFaqs))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(breadcrumbSchema([
					{
						name: "Home",
						item: "/"
					},
					{
						name: "Services",
						item: "/services"
					},
					{
						name: "Attestation Services",
						item: "/services/attestation"
					}
				]))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema({
					title: "Attestation Services",
					description: "Notary, HEC/board, Ministry of Foreign Affairs and embassy attestation handled in the correct order, with tracking at each stage.",
					path: "/services/attestation"
				}))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services.ticket-Byc5jyUF.mjs");
var Route$1 = createFileRoute("/services/ticket")({
	head: () => ({
		meta: [
			{ title: "Air Ticket Booking — Domestic & International | Areera" },
			{
				name: "description",
				content: "Domestic and international air ticketing with fare comparison, group bookings, date changes and itinerary support from Areera Travel and Tours."
			},
			{
				property: "og:title",
				content: "Ticket Booking | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Compare fares, book group travel and manage changes with a dedicated ticketing consultant."
			},
			{
				property: "og:url",
				content: "/services/ticket"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services/ticket"
		}],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(faqPageSchema(ticketFaqs))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(breadcrumbSchema([
					{
						name: "Home",
						item: "/"
					},
					{
						name: "Services",
						item: "/services"
					},
					{
						name: "Ticket Booking",
						item: "/services/ticket"
					}
				]))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema({
					title: "Ticket Booking",
					description: "Fare comparison across airlines, group bookings, date changes and 24/7 itinerary support for domestic and international routes.",
					path: "/services/ticket"
				}))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services.visa-BrMa_6x_.mjs");
var Route = createFileRoute("/services/visa")({
	validateSearch: (search) => ({ country: typeof search["country"] === "string" ? search["country"].slice(0, 60) : void 0 }),
	head: () => ({
		meta: [
			{ title: "Visa Services — Tourist, Business, Student & Work Visas | Areera" },
			{
				name: "description",
				content: "Visa filing support for tourist, business, student and work visas: eligibility review, document checklists, form filling and appointment scheduling."
			},
			{
				property: "og:title",
				content: "Visa Services | Areera Travel and Tours"
			},
			{
				property: "og:description",
				content: "Document-first visa assistance for destinations across Asia, the Middle East, Europe and Africa."
			},
			{
				property: "og:url",
				content: "/services/visa"
			}
		],
		links: [{
			rel: "canonical",
			href: "/services/visa"
		}],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(faqPageSchema(visaFaqs))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(breadcrumbSchema([
					{
						name: "Home",
						item: "/"
					},
					{
						name: "Services",
						item: "/services"
					},
					{
						name: "Visa Services",
						item: "/services/visa"
					}
				]))
			},
			{
				type: "application/ld+json",
				children: JSON.stringify(serviceSchema({
					title: "Visa Services",
					description: "End-to-end visa guidance: eligibility review, document checklist, form filling, appointment scheduling and submission support.",
					path: "/services/visa"
				}))
			}
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$10.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$9.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var CountriesRoute = Route$8.update({
	id: "/countries",
	path: "/countries",
	getParentRoute: () => Route$12
});
var FlightReservationRoute = Route$7.update({
	id: "/flight-reservation",
	path: "/flight-reservation",
	getParentRoute: () => Route$12
});
var HotelBookingRoute = Route$6.update({
	id: "/hotel-booking",
	path: "/hotel-booking",
	getParentRoute: () => Route$12
});
var CountriesIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => CountriesRoute
});
var CountriesSlugRoute = Route$4.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => CountriesRoute
});
var ServicesIndexRoute = Route$3.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$12
});
var ServicesAttestationRoute = Route$2.update({
	id: "/services/attestation",
	path: "/services/attestation",
	getParentRoute: () => Route$12
});
var ServicesTicketRoute = Route$1.update({
	id: "/services/ticket",
	path: "/services/ticket",
	getParentRoute: () => Route$12
});
var ServicesVisaRoute = Route.update({
	id: "/services/visa",
	path: "/services/visa",
	getParentRoute: () => Route$12
});
var CountriesRouteChildren = {
	CountriesSlugRoute,
	CountriesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	CountriesRoute: CountriesRoute._addFileChildren(CountriesRouteChildren),
	FlightReservationRoute,
	HotelBookingRoute,
	ServicesAttestationRoute,
	ServicesTicketRoute,
	ServicesVisaRoute,
	ServicesIndexRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
if (typeof window !== "undefined") {
	const reloadOnce = () => {
		const KEY = "chunk-reload";
		if (sessionStorage.getItem(KEY)) return;
		sessionStorage.setItem(KEY, "1");
		window.location.reload();
	};
	window.addEventListener("vite:preloadError", (event) => {
		event.preventDefault();
		reloadOnce();
	});
	window.addEventListener("unhandledrejection", (event) => {
		if (String(event.reason?.message ?? "").includes("Failed to fetch dynamically imported module")) reloadOnce();
	});
	window.setTimeout(() => sessionStorage.removeItem("chunk-reload"), 1e4);
}
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { Route$6 as a, router_exports as c, attestationCountries as d, countries as f, popularVisaDestinations as h, Route$4 as i, REGIONS as l, popularDestinations as m, CountryFlag as n, Route$7 as o, countriesByRegion as p, Route as r, getRouter as s, CountriesSkeleton as t, REGION_SLUGS as u };
