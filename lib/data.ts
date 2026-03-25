export type Category = "All" | "Politics" | "Business" | "Economy" | "Technology" | "Science" | "Health" | "Climate";

export interface NewsArticle {
  id: string;
  url: string;
  title: string;
  description: string;
  imageUrl: string;
  category: Category;
  date: string;
  priority?: boolean;
}

export const categories: Category[] = ["All", "Politics", "Business", "Economy", "Technology", "Science", "Health", "Climate"];

export const articles: NewsArticle[] = [
  // --- TECHNOLOGY ---
  {
    id: "1",
    url: "https://nextjs.org",
    title: "The Evolution of React Server Components",
    description: "How the industry is shifting towards server-first architecture and what it means for the next decade of web development.",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    category: "Technology",
    date: "Mar 26, 2026",
    priority: true,
  },
  {
    id: "2",
    url: "#",
    title: "Quantum Computing Reaches Stability",
    description: "Researchers achieve error-corrected qubits, moving quantum out of the lab and into the cloud.",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=400&auto=format&fit=crop",
    category: "Technology",
    date: "Mar 25, 2026",
  },
  {
    id: "3",
    url: "#",
    title: "Neuralink 4.0: Hands-free Coding",
    description: "The latest brain-computer interface allows developers to write code using purely thought-based logic.",
    imageUrl: "https://images.unsplash.com/photo-1555255707-c07966488bc2?q=80&w=400&auto=format&fit=crop",
    category: "Technology",
    date: "Mar 24, 2026",
  },

  // --- POLITICS ---
  {
    id: "4",
    url: "#",
    title: "The 2026 Global Digital Accord",
    description: "140 nations sign a landmark treaty governing the ethical use of AI in national defense systems.",
    imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop",
    category: "Politics",
    date: "Mar 26, 2026",
    priority: true,
  },
  {
    id: "5",
    url: "#",
    title: "New Voting Laws in the Digital Age",
    description: "Blockchain-based identity verification becomes mandatory for all regional elections starting this fall.",
    imageUrl: "https://images.unsplash.com/photo-1540910419892-f0c74b0e8968?q=80&w=400&auto=format&fit=crop",
    category: "Politics",
    date: "Mar 25, 2026",
  },

  // --- ECONOMY ---
  {
    id: "6",
    url: "https://vercel.com",
    title: "Global Economy Shifts: The Digital Commodity Era",
    description: "New reports suggest a surge in digital-first commodities as virtual real estate outpaces physical assets.",
    imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=400&auto=format&fit=crop",
    category: "Economy",
    date: "Mar 25, 2026",
  },
  {
    id: "7",
    url: "#",
    title: "Universal Basic Income: The Final Pilot",
    description: "Three major European nations move to permanent UBI implementation following successful two-year trials.",
    imageUrl: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=400&auto=format&fit=crop",
    category: "Economy",
    date: "Mar 24, 2026",
  },

  // --- BUSINESS ---
  {
    id: "8",
    url: "#",
    title: "Apple Acquires Top Satellite Network",
    description: "The move signals a future where iPhones operate entirely independent of terrestrial cell towers.",
    imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=400&auto=format&fit=crop",
    category: "Business",
    date: "Mar 26, 2026",
  },
  {
    id: "9",
    url: "#",
    title: "The Rise of the One-Person Billion Dollar Startup",
    description: "AI automation allows solo founders to manage global logistics and customer service at an unprecedented scale.",
    imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    category: "Business",
    date: "Mar 23, 2026",
    priority: true,
  },

  // --- SCIENCE ---
  {
    id: "10",
    url: "#",
    title: "Mars Colony Alpha Harvests First Crop",
    description: "Hydroponic systems on Mars successfully produce enough leafy greens to sustain the current crew of 12.",
    imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=400&auto=format&fit=crop",
    category: "Science",
    date: "Mar 26, 2026",
  },
  {
    id: "11",
    url: "#",
    title: "Fusion Energy Reaches Break-even Point",
    description: "A private fusion lab maintains a plasma reaction for 48 hours, yielding 20% more energy than it consumed.",
    imageUrl: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800&auto=format&fit=crop",
    category: "Science",
    date: "Mar 22, 2026",
    priority: true,
  },

  // --- HEALTH ---
  {
    id: "12",
    url: "#",
    title: "CRISPR-Based Vision Restoration",
    description: "The FDA approves the first gene-editing therapy to reverse hereditary blindness in children.",
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=400&auto=format&fit=crop",
    category: "Health",
    date: "Mar 26, 2026",
  },
  {
    id: "13",
    url: "#",
    title: "The Longevity Pill: Myths vs Reality",
    description: "New clinical data suggests Senolytics could extend active human lifespan by an average of 15 years.",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&auto=format&fit=crop",
    category: "Health",
    date: "Mar 21, 2026",
  },

  // --- CLIMATE ---
  {
    id: "14",
    url: "#",
    title: "The Great Coral Restoration Project",
    description: "Autonomous underwater robots successfully replant 5,000 square miles of the Great Barrier Reef.",
    imageUrl: "https://images.unsplash.com/photo-1546027658-e536284e234a?q=80&w=800&auto=format&fit=crop",
    category: "Climate",
    date: "Mar 26, 2026",
    priority: true,
  },
  {
    id: "15",
    url: "#",
    title: "Green Hydrogen Powers Domestic Flights",
    description: "First commercial flight across the Atlantic using 100% green hydrogen fuel lands in London.",
    imageUrl: "https://images.unsplash.com/photo-1464037862834-85744a45ca34?q=80&w=400&auto=format&fit=crop",
    category: "Climate",
    date: "Mar 20, 2026",
  },

  // ... [Continuing for 35 more entries with varied categories] ...
  { id: "16", url: "#", title: "AI-Generated Cinema Wins First Major Award", description: "A film entirely rendered by AI wins Best Cinematography at the Venice Film Festival.", imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400&auto=format&fit=crop", category: "Technology", date: "Mar 19, 2026" },
  { id: "17", url: "#", title: "Smart Fabrics Enter Mainstream Fashion", description: "Clothing that adjusts its insulation based on body temperature hits mass-market retailers.", imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=400&auto=format&fit=crop", category: "Business", date: "Mar 18, 2026" },
  { id: "18", url: "#", title: "Deep Sea Mining Ban Extension", description: "United Nations expands the protected zone to include 70% of the Pacific seabed.", imageUrl: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?q=80&w=400&auto=format&fit=crop", category: "Climate", date: "Mar 17, 2026" },
  { id: "19", url: "#", title: "Virtual Reality Workspace Trends", description: "50% of Fortune 500 companies now offer 'office days' in the metaverse.", imageUrl: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=400&auto=format&fit=crop", category: "Technology", date: "Mar 16, 2026" },
  { id: "20", url: "#", title: "Stock Market volatility hits record lows", description: "AI trading algorithms reach a stable equilibrium, drastically reducing daily swings.", imageUrl: "https://images.unsplash.com/photo-1611974714851-eb6053e68376?q=80&w=400&auto=format&fit=crop", category: "Economy", date: "Mar 15, 2026" },
  { id: "21", url: "#", title: "SpaceX Starship Commercial Hub", description: "Construction begins on the first orbital hotel designed for civilian tourists.", imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop", category: "Science", date: "Mar 14, 2026" },
  { id: "22", url: "#", title: "Lab-Grown Leather Hits Luxury Markets", description: "Major fashion houses move away from animal hides toward sustainable lab-alternatives.", imageUrl: "https://images.unsplash.com/photo-1524275539700-fb029badb13d?q=80&w=400&auto=format&fit=crop", category: "Business", date: "Mar 13, 2026" },
  { id: "23", url: "#", title: "Antibiotic Resistance: The Breakthrough", description: "A new class of synthetic molecules proves effective against 'superbugs'.", imageUrl: "https://images.unsplash.com/photo-1583912267550-d44d4a3c5a61?q=80&w=400&auto=format&fit=crop", category: "Health", date: "Mar 12, 2026" },
  { id: "24", url: "#", title: "Vertical Farming in Urban Centers", description: "New York City opens its largest sky-farm, producing food for 100,000 residents.", imageUrl: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=400&auto=format&fit=crop", category: "Climate", date: "Mar 11, 2026" },
  { id: "25", url: "#", title: "The Sovereign AI Movement", description: "Nations begin building their own LLMs to ensure cultural data independence.", imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&auto=format&fit=crop", category: "Politics", date: "Mar 10, 2026" },
  { id: "26", url: "#", title: "Electric VTOL Commuter Network", description: "Los Angeles launches the first public air-taxi service between downtown and LAX.", imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=400&auto=format&fit=crop", category: "Technology", date: "Mar 09, 2026" },
  { id: "27", url: "#", title: "Central Bank Digital Currencies (CBDC)", description: "The transition to a cashless society accelerates as 10 more nations launch digital wallets.", imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=400&auto=format&fit=crop", category: "Economy", date: "Mar 08, 2026" },
  { id: "28", url: "#", title: "Biodegradable Micro-Electronics", description: "Sensors that dissolve in soil after 6 months are deployed for large-scale environmental monitoring.", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop", category: "Science", date: "Mar 07, 2026" },
  { id: "29", url: "#", title: "The Rise of Personalized Nutrition", description: "Smart-fridges now analyze biometrics to suggest meal plans optimized for longevity.", imageUrl: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=400&auto=format&fit=crop", category: "Health", date: "Mar 06, 2026" },
  { id: "30", url: "#", title: "Solar Shielding Trials Over Arctic", description: "Scientists begin testing safe stratospheric aerosols to reflect sunlight and preserve sea ice.", imageUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=400&auto=format&fit=crop", category: "Climate", date: "Mar 05, 2026" },
  { id: "31", url: "#", title: "Holographic Telepresence for Remote Work", description: "3D meetings move from sci-fi to standard office hardware with the new HoloDesk.", imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop", category: "Technology", date: "Mar 04, 2026" },
  { id: "32", url: "#", title: "Global Trade Corridors Redefined", description: "Automated Arctic shipping lanes reduce transit time between Asia and Europe by 40%.", imageUrl: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=400&auto=format&fit=crop", category: "Business", date: "Mar 03, 2026" },
  { id: "33", url: "#", title: "Privacy Coins vs Global Regulation", description: "A major debate ensues as regulators attempt to ban anonymous crypto transactions.", imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=400&auto=format&fit=crop", category: "Politics", date: "Mar 02, 2026" },
  { id: "34", url: "#", title: "The Synthetic Meat Mainstream", description: "Traditional farming subsidies shift toward bioreactor-based protein production.", imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop", category: "Economy", date: "Mar 01, 2026" },
  { id: "35", url: "#", title: "Exoplanet Atmosphere Analysis", description: "The James Webb successor finds clear signs of oxygen and methane on a nearby rocky planet.", imageUrl: "https://images.unsplash.com/photo-1464802686167-b939a67e06a1?q=80&w=400&auto=format&fit=crop", category: "Science", date: "Feb 28, 2026" },
  { id: "36", url: "#", title: "Nanobot-Based Cancer Detection", description: "Ingestible sensors that patrol the bloodstream for early-stage tumors enter phase 3 trials.", imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9d39d99c5?q=80&w=400&auto=format&fit=crop", category: "Health", date: "Feb 27, 2026" },
  { id: "37", url: "#", title: "Oceanic Carbon Capture Stations", description: "A network of buoys is deployed to suck CO2 directly from the North Sea.", imageUrl: "https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?q=80&w=400&auto=format&fit=crop", category: "Climate", date: "Feb 26, 2026" },
  { id: "38", url: "#", title: "The End of Legacy Passwords", description: "Biometric and passkey adoption reaches 95% among major online platforms.", imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop", category: "Technology", date: "Feb 25, 2026" },
  { id: "39", url: "#", title: "Automated Supply Chain Resilience", description: "AI predicts and reroutes 90% of shipping delays before they actually occur.", imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop", category: "Business", date: "Feb 24, 2026" },
  { id: "40", url: "#", title: "New European Tech Hubs", description: "Lisbon and Warsaw overtake Berlin as the fastest-growing startup ecosystems in the EU.", imageUrl: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=400&auto=format&fit=crop", category: "Business", date: "Feb 23, 2026" },
  { id: "41", url: "#", title: "Democratic Decentralization Trials", description: "Local communities experiment with liquid democracy through verified mobile apps.", imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=400&auto=format&fit=crop", category: "Politics", date: "Feb 22, 2026" },
  { id: "42", url: "#", title: "The Great Skill Reshuffle", description: "Higher education shifts from degrees to 6-month AI-assisted 'Micro-Certifications'.", imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400&auto=format&fit=crop", category: "Economy", date: "Feb 21, 2026" },
  { id: "43", url: "#", title: "Antarctic Volcano Activity Increase", description: "Geologists monitor a series of tremors beneath the ice sheet.", imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400&auto=format&fit=crop", category: "Science", date: "Feb 20, 2026" },
  { id: "44", url: "#", title: "Brain-Sensing Wearables for Focus", description: "New headbands monitor alpha waves to optimize work-flow and prevent burnout.", imageUrl: "https://images.unsplash.com/photo-1516192515347-ea5c5ef6443c?q=80&w=400&auto=format&fit=crop", category: "Health", date: "Feb 19, 2026" },
  { id: "45", url: "#", title: "Direct-to-Consumer Energy Sales", description: "Homeowners with solar panels begin selling excess power directly to neighbors on a p2p grid.", imageUrl: "https://images.unsplash.com/photo-1509391366360-fe5bb6058827?q=80&w=400&auto=format&fit=crop", category: "Climate", date: "Feb 18, 2026" },
  { id: "46", url: "#", title: "AR Navigation Becomes Standard", description: "Heads-up displays for pedestrians enter mainstream glasses, replacing phone-based maps.", imageUrl: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=400&auto=format&fit=crop", category: "Technology", date: "Feb 17, 2026" },
  { id: "47", url: "#", title: "The 4-Day Work Week Mandate", description: "Several major economies move to a 32-hour work week to combat AI-driven labor shifts.", imageUrl: "https://images.unsplash.com/photo-1506784919141-935064619934?q=80&w=400&auto=format&fit=crop", category: "Economy", date: "Feb 16, 2026" },
  { id: "48", url: "#", title: "Solid State Batteries for Long-Range EVs", description: "New battery technology allows for 1,000-mile range on a single 5-minute charge.", imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=400&auto=format&fit=crop", category: "Climate", date: "Feb 15, 2026" },
  { id: "49", url: "#", title: "Synthetic Language Preservation", description: "AI is used to reconstruct and speak dead languages for historical documentaries.", imageUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=400&auto=format&fit=crop", category: "Science", date: "Feb 14, 2026" },
  { id: "50", url: "#", title: "Mental Health AI Companions", description: "FDA-approved 'Empathetic AI' reduces isolation rates in elderly populations.", imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=400&auto=format&fit=crop", category: "Health", date: "Feb 13, 2026" },
];