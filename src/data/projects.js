export const projects = [
  {
    id: 1,
    title: "Crypto Portfolio Tracker",
    description: "iOS application for tracking a cryptocurrency portfolio with CoinGecko API integration. Users can add transactions, view total asset value, profit/loss, and configure price alerts. Data is stored locally with SwiftData and synchronized when fetching updated prices from the network.",
    technologies: ["SwiftData", "URLSession"],
    features: [
      "MVVM (SwiftUI + Combine)",
      "SwiftData/AppStorage",
      "URLSession",
      "@Query и Environment(.modelContext)",
      "Caching coins and prices to reduce API load",
      "Price alerts"
    ],
    githubUrl: "https://github.com/teasec4/crypto-assets",
    imageUrl: "/images/project1.png",
    galleryImages: [
      "/images/p1.png",
      "/images/p2.png",
      "/images/p3.png",
      "/images/p4.png"
    ]
  },
  {
    id: 2,
    title: "iOS application for exploring and managing a list of countries with capitals, powered by the RestCountries API",
    description: "TUsers can fetch the list of countries, search by name or capital, sort results (A→Z or Z→A), and mark countries as favorites for quick access in a dedicated tab. All data is persisted locally using SwiftData, so once fetched it stays available offline",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI", "React DnD"],
    features: [
      "URLSession",
      "SwiftData persistence layer",
      "Combine/Swift Concurrency integration",
      "Favorites management",
      "Two sort orders/ Searchable lists"
    ],
    githubUrl: "https://github.com/teasec4/URLSessionSwiftDataPractice",
    imageUrl: "/images/project2.png",
    galleryImages: [
      "/images/p21.png",
      "/images/p22.png",
      "/images/p23.png",
      "/images/p24.png"
    ]
  },
  {
    id: 3,
    title: "Water & Steps Tracker",
    description: "An iOS application for tracking daily water intake and steps, with smart reminders, calendar statistics, and progress summaries. Users can set custom daily goals, log water intake with an animated glass, and monitor weekly achievements in a clean dashboard",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS3", "Axios"],
    features: [
      "SwiftUI",
      "SwiftData / AppStorage",
      "NotificationCenter / UserNotifications",
      "Combine"
    ],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    imageUrl: "/images/project3.png",
    galleryImages: [
      "/images/p31.png",
      "/images/p32.png",
      "/images/p33.png",
      "/images/p34.png"
    ]
  }
];
