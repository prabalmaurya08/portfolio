import { Experience, Education, Project, Skill, PublishedApp } from '../types';

export const personalInfo = {
  name: 'Prabal Maurya',
  displayName: 'Prabal',
  title: 'Android & Software Developer',
  tagline: 'Flutter  • Kotlin • Jetpack Compose • Firebase • Google Play Publisher',
  bio: "Hi, I'm Prabal Maurya — a dedicated Android & Software Developer specializing in Flutter (Dart), Java Backend, Kotlin, and Clean Architecture. Creator and publisher of KnowFlakes and SubCare, currently live on the Google Play Store.",
  developerStory: "With a B.Tech in Computer Science and Engineering (2021–2025) and extensive software development experience across multiple tech teams, I build production applications that balance technical excellence with intuitive user experience. I develop and publish mobile applications on the Google Play Store under my developer handle, Prabal Studios.",
  playStoreHandle: 'Prabal Studios',
  playStoreNote: 'Prabal Studios is my official Google Play developer account used for publishing and distributing mobile applications including KnowFlakes and SubCare.',
  profileImage: '/profile.png',
  email: 'prabal1513@gmail.com',
  phone: '+91 8437024071',
  phoneDisplay: '+91 8437024071',
  location: 'Lucknow, Uttar Pradesh, India',
  resumeUrl: 'https://drive.google.com/file/d/19rPVpX9fV9kpQ4NqKf2rQBW0S0iz-wwf/view?usp=sharing',
  socials: {
    github: 'https://github.com/prabalmaurya08',
    linkedin: 'https://www.linkedin.com/in/prabal-maurya-113232244/',
    whatsapp: 'https://wa.me/918437024071',
    email: 'mailto:prabal1513@gmail.com',
    playStore: 'https://play.google.com/store/apps/developer?id=Prabal+Studios',
    knowflakes: 'https://play.google.com/store/apps/details?id=com.prabalstudios.knowflakes',
    subcare: 'https://play.google.com/store/apps/details?id=com.prabalstudios.subcare'
  },
  stats: [
    { label: 'Years Experience', value: '1+' },
    { label: 'Companies Worked', value: '2+' },
    { label: 'Live on Play Store', value: '2 Apps (KnowFlakes & SubCare)' },
    { label: 'Projects Shipped', value: '12+' }
  ]
};

export const publishedAppKnowFlakes: PublishedApp = {
  id: 'knowflakes',
  title: 'KnowFlakes',
  tagline: 'Cross-Platform Learning & Interactive Quiz App',
  description: 'KnowFlakes is a cross-platform learning and quiz app that I built and launched, and it is currently live on the Google Play Store. It delivers interactive daily lessons, flashcards, head-to-head knowledge battles, and global leaderboards powered by the Gemini API and Firebase Cloud backends.',
  platform: 'Google Play Store',
  developerAccount: 'Prabal Studios',
  technologies: ['Flutter', 'Firebase', 'BLoC', 'Google Cloud', 'Gemini API', 'Firebase Functions', 'Cloud Messaging (FCM)'],
  features: [
    'Built and launched a cross-platform learning and quiz app featuring daily lessons, flashcards, battles, and leaderboards to make learning engaging and social.',
    'Integrated Gemini API for personalized content and quiz generation.',
    'Automated backend workflows using Firebase Functions.',
    'Implemented push notifications to improve user engagement.',
    'Used BLoC state management to build a scalable architecture with seamless UI/UX and reliable performance through testing.'
  ],
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.prabalstudios.knowflakes',
  packageName: 'com.prabalstudios.knowflakes',
  badge: 'Live on Google Play'
};

export const publishedAppSubCare: PublishedApp = {
  id: 'subcare',
  title: 'SubCare',
  tagline: 'Smart Subscription Management & Recurring Expense Tracker',
  description: 'SubCare is a smart subscription management application engineered with a Flutter mobile frontend and a high-performance Java backend. It empowers users to monitor recurring subscriptions, analyze monthly expenditures, and receive automated billing reminder alerts before renewal charges occur.',
  platform: 'Google Play Store',
  developerAccount: 'Prabal Studios',
  technologies: ['Flutter', 'Dart', 'Java Backend', 'RESTful APIs', 'Clean Architecture', 'Notification Engine', 'Expense Analytics'],
  features: [
    'Centralized recurring subscription tracking for streaming, software, bills, and memberships.',
    'Automated upcoming renewal billing notifications preventing unwanted recurring charges.',
    'Engineered with a robust Java backend powering secure API services and subscription catalog data.',
    'Cross-platform Flutter frontend with fluid Material 3 UI and responsive monthly/yearly expense analytics.',
    'Offline-first synchronization with resilient local caching and cloud sync.'
  ],
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.prabalstudios.subcare',
  packageName: 'com.prabalstudios.subcare',
  badge: 'Live on Google Play'
};

