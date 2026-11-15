// AQMedTech Innovations — Seed Data & LocalStorage Helpers
// Plain JavaScript ES module — no imports required

// ─────────────────────────────────────────────────────────────────────────────
// 1. SITE CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const SITE_CONFIG = {
  whatsappNumber: "2348012345678",
  adminPassword: "aqmedtech2024",
  siteName: "AQMedTech Innovations",
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. PORTFOLIO PROJECTS
// ─────────────────────────────────────────────────────────────────────────────
const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "PharmaQuiz AI",
    subtitle: "Interactive Pharmacology Platform",
    category: "Health-Tech",
    description:
      "AI-powered pharmacology quiz app for medical students and pharmacy professionals. Features adaptive learning, drug interaction checkers, and performance analytics.",
    techStack: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600",
    featured: true,
    liveUrl: "#",
    year: 2024,
  },
  {
    id: 2,
    title: "ClinicFlow Patient Portal",
    subtitle: "Seamless Healthcare Management",
    category: "Health-Tech",
    description:
      "Full telemedicine and patient management portal for private clinics. Includes appointment booking, teleconsultations, digital prescriptions, and payment integration.",
    techStack: ["Next.js", "Supabase", "Tailwind", "Stripe"],
    imageUrl: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?w=600",
    featured: true,
    liveUrl: "#",
    year: 2024,
  },
  {
    id: 3,
    title: "Enterprise E-Commerce Suite",
    subtitle: "High-Conversion B2B/B2C Platform",
    category: "E-Commerce",
    description:
      "Custom multi-vendor e-commerce platform with real-time inventory, automated invoicing, logistics tracking, and a CRM dashboard for a Lagos-based retail group.",
    techStack: ["React", "Django", "Redis", "AWS S3"],
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
    featured: false,
    liveUrl: "#",
    year: 2023,
  },
  {
    id: 4,
    title: "AQMedTech Ecosystem",
    subtitle: "The Platform You Are On Now",
    category: "Full-Stack",
    description:
      "The AQMedTech Innovations platform itself — a multi-pillar digital ecosystem combining a tech agency portfolio, product ad marketplace, and expert health-tech news hub.",
    techStack: ["Next.js", "Supabase", "Tailwind CSS", "Vercel"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
    featured: true,
    liveUrl: "#",
    year: 2024,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 3. SEED ADS
// ─────────────────────────────────────────────────────────────────────────────
const SEED_ADS = [
  {
    id: 1,
    title: "Premium Digital Blood Pressure Monitor",
    price: "₦45,000",
    priceUSD: "$28",
    category: "Health & Wellness",
    description:
      "Accurate upper-arm digital BP monitor with memory storage for 60 readings, irregular heartbeat detection, and large LCD display. Ideal for home and clinical use.",
    sellerName: "HealthFirst Nigeria",
    sellerWhatsapp: "2348012345678",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600",
    views: 234,
    clicks: 45,
    featured: true,
  },
  {
    id: 2,
    title: "Sony WH-1000XM5 Wireless Headphones",
    price: "₦89,000",
    priceUSD: "$55",
    category: "Tech & Gadgets",
    description:
      "Industry-leading noise cancellation headphones with 30-hour battery life, multipoint connection, and crystal-clear hands-free calling. Brand new, sealed box.",
    sellerName: "TechVault Lagos",
    sellerWhatsapp: "2348098765432",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    views: 512,
    clicks: 89,
    featured: true,
  },
  {
    id: 3,
    title: "360° Digital Marketing Services",
    price: "From ₦150,000/mo",
    priceUSD: "From $95/mo",
    category: "Business Services",
    description:
      "Full-service digital marketing including SEO, social media management, Google Ads, and content creation. 100+ Nigerian businesses served. Book a free strategy call.",
    sellerName: "BrandGrow Agency",
    sellerWhatsapp: "2347012345678",
    imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600",
    views: 178,
    clicks: 32,
    featured: false,
  },
  {
    id: 4,
    title: "Premium Luxury Ankara Corporate Set",
    price: "₦35,000",
    priceUSD: "$22",
    category: "Fashion & Lifestyle",
    description:
      "Hand-crafted Ankara corporate blazer and trouser set. Available in sizes S-3XL. Custom tailoring available. Perfect for corporate meetings, events, and official functions.",
    sellerName: "AfroStyle Couture",
    sellerWhatsapp: "2348123456789",
    imageUrl: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600",
    views: 391,
    clicks: 67,
    featured: false,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 4. SEED ARTICLES
// ─────────────────────────────────────────────────────────────────────────────
const SEED_ARTICLES = [
  {
    id: 1,
    title: "Understanding Hypertension: A Silent Threat Every Nigerian Should Know",
    category: "Health & Medicine",
    authorName: "Dr. Amina Bello",
    authorCredential: "MBBS, MPH — Cardiologist, Lagos University Teaching Hospital",
    authorRole: "verified-doctor",
    readTime: "8 min",
    date: "Nov 5, 2024",
    coverImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
    content: `Hypertension, commonly known as high blood pressure, is one of the most dangerous yet underdiagnosed conditions affecting Nigerians today. It occurs when the force of blood pushing against the walls of your arteries is consistently too high — typically defined as a reading of 140/90 mmHg or above. What makes hypertension particularly treacherous is that it rarely announces itself. Most people feel perfectly fine for years while the condition silently damages their heart, kidneys, eyes, and blood vessels. This is why cardiologists and public health experts refer to it as "the silent killer." By the time symptoms appear — if they appear at all — serious organ damage may already have occurred.

The burden of hypertension in Nigeria is alarming and growing. Studies published in the Nigerian Journal of Cardiology estimate that over 38% of Nigerian adults are hypertensive, yet fewer than a third of them are aware of their condition. The situation is compounded by limited access to routine health screenings, particularly in rural areas, and a cultural tendency to seek medical care only when symptoms become severe. With a population of over 200 million, this means tens of millions of Nigerians are walking around with dangerously high blood pressure and have no idea. The economic and social cost — in strokes, heart attacks, and kidney failure — is enormous.

Several risk factors are especially prevalent in the Nigerian context. High dietary salt intake is a major culprit; many traditional Nigerian dishes are prepared with significant amounts of sodium, and processed foods are increasingly popular in urban areas. Chronic stress — from economic pressures, long commutes, job insecurity, and family responsibilities — is another powerful driver that is often dismissed as simply "life." Genetics also plays a significant role; if one or both of your parents had hypertension, your risk is substantially higher. Other contributors include physical inactivity, obesity, excessive alcohol consumption, and tobacco use. For women, the risk increases significantly after menopause and during pregnancy (a condition called preeclampsia).

What symptoms should you watch for? The frustrating truth is that most people experience no symptoms at all. Some may notice occasional headaches, particularly at the back of the head in the mornings, mild dizziness, nosebleeds, or a feeling of pressure behind the eyes. However, these symptoms are non-specific and easily attributed to other causes. The only reliable way to know your blood pressure is to measure it. Adults should have their blood pressure checked at least once every year, and more frequently if they have risk factors. Home blood pressure monitors are now widely available and affordable in Nigeria, making regular self-monitoring a realistic option for many families.

The good news is that hypertension is both preventable and manageable. Lifestyle changes can make a tremendous difference: reducing salt intake, eating more fruits, vegetables, and whole grains, exercising for at least 30 minutes most days of the week, maintaining a healthy weight, limiting alcohol, and quitting smoking. Managing stress through prayer, leisure activities, adequate sleep, and social support is equally important. For many patients, however, lifestyle changes alone are not enough, and antihypertensive medications prescribed by a doctor become necessary. These medications are safe, effective, and widely available. If you are over 35, have a family history of hypertension, or have not had your blood pressure checked recently, please see a healthcare provider. Prevention and early detection save lives — do not wait for a symptom that may never come.`,
    comments: [
      {
        id: 1,
        name: "Fatima Aliyu",
        text: "Thank you Doctor. My father was recently diagnosed with high blood pressure and we didn't know the symptoms until it was bad. How often should he check his BP at home?",
        date: "Nov 6, 2024",
        authorReply:
          "Thank you for reaching out, Fatima. For someone newly diagnosed, checking BP twice daily — morning before meals and evening — is ideal. Keep a log to share with his doctor. Also ensure he's taking his medications consistently and reducing his salt and stress levels. I'm glad this article could help.",
      },
      {
        id: 2,
        name: "Emeka Okonkwo",
        text: "This is very educating! I had no idea hypertension can run in families. My mother and grandmother both had it. Should I start monitoring mine even though I'm only 32?",
        date: "Nov 7, 2024",
        authorReply: null,
      },
      {
        id: 3,
        name: "Hauwa Musa",
        text: "Please doctor, what are the best local foods for people managing hypertension? We need practical Nigerian-based advice, not just foreign recommendations.",
        date: "Nov 8, 2024",
        authorReply: null,
      },
    ],
  },
  {
    id: 2,
    title: "How AI is Revolutionizing Healthcare in West Africa",
    category: "Tech & Innovation",
    authorName: "Mr. Chukwudi Okafor",
    authorCredential: "MSc Computer Science — HealthTech Writer & Digital Health Consultant",
    authorRole: "tech-contributor",
    readTime: "6 min",
    date: "Nov 3, 2024",
    coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
    content: `Artificial intelligence is no longer a futuristic concept confined to Silicon Valley labs — it is actively reshaping healthcare delivery across West Africa. From AI-powered diagnostic tools that can detect tuberculosis and malaria from chest X-rays and microscopy slides, to intelligent chatbots triaging patients before they even set foot in a clinic, the technology is arriving faster than many anticipated. In a region historically underserved by healthcare infrastructure, AI is not merely an upgrade; it is in many cases filling critical gaps left by a severe shortage of specialists, inadequate diagnostic equipment, and overcrowded public hospitals. Nigeria, Ghana, and Senegal are emerging as the frontrunners of this transformation, attracting both local innovation and significant international investment.

Nigeria's digital health startup ecosystem has matured remarkably over the past five years. Companies like MDaaS Global are deploying affordable, tech-enabled diagnostic centres in underserved communities, while platforms like Helium Health are digitizing hospital records and automating administrative workflows for over 500 health facilities. Ubenwa, a startup that uses AI to analyze infant cry patterns to detect birth asphyxia, has garnered global recognition for its life-saving potential in low-resource settings. Meanwhile, telemedicine platforms like Reliance Health and DrugStoc are making specialist consultations and pharmaceutical supply chains more efficient and accessible to ordinary Nigerians. The common thread through all of these innovations is the use of data — patient data, diagnostic data, population data — to make smarter, faster, and more equitable healthcare decisions.

Diagnostic AI represents one of the most exciting frontiers. Tools trained on vast datasets of medical images can now identify diabetic retinopathy from fundus photographs, flag abnormal ECG readings, and screen cervical cancer slides with accuracy comparable to experienced pathologists. For Nigeria, where the ratio of specialists to patients remains critically low — the country has fewer than 500 cardiologists for 200 million people — AI-assisted diagnostics could be the difference between life and death for patients in secondary and tertiary care facilities. Several pilot programs are underway in Nigerian teaching hospitals to evaluate the feasibility of deploying such tools at scale, with early results showing promising accuracy rates even on locally captured, variable-quality images.

The road ahead, however, is not without obstacles. Epileptic power supply and unreliable internet connectivity remain significant barriers to deploying cloud-based AI tools, particularly in rural areas. Data privacy legislation in Nigeria is still evolving, raising questions about how patient data used to train AI models is governed and protected. There is also the challenge of algorithmic bias: many commercial AI tools were trained predominantly on data from Western populations, and their performance can degrade when applied to African patients with different genetic backgrounds, disease presentations, and clinical environments. Local developers and researchers are working hard to build African-first datasets, but this takes time, funding, and coordinated policy support.

Despite these challenges, the outlook for AI in West African healthcare is genuinely optimistic. The continent's young, mobile-first population, combined with a growing pool of tech-savvy health professionals, creates an ideal environment for digital health innovation. Governments are increasingly recognizing the potential: Nigeria's National Health Management Information System and Ghana's digital health strategy both include provisions for AI and data-driven health interventions. As infrastructure improves, regulations mature, and local datasets grow, AI-powered healthcare in West Africa will not just catch up with global standards — it may well pioneer solutions uniquely suited to the realities and needs of the Global South.`,
    comments: [
      {
        id: 4,
        name: "Dr. Yemi Coker",
        text: "Excellent overview! I'd add that AI is especially promising for radiology interpretation where we have a severe shortage of specialists in Nigeria. What specific tools are you aware of that are already deployed here?",
        date: "Nov 4, 2024",
        authorReply:
          "Great point, Dr. Coker! Tools like Zipline for drone-delivered medical supplies, Ubenwa for infant cry diagnostics, and MDaaS Global for diagnostic centres are already making waves in Nigeria and Ghana. The next frontier is AI-assisted radiology, as you rightly noted.",
      },
      {
        id: 5,
        name: "Blessing Nwosu",
        text: "Very insightful article. As a health informatics student, this gives me a lot of hope for our field. Are there internship or career opportunities in this space in Nigeria?",
        date: "Nov 5, 2024",
        authorReply: null,
      },
      {
        id: 6,
        name: "Ibrahim Suleiman",
        text: "I work in a rural clinic in Kano. Internet connectivity is our biggest barrier. How do these AI solutions work in low-connectivity environments?",
        date: "Nov 6, 2024",
        authorReply: null,
      },
    ],
  },
  {
    id: 3,
    title: "5 Digital Tools Every Small Business Owner in Nigeria Needs in 2025",
    category: "Business Growth",
    authorName: "Mrs. Kemi Adeyemi",
    authorCredential: "MBA, CIPM — Digital Business Strategist & SME Growth Advisor",
    authorRole: "tech-contributor",
    readTime: "5 min",
    date: "Oct 30, 2024",
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    content: `Running a small business in Nigeria in 2025 without digital tools is like trying to sell in a market no one can find. The good news is that the most powerful tools available today are either free or surprisingly affordable, and they can dramatically increase your visibility, credibility, and sales — even if you have little to no technical experience. Whether you sell clothing from your sitting room, run a small pharmacy, offer professional services, or manage a food business, these five tools can transform the way you operate and compete. The gap between a business that thrives and one that struggles is increasingly a digital one, and you have the power to close it.

The first tool every Nigerian small business owner must embrace is WhatsApp Business. With over 90 million active WhatsApp users in Nigeria, your customers are already on the platform — the question is whether your business has a professional presence there. WhatsApp Business allows you to create a business profile with your address, hours, and catalogue; set automated greeting and away messages so customers are never ignored; and use quick replies to handle common questions instantly. For businesses that receive orders and inquiries through the platform, the Catalog feature is a game-changer, letting customers browse your products and prices without asking. It is free, easy to set up, and immediately makes your business feel more professional.

For payments, Paystack and Flutterwave have become the backbone of Nigerian digital commerce. If you are still collecting bank transfers manually — waiting for screenshots, confirming alerts, and chasing customers for payments — you are losing time and money. Both platforms allow you to generate payment links that your customers can pay via card, bank transfer, or USSD, with instant settlement to your account and automatic receipts. They also integrate seamlessly with websites and social media shops. Flutterwave's store feature even lets you set up a simple online shop within minutes, with no technical knowledge needed. The transaction fees are minimal compared to the efficiency and trust they build with customers.

Canva has democratized graphic design for small business owners across Africa. Creating professional flyers, social media posts, price lists, menus, and business cards used to require hiring a designer or investing in expensive software. Now, with Canva's free plan, you have access to thousands of business templates, fonts, and graphics that you can customize with your brand colours and logo in minutes. Nigerian business owners are using Canva to maintain consistent, attractive social media feeds that compete with much larger brands. The premium plan — available for a few thousand naira per month — unlocks even more templates, a background remover, and a brand kit that keeps all your designs consistent.

Google My Business (now called Google Business Profile) is one of the most underutilized free tools in Nigeria, yet it delivers one of the highest returns on investment of anything on this list. When someone in your city searches for "pharmacy near me," "tailor in Abuja," or "best restaurant in Port Harcourt," businesses with an active Google Business Profile appear prominently in the results — often before any website. Setting up your profile takes about 20 minutes and is completely free. You can add photos, your hours, services, and prices, and customers can leave reviews that build your reputation over time. If your business serves a local community, this single tool can deliver more new customers than months of paid advertising.

Finally, and perhaps most importantly for long-term credibility and growth, every serious Nigerian business in 2025 needs a professional website. Social media accounts come and go, algorithms change, and platforms can restrict your access — but your website is a digital asset you own. A well-designed website by a trusted agency like AQMedTech Innovations signals to customers, partners, and investors that your business is serious and established. It becomes the central hub where you showcase your products or services, collect leads, publish testimonials, and tell your brand story. Combined with the other four tools — WhatsApp Business for communication, Paystack/Flutterwave for payments, Canva for content, and Google Business Profile for local discovery — a professional website completes a digital foundation that can support your business growth for years to come.`,
    comments: [
      {
        id: 7,
        name: "Tunde Fashola",
        text: "This is exactly what I needed! I run a small pharmacy and I haven't set up any of these tools yet. Which would you recommend starting with first?",
        date: "Oct 31, 2024",
        authorReply:
          "Start with WhatsApp Business and Google My Business — they're free and have the fastest impact on a local business. Once you're comfortable, add Paystack for payments, then invest in a professional website. Feel free to contact AQMedTech for a consultation!",
      },
      {
        id: 8,
        name: "Ngozi Eze",
        text: "Canva has been a game-changer for my boutique! I went from paying a graphic designer ₦20,000 per design to creating professional content myself. Great article!",
        date: "Nov 1, 2024",
        authorReply: null,
      },
      {
        id: 9,
        name: "Musa Tanko",
        text: "I didn't know Google My Business was free. I'm setting mine up right now. Thank you for this practical advice.",
        date: "Nov 2, 2024",
        authorReply: null,
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 5. LOCALSTORAGE HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function loadData(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save data:', e);
  }
}

function initializeData() {
  if (!localStorage.getItem('aqmt_initialized')) {
    saveData('aqmt_ads', SEED_ADS);
    saveData('aqmt_articles', SEED_ARTICLES);
    saveData('aqmt_portfolio', PORTFOLIO_PROJECTS);
    localStorage.setItem('aqmt_initialized', 'true');
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. WINDOW EXPORT (global access for non-module scripts)
// ─────────────────────────────────────────────────────────────────────────────
window.aqmtData = {
  SITE_CONFIG,
  PORTFOLIO_PROJECTS,
  SEED_ADS,
  SEED_ARTICLES,
  loadData,
  saveData,
  initializeData,
};
