export interface GamingSite {
  id: string;
  name: string;
  logo: string;
  shortDescription: string;
  rating: number;
  overview: string;
  detailedOverview: string;
  pros: string[];
  cons: string[];
  websiteUrl: string;
  screenshots: string[];
  featured: boolean;
  keyFeatures: {
    title: string;
    description: string;
    icon?: string;
  }[];
  pricing: {
    model: string;
    details: string;
    value: string;
  };
  platforms: string[];
  userExperience: {
    interface: number;
    performance: number;
    customerSupport: number;
    value: number;
  };
  bestFor: string[];
  finalVerdict: string;
}

export const gamingSites: GamingSite[] = [
  {
    id: "steam",
    name: "Steam",
    logo: "/images/steam-logo.png",
    shortDescription: "The world's leading digital distribution platform for PC gaming with millions of titles.",
    rating: 4.8,
    overview: "Steam is the ultimate destination for playing, discussing, and creating games. With over 50,000 titles ranging from AAA blockbusters to indie gems, Steam offers unparalleled variety. The platform features community hubs, workshop mods, achievement systems, and regular sales that make gaming accessible to everyone.",
    detailedOverview: "Since its launch in 2003, Steam has revolutionized PC gaming distribution and become the gold standard for digital game libraries. Developed by Valve Corporation, the platform hosts an incredible catalog of over 50,000 games spanning every genre imaginable. From AAA masterpieces to experimental indie titles, Steam's curated yet open ecosystem ensures there's something for everyone. The platform goes beyond simple game distribution—it's a complete gaming ecosystem with social features, user-generated content, streaming capabilities, and one of the most robust community systems in gaming.",
    pros: [
      "Massive library with 50,000+ games",
      "Frequent sales and discounts",
      "Strong community features and forums",
      "Cloud saves and cross-platform support",
      "Extensive mod support via Workshop",
      "Family sharing options"
    ],
    cons: [
      "No refund after 2 hours of gameplay",
      "Interface can feel cluttered",
      "Customer support response times vary",
      "Regional pricing inconsistencies"
    ],
    websiteUrl: "https://store.steampowered.com",
    screenshots: [
      "/screenshots/steam-store-interface.jpg",
      "/screenshots/steam-screenshot-2.jpg",
    ],
    featured: true,
    keyFeatures: [
      {
        title: "Unmatched Game Library",
        description: "Access to over 50,000 games across all genres, from blockbuster AAA titles to hidden indie gems. New releases added daily, with something for every type of gamer."
      },
      {
        title: "Steam Workshop",
        description: "Discover and install user-created mods, maps, and content for supported games. A thriving creative community that extends the life of your favorite titles indefinitely."
      },
      {
        title: "Community Hub",
        description: "Engage with millions of players through forums, guides, screenshots, and reviews. Each game has its own dedicated community space for discussions and sharing."
      },
      {
        title: "Seasonal Sales",
        description: "Legendary sales events like Summer Sale and Winter Sale offer discounts up to 90% off. Daily deals, weekend specials, and publisher sales run year-round."
      },
      {
        title: "Steam Cloud",
        description: "Automatic cloud saves sync your progress across all your devices. Switch between your gaming PC, laptop, or Steam Deck seamlessly."
      },
      {
        title: "Big Picture Mode",
        description: "Couch-friendly interface designed for TV gaming. Full controller support with a streamlined UI perfect for living room setups."
      }
    ],
    pricing: {
      model: "Free Platform",
      details: "Free to download and use. Games priced individually by publishers, ranging from free-to-play to full-price AAA titles.",
      value: "Exceptional value with regular deep discounts and sales events throughout the year."
    },
    platforms: ["Windows", "macOS", "Linux", "Steam Deck"],
    userExperience: {
      interface: 4.5,
      performance: 4.9,
      customerSupport: 4.0,
      value: 5.0
    },
    bestFor: [
      "PC gamers seeking the largest game selection",
      "Mod enthusiasts and content creators",
      "Bargain hunters who love sales",
      "Players who value community features",
      "Steam Deck owners"
    ],
    finalVerdict: "Steam remains the undisputed king of PC gaming platforms. While competitors have emerged with exclusive titles and better revenue splits for developers, Steam's combination of massive library, robust features, and unbeatable sales make it essential for any PC gamer. The platform's maturity shows in its comprehensive feature set, though the interface could use modernization. For most gamers, Steam isn't just recommended—it's mandatory."
  },
  {
    id: "epic-games",
    name: "Epic Games Store",
    logo: "/images/epic-logo.png",
    shortDescription: "Fast-growing platform offering free games weekly and exclusive AAA titles.",
    rating: 4.5,
    overview: "Epic Games Store has rapidly become a major player in PC gaming distribution. Known for its generous free game giveaways every week and exclusive titles, Epic offers a curated selection of high-quality games. The platform is backed by the creators of Unreal Engine and Fortnite, ensuring technical excellence and developer-friendly revenue splits.",
    detailedOverview: "Launched in 2018, Epic Games Store entered the digital distribution market with aggressive tactics and a developer-first approach. The platform made waves with its industry-leading 88/12 revenue split and has since secured numerous exclusive releases. Epic's strategy of giving away premium titles for free every week has attracted millions of users, while their Mega Sales with unlimited $10 coupons have disrupted traditional pricing models. Backed by Fortnite's massive success and Unreal Engine's ubiquity in game development, Epic has the resources to challenge Steam's dominance.",
    pros: [
      "Free games every week",
      "88/12 revenue split favors developers",
      "Exclusive game releases",
      "Clean, modern interface",
      "Regular mega sales with coupons",
      "Unreal Engine integration"
    ],
    cons: [
      "Smaller library compared to competitors",
      "Fewer community features",
      "No user reviews system",
      "Limited social features"
    ],
    websiteUrl: "https://www.epicgames.com/store",
    screenshots: [
      "/screenshots/steam-store-interface.jpg",
      "/screenshots/steam-screenshot-2.jpg",
    ],
    featured: true,
    keyFeatures: [
      {
        title: "Weekly Free Games",
        description: "Every Thursday, Epic gives away premium games completely free. Past giveaways have included GTA V, Civilization VI, and other AAA titles worth hundreds of dollars."
      },
      {
        title: "Epic Exclusives",
        description: "Access to exclusive titles that launch only on Epic for a limited period. Major releases from top publishers choose Epic for their generous terms."
      },
      {
        title: "Creator Support",
        description: "Support your favorite content creators with Creator-Support-A-Creator program. A percentage of your purchases goes directly to creators you choose."
      },
      {
        title: "Mega Sales Events",
        description: "Epic Mega Sales offer unlimited $10 coupons on games over $14.99. Combined with sale discounts, these are some of the best deals in gaming."
      },
      {
        title: "Cloud Saves",
        description: "Automatic cloud save synchronization keeps your progress safe across devices. Seamlessly continue your games from any computer."
      },
      {
        title: "Streamlined Interface",
        description: "Clean, modern UI that's easy to navigate. No clutter, just your games and the store—simple and effective."
      }
    ],
    pricing: {
      model: "Free Platform",
      details: "Free launcher with curated game selection. Games priced by publishers, with regular free game giveaways.",
      value: "Outstanding value from free games alone. Users can build substantial libraries without spending anything."
    },
    platforms: ["Windows", "macOS"],
    userExperience: {
      interface: 4.8,
      performance: 4.7,
      customerSupport: 4.3,
      value: 4.9
    },
    bestFor: [
      "Budget gamers who love free games",
      "Players interested in exclusive releases",
      "Those who prefer curated selections",
      "Unreal Engine developers",
      "Deal seekers during Mega Sales"
    ],
    finalVerdict: "Epic Games Store has carved out a significant niche in just a few years through aggressive giveaways and exclusives. While it lacks Steam's community features and extensive library, the weekly free games and generous sales make it a must-have launcher for any PC gamer. The platform is still maturing, but Epic's deep pockets and commitment to the space suggest it will continue improving and competing effectively."
  },
  {
    id: "gog",
    name: "GOG.com",
    logo: "/images/gog-logo.png",
    shortDescription: "DRM-free gaming platform specializing in classic titles and indie games.",
    rating: 4.7,
    overview: "GOG (Good Old Games) stands out for its commitment to DRM-free gaming. Every game purchased on GOG is yours to keep forever, with no restrictions. The platform excels in preserving classic PC games and making them compatible with modern systems, while also offering a growing selection of new releases and indie titles.",
    detailedOverview: "Founded by CD Projekt (creators of The Witcher and Cyberpunk 2077), GOG.com launched with a mission to preserve classic PC gaming and reject restrictive DRM. Every game sold on GOG can be downloaded and kept forever as installer files—no launcher required, though the optional GOG Galaxy client offers modern conveniences. The platform has become the definitive source for classic PC games, expertly updating titles from the DOS and early Windows era to run flawlessly on modern hardware. While maintaining this retro focus, GOG has expanded to include new indie releases and select AAA titles, all maintaining their DRM-free philosophy.",
    pros: [
      "100% DRM-free games",
      "Excellent classic game preservation",
      "GOG Galaxy optional client",
      "Fair pricing with regional adjustments",
      "30-day money-back guarantee",
      "Connect all gaming platforms in one place"
    ],
    cons: [
      "Smaller selection of new AAA releases",
      "Fewer multiplayer features",
      "Updates sometimes delayed",
      "Limited streaming options"
    ],
    websiteUrl: "https://www.gog.com",
    screenshots: [
      "/screenshots/steam-store-interface.jpg",
      "/screenshots/steam-screenshot-2.jpg",
    ],
    featured: false,
    keyFeatures: [
      {
        title: "100% DRM-Free",
        description: "Own your games completely with no restrictions or online authentication. Download installers and keep them forever, even if GOG shuts down."
      },
      {
        title: "Classic Game Masters",
        description: "Expertly restored classics from gaming history, optimized for modern systems. Play legendary titles from the 80s, 90s, and 2000s without compatibility issues."
      },
      {
        title: "GOG Galaxy 2.0",
        description: "Optional unified gaming client that connects Steam, Epic, Xbox, PlayStation, and more. View all your games from every platform in one place."
      },
      {
        title: "Fair Price Package",
        description: "Regional pricing with GOG's Fair Price Package compensating for price differences. Transparent pricing policies that respect customers worldwide."
      },
      {
        title: "Money-Back Guarantee",
        description: "Full 30-day refund policy, no questions asked. GOG stands behind their games with the industry's best return policy."
      },
      {
        title: "Bonus Goodies",
        description: "Free extras with most purchases including soundtracks, wallpapers, manuals, and artbooks. Often more comprehensive than what's included on other platforms."
      }
    ],
    pricing: {
      model: "Free Platform",
      details: "No subscription required. Games sold individually with frequent sales and bundles. Competitive pricing with transparency.",
      value: "Excellent value with bonus content and true ownership. DRM-free nature adds long-term value."
    },
    platforms: ["Windows", "macOS", "Linux"],
    userExperience: {
      interface: 4.6,
      performance: 4.8,
      customerSupport: 4.9,
      value: 4.8
    },
    bestFor: [
      "Gamers who value true ownership",
      "Classic game enthusiasts",
      "DRM-free advocates",
      "Those who want to consolidate libraries",
      "Preservation-minded collectors"
    ],
    finalVerdict: "GOG.com stands alone in its principled commitment to DRM-free gaming and game preservation. While its selection of new AAA releases can't match Steam or Epic, it offers something more valuable: true ownership of your games. The platform's curation is excellent, their customer service is legendary, and GOG Galaxy 2.0 is the best unified gaming library available. For anyone who cares about long-term access to their games or loves classic titles, GOG is essential."
  },
  {
    id: "xbox-game-pass",
    name: "Xbox Game Pass",
    logo: "/images/xbox-logo.png",
    shortDescription: "Netflix of gaming with 100+ games including day-one Xbox exclusives.",
    rating: 4.9,
    overview: "Xbox Game Pass revolutionizes gaming with a subscription model that offers instant access to hundreds of high-quality games. All Xbox Game Studios titles launch on Game Pass on day one, including major franchises like Halo, Forza, and Starfield. The service includes cloud gaming, allowing you to play on various devices without downloads.",
    detailedOverview: "Xbox Game Pass represents Microsoft's bold vision for gaming's future: a Netflix-style subscription service that provides unlimited access to a rotating library of premium games. With Microsoft's acquisition of Bethesda, Activision Blizzard, and numerous other studios, Game Pass has become an incredible value proposition. Every first-party Microsoft game launches on Game Pass day one at no extra cost, meaning subscribers get instant access to major releases like Starfield, Forza Motorsport, and Call of Duty. The Game Pass Ultimate tier includes cloud gaming via Xbox Cloud Gaming, EA Play membership, and works across Xbox consoles, PC, and mobile devices. It's transforming how millions of gamers discover and play games.",
    pros: [
      "Incredible value with 100+ games",
      "Day-one Xbox exclusives",
      "Cloud gaming included",
      "Play on PC, console, and mobile",
      "EA Play included in Ultimate",
      "Frequent new additions"
    ],
    cons: [
      "Games can leave the service",
      "Requires active subscription",
      "Cloud gaming needs good internet",
      "Not all games support cloud play"
    ],
    websiteUrl: "https://www.xbox.com/game-pass",
    screenshots: [
      "/screenshots/steam-store-interface.jpg",
      "/screenshots/steam-screenshot-2.jpg",
    ],
    featured: true,
    keyFeatures: [
      {
        title: "Day One Releases",
        description: "All Microsoft first-party games launch on Game Pass immediately. Play Starfield, Forza, Halo, and more on release day at no additional cost."
      },
      {
        title: "Xbox Cloud Gaming",
        description: "Stream games instantly to phones, tablets, and browsers without downloads. Play console-quality games anywhere with decent internet."
      },
      {
        title: "Cross-Platform Play",
        description: "One subscription works on Xbox consoles, Windows PC, and mobile. Your saves sync automatically across all devices."
      },
      {
        title: "EA Play Included",
        description: "Game Pass Ultimate includes EA Play membership at no extra cost. Access EA's catalog of sports games, RPGs, and shooters."
      },
      {
        title: "Perks & Rewards",
        description: "Members get exclusive in-game content, consumables, and partner offers. Microsoft Rewards program lets you earn points toward subscription costs."
      },
      {
        title: "Massive Library",
        description: "Hundreds of games spanning every genre and era. From indie darlings to AAA blockbusters, with new games added regularly."
      }
    ],
    pricing: {
      model: "Subscription Service",
      details: "Game Pass Ultimate: $16.99/month (console, PC, cloud). PC Game Pass: $9.99/month. Console: $10.99/month.",
      value: "Exceptional value. Two full-price games per year make it worthwhile; most members play far more."
    },
    platforms: ["Xbox Series X|S", "Xbox One", "Windows PC", "iOS/Android (Cloud)", "Web Browser (Cloud)"],
    userExperience: {
      interface: 4.8,
      performance: 4.7,
      customerSupport: 4.6,
      value: 5.0
    },
    bestFor: [
      "Gamers who play multiple games monthly",
      "Those who want day-one access to Xbox exclusives",
      "Players who value game discovery",
      "Multi-platform gamers",
      "Cloud gaming enthusiasts"
    ],
    finalVerdict: "Xbox Game Pass Ultimate is the best value in gaming, period. For less than the cost of one new game, you get access to hundreds of titles including day-one releases of major franchises. The ability to play across console, PC, and cloud makes it incredibly flexible. While the rotating library means games eventually leave, the constant influx of new content keeps things fresh. If you own an Xbox or gaming PC, Game Pass isn't just recommended—it fundamentally changes how you experience gaming."
  },
  {
    id: "playstation-plus",
    name: "PlayStation Plus",
    logo: "/images/ps-logo.png",
    shortDescription: "PlayStation's premium service with hundreds of PS4 and PS5 games.",
    rating: 4.6,
    overview: "PlayStation Plus offers three tiers of gaming subscriptions, with the Extra and Premium tiers providing access to a catalog of hundreds of games. From classic PlayStation titles to the latest PS5 exclusives, the service delivers excellent value for PlayStation owners. Cloud streaming is available for Premium members.",
    detailedOverview: "PlayStation Plus evolved from a simple online multiplayer service into Sony's comprehensive answer to Xbox Game Pass. The revamped three-tier system offers options for every type of PlayStation gamer. Essential provides the basics: online multiplayer and monthly free games. Extra adds a catalog of 400+ PS4 and PS5 games. Premium includes everything plus classic games from PS1, PS2, PS3, and PSP eras, along with cloud streaming. The service showcases PlayStation's legendary exclusives like God of War, The Last of Us, Spider-Man, and Horizon, making it essential for anyone invested in the PlayStation ecosystem.",
    pros: [
      "Large library of PlayStation exclusives",
      "Three tiers for different budgets",
      "Monthly free games (Essential)",
      "Cloud streaming on Premium",
      "Classic PS1, PS2, PSP games",
      "Online multiplayer access"
    ],
    cons: [
      "Requires PlayStation console or PC",
      "Premium tier can be expensive",
      "Game catalog rotates",
      "Download sizes can be large"
    ],
    websiteUrl: "https://www.playstation.com/ps-plus",
    screenshots: [
      "/screenshots/steam-store-interface.jpg",
      "/screenshots/steam-screenshot-2.jpg",
    ],
    featured: false,
    keyFeatures: [
      {
        title: "Three-Tier System",
        description: "Choose your level: Essential for online play and monthly games, Extra for 400+ game catalog, Premium for classics and streaming."
      },
      {
        title: "PlayStation Exclusives",
        description: "Access to Sony's acclaimed first-party titles. Play award-winning games like God of War, Horizon, and The Last of Us series."
      },
      {
        title: "Monthly Games",
        description: "All tiers receive 2-3 new games monthly to add to your library permanently. Often includes recent releases and hidden gems."
      },
      {
        title: "Classics Collection",
        description: "Premium tier offers remastered classics from PS1, PS2, PS3, and PSP. Relive PlayStation history with updated features."
      },
      {
        title: "Cloud Streaming",
        description: "Premium members can stream hundreds of games without downloading. Play PS3 games that aren't available any other way."
      },
      {
        title: "Game Trials",
        description: "Try select new releases for limited time before buying. Experience the full game, not just a demo, then decide if you want to purchase."
      }
    ],
    pricing: {
      model: "Subscription Service",
      details: "Essential: $9.99/month. Extra: $14.99/month. Premium: $17.99/month. Annual plans offer significant discounts.",
      value: "Extra tier offers the best value for most players. Premium worthwhile for classic game enthusiasts."
    },
    platforms: ["PlayStation 5", "PlayStation 4", "Windows PC (streaming)"],
    userExperience: {
      interface: 4.7,
      performance: 4.6,
      customerSupport: 4.4,
      value: 4.7
    },
    bestFor: [
      "PlayStation console owners",
      "Fans of PlayStation exclusives",
      "Retro gaming enthusiasts",
      "Players who want flexible tiers",
      "Those seeking online multiplayer"
    ],
    finalVerdict: "PlayStation Plus has evolved into a compelling service that caters to different types of gamers through its tiered approach. While it's platform-locked to PlayStation, the quality of Sony's first-party exclusives makes the Extra tier particularly valuable. The Premium tier's classic games are a nice bonus but won't appeal to everyone. For PS4 and PS5 owners, Plus Essential is mandatory for online play, and upgrading to Extra provides excellent value if you play regularly."
  },
  {
    id: "nintendo-switch-online",
    name: "Nintendo Switch Online",
    logo: "/images/nintendo-logo.png",
    shortDescription: "Access to classic Nintendo games and online multiplayer for Switch.",
    rating: 4.4,
    overview: "Nintendo Switch Online provides essential online services for Nintendo Switch owners, including multiplayer functionality and cloud saves. The Expansion Pack tier adds a growing library of Nintendo 64 and Sega Genesis games, plus all DLC for select titles like Mario Kart 8 Deluxe and Animal Crossing.",
    detailedOverview: "Nintendo Switch Online represents Nintendo's entry into subscription gaming services, offering a more affordable alternative to PlayStation Plus and Xbox Game Pass. The service provides the essentials for Switch owners: online multiplayer, cloud saves, and access to a library of classic NES and SNES titles. The Expansion Pack tier, while controversial for its pricing, adds Nintendo 64 and Sega Genesis games along with DLC for popular Switch titles. True to Nintendo's family-friendly approach, the service includes robust parental controls and family plan options that make it economical for households with multiple Switch users.",
    pros: [
      "Affordable base subscription",
      "Classic NES and SNES games",
      "N64 and Genesis with Expansion Pack",
      "Cloud saves for most games",
      "Family plan available",
      "DLC included for select games"
    ],
    cons: [
      "Basic online features",
      "Limited voice chat support",
      "Expansion Pack pricey for what's offered",
      "Smaller retro game library than hoped"
    ],
    websiteUrl: "https://www.nintendo.com/switch/online",
    screenshots: [
      "/screenshots/steam-store-interface.jpg",
      "/screenshots/steam-screenshot-2.jpg",
    ],
    featured: false,
    keyFeatures: [
      {
        title: "Classic Game Libraries",
        description: "Play dozens of NES and SNES games with added online multiplayer. Expansion Pack adds N64 and Sega Genesis catalogs with classics like Ocarina of Time and Sonic."
      },
      {
        title: "Online Multiplayer",
        description: "Required service for online play in Switch games. Play Splatoon 3, Mario Kart 8, and Smash Bros. Ultimate online with friends worldwide."
      },
      {
        title: "Cloud Save Backup",
        description: "Automatic cloud saves for most games protect your progress. Switch between consoles or recover data if your Switch is lost or damaged."
      },
      {
        title: "Included DLC",
        description: "Expansion Pack includes premium DLC for Mario Kart 8 Deluxe, Animal Crossing, and Splatoon 2. Significant value if you play these titles."
      },
      {
        title: "Family Plan Value",
        description: "One family plan covers up to 8 Nintendo Accounts. Perfect for households with multiple Switch owners at a fraction of individual subscriptions."
      },
      {
        title: "Smartphone App",
        description: "Nintendo Switch Online app enables voice chat and game-specific features. Access SplatNet 2 for Splatoon stats and NookLink for Animal Crossing."
      }
    ],
    pricing: {
      model: "Subscription Service",
      details: "Individual: $3.99/month or $19.99/year. Family (8 accounts): $34.99/year. Expansion Pack: $49.99/year individual, $79.99/year family.",
      value: "Base tier is very affordable. Expansion Pack value depends heavily on interest in N64/Genesis games and included DLC."
    },
    platforms: ["Nintendo Switch", "Nintendo Switch Lite", "Nintendo Switch OLED"],
    userExperience: {
      interface: 4.5,
      performance: 4.3,
      customerSupport: 4.2,
      value: 4.4
    },
    bestFor: [
      "Nintendo Switch owners who play online",
      "Families with multiple Switch consoles",
      "Retro gaming enthusiasts",
      "Mario Kart and Animal Crossing players",
      "Budget-conscious gamers"
    ],
    finalVerdict: "Nintendo Switch Online delivers exactly what Nintendo Switch owners need at a very reasonable price. The base tier is an easy recommendation for anyone who plays online multiplayer games. The Expansion Pack is harder to recommend unless you're passionate about N64/Genesis classics or heavily invested in games with included DLC. The family plan is exceptional value for households. While the service lacks features competitors offer, its affordability and Nintendo's classic game library make it worthwhile for Switch owners."
  },
  {
    id: "humble-bundle",
    name: "Humble Bundle",
    logo: "/images/humble-logo.png",
    shortDescription: "Pay-what-you-want game bundles supporting charity with every purchase.",
    rating: 4.5,
    overview: "Humble Bundle offers an innovative approach to game purchasing with pay-what-you-want bundles and monthly subscription options. A portion of every purchase goes to charity, making your gaming purchases feel good. The Humble Choice subscription provides a curated selection of games each month at exceptional value.",
    detailedOverview: "Since 2010, Humble Bundle has pioneered the pay-what-you-want bundle model while supporting charitable causes. The platform has raised over $250 million for charity while providing gamers incredible value on curated game collections. Humble Bundle operates on multiple fronts: time-limited themed bundles with tiered pricing, the Humble Choice monthly subscription offering 8+ games, and their Humble Store with regular sales. What sets Humble apart is the ability to choose how your money is split between developers, Humble, and charity. The Humble Trove (now discontinued) demonstrated their commitment to DRM-free gaming, while their expansion into books and software bundles shows innovation beyond games.",
    pros: [
      "Support charities with purchases",
      "Incredible bundle value",
      "Humble Choice monthly subscription",
      "DRM-free games available",
      "Book and software bundles too",
      "Customize charity allocation"
    ],
    cons: [
      "Game selection can be hit or miss",
      "Limited time to claim bundles",
      "Some games are Steam keys only",
      "Choice games lock after selection"
    ],
    websiteUrl: "https://www.humblebundle.com",
    screenshots: [
      "/screenshots/steam-store-interface.jpg",
      "/screenshots/steam-screenshot-2.jpg",
    ],
    featured: false,
    keyFeatures: [
      {
        title: "Charitable Giving",
        description: "Decide how much of your purchase goes to charity. Choose from featured charities or support your own, with over $250 million raised to date."
      },
      {
        title: "Humble Choice",
        description: "Monthly subscription providing 8+ games to keep forever. Choose from curated selection including recent indie hits and occasional AAA titles."
      },
      {
        title: "Themed Bundles",
        description: "Pay-what-you-want bundles organized by theme, publisher, or genre. Unlock more games by beating price tiers with incredible value at every level."
      },
      {
        title: "DRM-Free Options",
        description: "Many bundles include DRM-free downloads alongside Steam keys. True ownership of games with no platform lock-in for supported titles."
      },
      {
        title: "Beyond Games",
        description: "Bundles for ebooks, comics, software, and audiobooks. Same great value and charitable model applied to digital content beyond gaming."
      },
      {
        title: "Custom Split Control",
        description: "Adjust how your payment is divided between creators, Humble, and charity. Full transparency and control over where your money goes."
      }
    ],
    pricing: {
      model: "Bundle & Subscription",
      details: "Humble Choice: $11.99/month. Bundles: Pay-what-you-want with typical tiers at $1, $10, and $15. Humble Store: Regular retail with discounts.",
      value: "Exceptional value across all offerings. Bundles often provide 95%+ savings while supporting charity."
    },
    platforms: ["Multi-platform (varies by game)", "Steam", "GOG", "DRM-Free"],
    userExperience: {
      interface: 4.6,
      performance: 4.7,
      customerSupport: 4.5,
      value: 4.9
    },
    bestFor: [
      "Gamers who love discovering new titles",
      "Those who want to support charity",
      "Bundle collectors and deal hunters",
      "Players building a Steam library",
      "Multi-media content consumers"
    ],
    finalVerdict: "Humble Bundle occupies a unique and valuable niche in gaming. No other platform lets you build a massive game library while supporting charitable causes and controlling exactly where your money goes. Humble Choice is excellent for game discovery, while themed bundles offer absurd value for specific genres or publishers. The quality can be inconsistent—not every bundle is a winner—but the combination of value, charity, and variety makes Humble Bundle essential for deal-conscious gamers with diverse tastes."
  },
  {
    id: "itch-io",
    name: "itch.io",
    logo: "/images/itch-logo.png",
    shortDescription: "Independent game marketplace supporting indie developers and experimental games.",
    rating: 4.6,
    overview: "itch.io is the go-to platform for indie game enthusiasts and creators. With a focus on experimental, creative, and unique gaming experiences, itch.io offers thousands of games—many free or pay-what-you-want. The platform empowers developers with generous revenue splits and complete control over pricing and distribution.",
    detailedOverview: "itch.io has become the beating heart of independent game development and experimental gaming. Unlike mainstream platforms with strict curation, itch.io embraces an open philosophy where anyone can publish anything. This has created a thriving ecosystem of over 500,000 projects spanning games, tools, comics, and game assets. The platform is famous for hosting game jams (rapid game development competitions) and providing a home for weird, wonderful, and experimental projects that wouldn't fit elsewhere. Developers can set any pricing model they want, including free, pay-what-you-want, or fixed price, and itch.io's default revenue split is an industry-leading 90/10 in favor of creators—with developers able to increase itch.io's share if they want to support the platform.",
    pros: [
      "Massive selection of indie games",
      "Many free and PWYW games",
      "Developer-friendly 90/10 split",
      "Experimental and unique titles",
      "Support for game jams",
      "DRM-free downloads"
    ],
    cons: [
      "Quality varies significantly",
      "No curation or rating system",
      "Interface can be overwhelming",
      "Limited AAA or mainstream games"
    ],
    websiteUrl: "https://itch.io",
    screenshots: [
      "/screenshots/steam-store-interface.jpg",
      "/screenshots/steam-screenshot-2.jpg",
    ],
    featured: false,
    keyFeatures: [
      {
        title: "Open Platform",
        description: "Anyone can publish without gatekeeping or approval processes. Over 500,000 projects from creators worldwide with complete creative freedom."
      },
      {
        title: "Pay-What-You-Want",
        description: "Flexible pricing models including free, PWYW, and fixed price. Support developers directly by paying more than the minimum if you love their work."
      },
      {
        title: "Game Jam Hub",
        description: "The world's largest game jam platform with thousands of events yearly. Participate in creative challenges or discover experimental games made in 48 hours."
      },
      {
        title: "Developer-First Revenue",
        description: "Industry-leading 90/10 default split favoring creators. Developers can even adjust itch.io's cut to 0% during sales or promotions."
      },
      {
        title: "No DRM Required",
        description: "All games are DRM-free by default. Download games as standalone files you can keep and play forever without platform requirements."
      },
      {
        title: "Creator Tools & Assets",
        description: "Beyond games: Find game assets, tools, soundtracks, and development resources. A complete marketplace for creators to support each other."
      }
    ],
    pricing: {
      model: "Free Platform",
      details: "Free to browse and download. Games priced by developers (many free or PWYW). Optional itch.io membership supports platform development.",
      value: "Incredible value with thousands of free games. Pay-what-you-want model lets you get great games for minimal cost."
    },
    platforms: ["Windows", "macOS", "Linux", "Android", "Web Browser"],
    userExperience: {
      interface: 4.2,
      performance: 4.6,
      customerSupport: 4.4,
      value: 4.8
    },
    bestFor: [
      "Indie game enthusiasts",
      "Game developers and creators",
      "Players seeking unique experiences",
      "Game jam participants",
      "Those who support creative freedom",
      "Experimental game fans"
    ],
    finalVerdict: "itch.io is essential for anyone interested in indie games, experimental projects, or game development. The platform's open nature means quality varies wildly—you'll find everything from masterpieces to barely playable prototypes. But that's the point: itch.io is where creativity runs wild, where developers experiment without commercial pressure, and where you can discover truly unique games that would never exist on mainstream platforms. For adventurous gamers willing to dig through rough gems, itch.io is a treasure trove. For developers, it's the most creator-friendly platform in existence."
  },
];

export const getFeaturedSites = () => gamingSites.filter(site => site.featured);
export const getSiteById = (id: string) => gamingSites.find(site => site.id === id);