export const publishedApps: PublishedApp[] = [
  publishedAppSubCare,
  publishedAppKnowFlakes
];

export const skillsData: Skill[] = [
  {
    name: 'Flutter & Dart',
    category: 'Mobile',
    icon: 'https://img.icons8.com/color/48/000000/flutter.png',
    level: 'Advanced',
    description: 'Cross-platform app architecture, BLoC state management, custom animations, production Play Store apps'
  },
  {
    name: 'Kotlin',
    category: 'Mobile',
    icon: 'https://img.icons8.com/color/48/000000/kotlin.png',
    level: 'Advanced',
    description: 'Coroutines, StateFlow, functional patterns, asynchronous concurrency'
  },
  {
    name: 'Jetpack Compose',
    category: 'Mobile',
    icon: 'https://img.icons8.com/fluency/48/000000/android-os.png',
    level: 'Advanced',
    description: 'Declarative UI, State Hoisting, Material 3 theming, custom modifiers'
  },
  {
    name: 'BLoC Pattern',
    category: 'Mobile',
    icon: 'https://img.icons8.com/color/48/000000/structural.png',
    level: 'Advanced',
    description: 'Predictable state transitions, event-driven streams, unit-tested business logic'
  },
  {
    name: 'Firebase & Functions',
    category: 'Backend & Cloud',
    icon: 'https://img.icons8.com/color/48/000000/firebase.png',
    level: 'Advanced',
    description: 'Cloud Firestore, Auth, Firebase Functions, FCM Push Notifications, Security Rules'
  },
  {
    name: 'Gemini API & AI',
    category: 'Backend & Cloud',
    icon: 'https://img.icons8.com/color/48/000000/google-cloud.png',
    level: 'Proficient',
    description: 'Personalized AI quiz generation, prompt engineering, automated content flows'
  },
  {
    name: 'Retrofit & RESTful APIs',
    category: 'Backend & Cloud',
    icon: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-api-cloud-computing-flatart-icons-outline-flatarticons.png',
    level: 'Advanced',
    description: 'OkHttp interceptors, JSON serialization, token management'
  },
  {
    name: 'Hilt (Dependency Injection)',
    category: 'Mobile',
    icon: 'https://img.icons8.com/fluency/48/000000/layers.png',
    level: 'Proficient',
    description: 'Dagger-Hilt container scoping, constructor injection, singleton management'
  },
  {
    name: 'Java Backend & APIs',
    category: 'Backend & Cloud',
    icon: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png',
    level: 'Advanced',
    description: 'Server-side API architecture, subscription logic, JSON payloads, secure endpoint design'
  },
  {
    name: 'Android SDK & Java',
    category: 'Languages',
    icon: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png',
    level: 'Advanced',
    description: 'OOP, Android Services, Broadcast Receivers, XML layouts & ViewBinding'
  },
  {
    name: 'Room & SQLite Database',
    category: 'Backend & Cloud',
    icon: 'https://img.icons8.com/color/48/000000/database.png',
    level: 'Advanced',
    description: 'Local caching, DAO patterns, migrations, Flow-based reactive observables'
  },
  {
    name: 'Git & GitHub',
    category: 'Web & Tools',
    icon: 'https://img.icons8.com/glyph-neue/48/ffffff/github.png',
    level: 'Advanced',
    description: 'Feature branching, pull requests, releases tagging, CI/CD workflows'
  },
  {
    name: 'Google Play Console',
    category: 'Web & Tools',
    icon: 'https://img.icons8.com/color/48/000000/google-play.png',
    level: 'Advanced',
    description: 'AAB bundle signing, ProGuard/R8 optimization, testing tracks, live release management'
  }
];

