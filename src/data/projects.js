export const projects = [
  {
    id: 1,
    title: "Crypto Portfolio Tracker",
    description:
      "iOS application for tracking a cryptocurrency portfolio with CoinGecko API integration. Users can view total asset value. Login/Signup with Supabase authentication.",
    technologies: ["SwiftData", "URLSession", "Supabase"],
    features: [
      "MVVM (SwiftUI + Combine)",
      "Async/Await",
      "URLSession/Alamofire",
      "Supabase authentication",
    ],
    githubUrl: "https://github.com/teasec4/swift-crypto-app",
    imageUrl: `${import.meta.env.BASE_URL}images/img11.png`,
    iosVersion: "16",
    isMac: false,
    galleryImages: [
      `${import.meta.env.BASE_URL}images/img12.png`,
      `${import.meta.env.BASE_URL}images/img13.png`,
      `${import.meta.env.BASE_URL}images/img14.png`,
      
    ],
  },
  {
    id: 11,
    title: "Crypto Portfolio Tracker (Flutter)",
    description:
      "iOS application for tracking a cryptocurrency portfolio with CoinGecko API integration. Users can view total asset value. Login/Signup with Supabase authentication.",
    technologies: ["Dart", "Flutter", "Riverpod", "GetIt", "GoRouter", "Async/Await", "Hive", " Supabase"],
    features: [
      "Dart",
      "Flutter",
      "Clean Architecture",
      "Riverpod",
      "GetIt",
      "GoRouter",
      "Hive",
      "Supabase authentication",
      "Async/Await",
    ],
    githubUrl: "https://github.com/teasec4/flutter-crypto-app",
    imageUrl: `${import.meta.env.BASE_URL}images/project5.png`,
    iosVersion: "16",
    isMac: true,
    galleryImages: [
      `${import.meta.env.BASE_URL}images/p51.png`,
      `${import.meta.env.BASE_URL}images/p52.png`,
      `${import.meta.env.BASE_URL}images/p53.png`,
      `${import.meta.env.BASE_URL}images/p54.png`,
      
    ],
  },
  {
    id: 2,
    title: "JiZhuangApp finance tracking application",
    description:
      `Users can create wallets, assign custom colors, add transactions, and categorize expenses with emojis. The app provides a clear dashboard with wallet balances and a detailed view of transactions grouped by month.`,
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS3", "Axios"],
    features: [
      "MVVM Architecture (SwiftUI + Combine)",
      "SwiftData",
      "Onboarding flow",
      "NavigationStack",
      "Customizable wallet colors",
      "Lightweight and minimal design"
    ],
    githubUrl: "https://github.com/teasec4/JiZhuangAppV1",
    imageUrl: `${import.meta.env.BASE_URL}images/project3.png`,
    iosVersion: "17",
    isMac: false,
    galleryImages: [
      `${import.meta.env.BASE_URL}images/p31.png`,
      `${import.meta.env.BASE_URL}images/p32.png`,
      `${import.meta.env.BASE_URL}images/p33.png`,
      `${import.meta.env.BASE_URL}images/p34.png`,
      `${import.meta.env.BASE_URL}images/p35.png`,
      `${import.meta.env.BASE_URL}images/p36.png`,
      `${import.meta.env.BASE_URL}images/p37.png`,
    ],
  },
  {
    id: 3,
    title:
      "Managing a list of countries with capitals (for practice URLSession SwiftData)",
    description:
      "Users can fetch the list of countries, search by name or capital, sort results (A→Z or Z→A), and mark countries as favorites for quick access in a dedicated tab. All data is persisted locally using SwiftData, so once fetched it stays available offline",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI", "React DnD"],
    features: [
      "URLSession",
      "SwiftData persistence layer",
      "Combine/Swift Concurrency integration",
      "Favorites management",
      "Two sort orders/ Searchable lists",
    ],
    githubUrl: "https://github.com/teasec4/URLSessionSwiftDataPractice",
    imageUrl: `${import.meta.env.BASE_URL}images/project2.png`,
    iosVersion: "16",
    isMac: false,
    galleryImages: [
      `${import.meta.env.BASE_URL}images/p21.png`,
      `${import.meta.env.BASE_URL}images/p22.png`,
      `${import.meta.env.BASE_URL}images/p23.png`,
      `${import.meta.env.BASE_URL}images/p24.png`,
    ],
  },

  {
    id: 4,
    title: "macOS Task Manager Pro",
    description:
      `A lightweight macOS application for managing personal timers and tracking daily activity.
      Users can create multiple timers, save sessions, and view statistics through a mini-calendar heatmap.
      Designed with SwiftUI for a clean and minimal user experience.` ,
    technologies: ["SwiftUI", "AppKit", "CloudKit", "Core Data"],
    features: [
      "Compact mode and full list view",
      "Save sessions with history tracking",
      "Mini calendar heatmap for daily stats",
      "Context menu for duplicate / delete actions",
      "Modern SwiftUI interface",
    ],
    githubUrl: "https://github.com/teasec4/MacTimerManager",
    imageUrl: `${import.meta.env.BASE_URL}images/project4.png`,
    iosVersion: "14",
    isMac: true,
    galleryImages: [
      `${import.meta.env.BASE_URL}images/p41.png`,
      `${import.meta.env.BASE_URL}images/p42.png`,
      `${import.meta.env.BASE_URL}images/p43.png`,
      `${import.meta.env.BASE_URL}images/p44.png`,
      `${import.meta.env.BASE_URL}images/p45.png`
    ],
  },
];