export const showcaseProjects: Project[] = [
  {
    id: 'subcare-showcase',
    title: 'SubCare (Live on Google Play)',
    category: 'Flutter',
    tagline: 'Flutter • Java Backend • REST APIs • Subscription Management',
    description: 'A smart subscription management and expense tracking mobile application published on Google Play. Features recurring subscription monitoring, automated renewal billing notifications, Java backend REST API synchronization, and monthly/yearly expense analytics.',
    technologies: ['Flutter', 'Dart', 'Java Backend', 'RESTful APIs', 'Clean Architecture', 'Local Storage', 'Notification Engine'],
    features: [
      'Centralized subscription monitoring for streaming, software, bills, and recurring memberships',
      'Automated upcoming renewal billing notifications to prevent unwanted recurring charges',
      'High-performance Java backend powering secure REST APIs and subscription catalog sync',
      'Expense projection analytics with monthly and yearly cost visualization',
      'Published on Google Play Store under Prabal Studios'
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.prabalstudios.subcare',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.prabalstudios.subcare',
    architecture: 'Flutter Client + Java Backend REST Service',
    badge: 'Live on Google Play'
  },
  {
    id: 'knowflakes-showcase',
    title: 'KnowFlakes (Live on Google Play)',
    category: 'Flutter',
    tagline: 'Flutter • Firebase • BLoC • Google Cloud • Gemini API',
    description: 'Cross-platform learning and quiz app built and published by Prabal Maurya on Google Play under Prabal Studios. Features daily lessons, flashcards, battles, leaderboards, automated Firebase Functions, and AI quiz generation via the Gemini API.',
    technologies: ['Flutter', 'Firebase', 'BLoC', 'Google Cloud', 'Gemini API', 'Firebase Functions', 'FCM'],
    features: [
      'Daily lessons, interactive flashcards, battles, and real-time leaderboards',
      'Integrated Gemini API for personalized content and quiz generation',
      'Automated backend workflows using Firebase Functions',
      'Implemented push notifications to improve user engagement',
      'Used BLoC state management to build a scalable architecture with seamless UI/UX'
    ],
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.prabalstudios.knowflakes',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.prabalstudios.knowflakes',
    architecture: 'Flutter BLoC + Firebase Serverless + Gemini AI',
    badge: 'Live on Google Play'
  },
  {
    id: 'cleanuser-manager',
    title: 'CleanUser Manager',
    category: 'Kotlin & Compose',
    tagline: 'Modern Android User Management with Jetpack Compose & Clean Architecture',
    description: 'A production-grade Android application showcasing modern Android architecture using Kotlin, Jetpack Compose, MVVM, Clean Architecture (Data, Domain, Presentation), Hilt (DI), Coroutines, Retrofit, and StateFlow.',
    technologies: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Clean Architecture', 'Hilt DI', 'Coroutines', 'Retrofit', 'StateFlow'],
    features: [
      'Unidirectional Data Flow (UDF) powered by Jetpack Compose & StateFlow',
      'Dependency injection configured with Dagger-Hilt across scopes',
      'Clean domain layer containing isolated use cases and repositories',
      'Asynchronous network fetching with Retrofit and error envelope wrappers'
    ],
    githubUrl: 'https://github.com/prabalmaurya08/UserInfo',
    liveUrl: 'https://github.com/prabalmaurya08/UserInfo',
    architecture: 'Clean Architecture (MVVM + Hilt + StateFlow)',
    badge: 'Jetpack Compose'
  },
  {
    id: 'deal-track',
    title: 'Deal Track',
    category: 'Kotlin & Compose',
    tagline: 'B2B Multi-Vendor E-Commerce Android App',
    description: 'A robust B2B multi-vendor marketplace mobile application engineered using MVVM Clean Architecture. Features multi-role product catalogs, vendor management, quotation negotiation, and order tracking.',
    technologies: ['Kotlin', 'Android SDK', 'MVVM', 'Clean Architecture', 'REST APIs', 'Coroutines', 'Room DB'],
    features: [
      'B2B vendor catalogue management with multi-tier bulk pricing',
      'Offline-first synchronization caching with Room Database',
      'Secure token authorization and custom OkHttp network interceptors',
      'Complex filter and search queries with debounced reactive flows'
    ],
    githubUrl: 'https://github.com/prabalmaurya08/DealTrack',
    liveUrl: 'https://github.com/prabalmaurya08/DealTrack',
    architecture: 'MVVM Clean Architecture with Room & Coroutines',
    badge: 'B2B E-Commerce'
  },
  {
    id: 'trip-mate',
    title: 'Trip Mate',
    category: 'Flutter',
    tagline: 'Cross-Platform Travel Planner & Itinerary Manager',
    description: 'A feature-rich travel companion app built with Flutter and Dart, utilizing the Bloc pattern and Clean Architecture for predictable state management, itinerary tracking, and real-time expense splitting.',
    technologies: ['Flutter', 'Dart', 'Bloc Pattern', 'Clean Architecture', 'REST APIs', 'Shared Preferences'],
    features: [
      'Interactive travel itinerary builder with day-by-day scheduling',
      'Predictable state transitions managed via flutter_bloc and events',
      'Real-time currency converter and shared travel budget calculator',
      'Offline storage with automatic cloud synchronization on reconnection'
    ],
    githubUrl: 'https://github.com/prabalmaurya08/Trip_Mate',
    liveUrl: 'https://github.com/prabalmaurya08/Trip_Mate',
    architecture: 'Flutter Bloc + Clean Architecture',
    badge: 'Flutter & Bloc'
  },
  {
    id: 'a-connect',
    title: 'A_Connect (Alumni-Student Network)',
    category: 'Android Native',
    tagline: 'Centralized Alumni & Student Networking Portal with Admin Dashboard',
    description: 'A centralized mobile community application connecting university alumni and current students for mentorship, job referrals, event broadcasts, and direct messaging, managed via an admin portal.',
    technologies: ['Android SDK', 'Java / Kotlin', 'Firebase Firestore', 'Authentication', 'Cloud Messaging'],
    features: [
      'Admin control panel for student verification and event broadcasts',
      'Role-based alumni directory with skill and graduation-year filters',
      'Push notification alerts for campus placement drives via FCM',
      'Direct mentorship inquiry channel and structured messaging'
    ],
    githubUrl: 'https://github.com/prabalmaurya08/A_Connect',
    liveUrl: 'https://github.com/prabalmaurya08/A_Connect',
    architecture: 'Android Architecture + Firebase Realtime Backing',
    badge: 'Community Portal'
  },
  {
    id: 'recipe-app',
    title: 'Recipe App',
    category: 'Flutter',
    tagline: 'Culinary Discovery & Meal Prep Assistant with Flutter Bloc',
    description: 'A modern recipe discovery and cooking assistant application built using Flutter with Bloc state management and Clean Architecture. Includes nutritional breakdowns, search filtering, and step-by-step cooking guides.',
    technologies: ['Flutter', 'Dart', 'Bloc State Management', 'Clean Architecture', 'REST APIs', 'CachedNetworkImage'],
    features: [
      'Dietary filtering (vegan, keto, gluten-free) with instant reactive search',
      'Step-by-step interactive cooking mode with built-in kitchen timers',
      'Ingredient checklist calculator scaling recipes by serving sizes',
      'Optimized image caching and smooth staggered grid animations'
    ],
    githubUrl: 'https://github.com/prabalmaurya08/RecipeApp',
    liveUrl: 'https://github.com/prabalmaurya08/RecipeApp',
    architecture: 'Flutter Bloc + Modular Presentation',
    badge: 'Flutter UI/UX'
  },
  {
    id: 'class-flow',
    title: 'ClassFlow',
    category: 'Flutter',
    tagline: 'Centralized Academic App for Teachers, Students & Assignments',
    description: 'A centralized educational application for universities and schools streamlining daily assignment submissions, digital attendance tracking, dynamic class timetables, and urgent academic announcements.',
    technologies: ['Flutter', 'Dart', 'Firebase Firestore', 'FCM Notifications', 'PDF Viewer'],
    features: [
      'Assignment upload pipeline supporting PDF submissions and grading statuses',
      'Interactive weekly timetable with automated push notifications for lectures',
      'Attendance tracking module with visual percentage progress metrics',
      'Notice board broadcasts with instant alerts for class reschedule notices'
    ],
    githubUrl: 'https://github.com/prabalmaurya08/ClassFlow',
    liveUrl: 'https://github.com/prabalmaurya08/ClassFlow',
    architecture: 'Flutter + Firebase Realtime Architecture',
    badge: 'EdTech'
  },
  {
    id: 'dr-mitra',
    title: 'DrMitra',
    category: 'Flutter',
    tagline: 'Tele-Health Doctor & Patient Consultation Platform',
    description: 'A comprehensive healthcare application bridging doctors and patients. Features doctor appointment scheduling, telemedicine consulting queues, digital prescriptions, and payment gateway integration.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Payment Gateway Integration', 'Bloc'],
    features: [
      'Doctor discovery with specialization, consultation fees, and rating filters',
      'Real-time appointment slot booking with instant confirmation triggers',
      'Digital prescription repository with secure medical document storage',
      'Integrated payment checkout flow with instant billing invoices'
    ],
    githubUrl: 'https://github.com/prabalmaurya08/Dr_Mitra',
    liveUrl: 'https://github.com/prabalmaurya08/Dr_Mitra',
    architecture: 'Flutter Bloc + Secure Firebase Cloud',
    badge: 'HealthTech'
  },
  {
    id: 'quantum-cart',
    title: 'Quantum Cart',
    category: 'Firebase & Cloud',
    tagline: 'Full-Featured E-Commerce App with Firebase & Android Studio',
    description: 'A native Android e-commerce application built with Firebase Firestore, Firebase Authentication, and Java in Android Studio. Features complete product browsing, cart management, and order checkout flows.',
    technologies: ['Java', 'Android Studio', 'Firebase Authentication', 'Cloud Firestore', 'Firebase Storage', 'Material UI'],
    features: [
      'User authentication with email verification and session tokens',
      'Real-time Firestore product inventory management and search filters',
      'Persistent shopping cart state and automated total price calculations',
      'Live release APK published and downloadable on GitHub Releases'
    ],
    githubUrl: 'https://github.com/prabalmaurya08/e-commerce-App',
    releaseUrl: 'https://github.com/prabalmaurya08/e-commerce-App/releases/tag/app',
    liveUrl: 'https://github.com/prabalmaurya08/e-commerce-App/releases/tag/app',
    architecture: 'Native Android + Firebase Cloud Firestore',
    badge: 'APK Release Available'
  },
  {
    id: 'chatting-app',
    title: 'Realtime Chatting App',
    category: 'Firebase & Cloud',
    tagline: 'Instant Messaging Application with Firebase Realtime Database',
    description: 'A fast, real-time messaging application for Android devices built using Firebase Realtime Database, Firestore, and Java. Supports one-on-one instant chats, user presence indicators, and message timestamps.',
    technologies: ['Java', 'Android SDK', 'Firebase Realtime Database', 'Firebase Auth', 'Glide'],
    features: [
      'Instant message delivery via Firebase Realtime Database websockets',
      'Active user presence tracking (Online/Offline status)',
      'Profile customization with image uploads to Firebase Cloud Storage',
      'Downloadable release APK available on GitHub Releases'
    ],
    githubUrl: 'https://github.com/prabalmaurya08/chat-app',
    releaseUrl: 'https://github.com/prabalmaurya08/chat-app/releases/tag/chatApp',
    liveUrl: 'https://github.com/prabalmaurya08/chat-app/releases/tag/chatApp',
    architecture: 'Firebase Realtime WebSocket Pipeline',
    badge: 'APK Release Available'
  },
  {
    id: 'weather-app',
    title: 'Weatherly Forecast App',
    category: 'Android Native',
    tagline: 'Native Android Weather App with Retrofit & OpenWeather API',
    description: 'A native Android weather forecast app built using Java, XML layouts, and the OpenWeatherMap REST API. Utilizes Retrofit for asynchronous network calls and Glide for weather iconography.',
    technologies: ['Java', 'XML Layouts', 'Retrofit 2', 'Glide', 'REST API', 'JSON Parsing'],
    features: [
      'Current temperature, humidity, wind speed, and atmospheric pressure metrics',
      '5-day multi-city weather forecast with dynamic weather condition icons',
      'Location-based weather lookup and search history caching',
      'Clean asynchronous Retrofit HTTP client with error handling'
    ],
    githubUrl: 'https://github.com/prabalmaurya08/Weather_App',
    liveUrl: 'https://github.com/prabalmaurya08/Weather_App',
    architecture: 'Native Android + Retrofit REST Client',
    badge: 'REST API'
  },
  {
    id: 'quiz-app',
    title: 'Interactive Quiz Master',
    category: 'Android Native',
    tagline: 'Gamified Android Trivia & Quiz Application',
    description: 'A native Android quiz application built using Java and XML layouts. Features timed rounds, instant feedback animations, dynamic scoring algorithms, and local high-score tracking.',
    technologies: ['Java', 'XML Layouts', 'Android SDK', 'Shared Preferences', 'SoundPool'],
    features: [
      'Multi-category quiz question banks with countdown timers',
      'Immediate answer validation with custom feedback animations',
      'Local score persistence using Android SharedPreferences',
      'Adaptive screen density layouts for phones and tablets'
    ],
    githubUrl: 'https://github.com/prabalmaurya08/Quiz-App',
    liveUrl: 'https://github.com/prabalmaurya08/Quiz-App',
    architecture: 'Native Android Architecture',
    badge: 'Native UI'
  },
  {
    id: 'calculator-app',
    title: 'Android Smart Calculator',
    category: 'Android Native',
    tagline: 'Native Android Arithmetic & Scientific Calculator',
    description: 'A clean, responsive native Android calculator application built using Java and custom XML layouts. Designed with ergonomic touch grids and support for basic to intermediate scientific calculations.',
    technologies: ['Java', 'XML Layouts', 'Android SDK', 'Material Design', 'Expression Evaluation'],
    features: [
      'Expression parsing engine handling operator precedence (BODMAS)',
      'Ergonomic keypad layout with responsive haptic feedback states',
      'Real-time calculation preview and calculation history memory',
      'Lightweight and optimized with zero external heavy dependencies'
    ],
    githubUrl: 'https://github.com/prabalmaurya08/oibsip_taskno1',
    liveUrl: 'https://github.com/prabalmaurya08/oibsip_taskno1',
    architecture: 'Native Android Java',
    badge: 'Native Utility'
  }
];

export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    company: 'LogiClump Technologies Private Limited',
    role: 'Flutter Developer',
    period: 'December 2025 – Present',
    location: 'India',
    type: 'Full-time',
    description: [
      'Engineering and maintaining core features for production-grade Flutter applications with clean architecture.',
      'Integrating asynchronous REST APIs, implementing state management, and optimizing memory usage for smooth 60fps rendering.',
      'Managing build pipelines, versioning, and coordinating Google Play Store releases.'
    ],
    skills: ['Flutter', 'Dart', 'REST APIs', 'State Management', 'Mobile Architecture', 'Git']
  },
  {
    id: 'exp-2',
    company: 'SkillStride Venture Pvt Ltd',
    role: 'Flutter Developer',
    period: 'July 2025 – December 2025',
    location: 'India',
    type: 'Full-time',
    description: [
      'Developed responsive user interfaces, custom widgets, and smooth navigational flows for mobile users.',
      'Configured Firebase services including Authentication, Firestore real-time synchronization, and Cloud Messaging.',
      'Collaborated closely with designers and backend developers to deliver features ahead of project milestones.'
    ],
    skills: ['Flutter', 'Firebase', 'Mobile UI/UX', 'Cloud Functions', 'API Integration']
  },
  {
    id: 'exp-3',
    company: 'igurus Consulting LLP',
    role: 'Mobile App Developer',
    period: 'April 2023 – February 2025',
    location: 'Lucknow, India',
    type: 'Full-time',
    description: [
      'Engineered native Android components using Kotlin and Java, implementing MVVM Clean Architecture patterns.',
      'Integrated Room Database for local caching, Retrofit for REST APIs, and resolved device-specific lifecycle issues.',
      'Delivered performant mobile apps and maintained high code quality with automated unit testing.'
    ],
    skills: ['Android SDK', 'Kotlin', 'Java', 'MVVM', 'Room DB', 'Retrofit', 'JSON APIs']
  },
  {
    id: 'exp-4',
    company: 'F Salon Academy LLP',
    role: 'Mobile (Android) App Development Intern',
    period: 'July 2024 – September 2024',
    location: 'India',
    type: 'Internship',
    description: [
      'Assisted in building Android UI screens with XML and Jetpack components.',
      'Integrated Firebase Authentication and cloud backend services for student registrations.',
      'Debugged network response serialization and optimized mobile layout responsiveness.'
    ],
    skills: ['Android SDK', 'Java', 'XML', 'Firebase', 'Mobile UI']
  },
  {
    id: 'exp-5',
    company: 'Netcamp Solutions Private Limited',
    role: 'Summer Software Intern',
    period: 'June 2023 – August 2023',
    location: 'India',
    type: 'Internship',
    description: [
      'Hands-on practical training in Android Application Development, networking protocols, and database design.',
      'Built sample mobile prototypes and completed structured algorithmic assignments.'
    ],
    skills: ['Android', 'Java', 'Networking', 'SQL', 'Algorithms']
  }
];

export const educationData: Education[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Babu Banarasi Das University, Lucknow',
    period: '2021 – 2025',
    status: 'Graduated ✓',
    description: 'In-depth academic training in Data Structures & Algorithms, Object-Oriented Software Design, Operating Systems, Database Management Systems, and Mobile Application Development.'
  },
  {
    id: 'edu-2',
    degree: 'Secondary Education (Senior Secondary)',
    institution: 'CBSE Board',
    period: '2019 – 2021',
    status: 'Completed',
    description: 'Foundational coursework in Computer Science, Mathematics, Physics, and Chemistry.'
  }
];
