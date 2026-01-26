import { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
    {
        "id": "inter-cafe-social-platform",
        "title": "Inter Cafe - Full-Stack Social Media Platform",
        "client": "Personal Project",
        "category": "Social Media Platform",
        "description": "A comprehensive social media platform with real-time messaging, community features, integrated marketplace, and advanced admin analytics. Built with modern web technologies for scalability and performance.",
        "challenge": "Building a feature-rich social media platform that combines content sharing, real-time communication, e-commerce, and administrative capabilities. The challenge was to create a seamless user experience while maintaining high performance, implementing secure payment processing, and providing comprehensive analytics for platform management.",
        "solution": "We developed a full-stack application using Next.js 15 with React 19 for the frontend, providing server-side rendering, static site generation, and optimized performance. The backend leverages Django REST Framework with Django Channels for WebSocket support, enabling real-time chat functionality. We integrated Stripe for subscription management and payment processing, implemented a comprehensive admin dashboard with analytics, and built a marketplace feature within the platform. The architecture supports infinite scrolling, content moderation, community management, and interest-based categorization.",
        "results": [
          "Real-time messaging with WebSocket support",
          "Comprehensive admin analytics dashboard with multiple chart visualizations",
          "Integrated marketplace with Stripe payment processing",
          "Subscription-based monetization model with post credits system",
          "SEO-optimized with SSG/ISR for improved search visibility",
          "Content moderation system with post approval workflow",
          "Community-based content organization",
          "Mobile-responsive design with modern UI/UX"
        ],
        "technologies": [
          "Next.js 15",
          "React 19",
          "TypeScript",
          "Django REST Framework",
          "Django Channels",
          "Redis",
          "PostgreSQL",
          "Stripe",
          "Tailwind CSS",
          "Redux Toolkit",
          "React Query",
          "Chart.js",
          "WebSocket",
          "JWT Authentication"
        ],
        "image": "/images/inter-cafe.png",
        "featured": true,
        // "keyFeatures": [
        //   "User Authentication & Social Login (Google, Apple)",
        //   "Posts Management (Text, Media, Links) with Rich Text Editor",
        //   "Real-time Chat with WebSocket",
        //   "Community/Group Features",
        //   "Marketplace with Product Listings",
        //   "Subscription Plans & Payment Processing",
        //   "Admin Dashboard with Analytics",
        //   "Content Moderation & Reporting",
        //   "Interest Categories & Tagging",
        //   "Follow/Unfollow System",
        //   "Notifications",
        //   "Infinite Scroll & Pagination",
        //   "SEO Optimization (SSG/ISR)"
        // ],
        "testimonial": {
          "quote": "A well-architected social media platform that demonstrates modern full-stack development practices with real-time features, payment integration, and comprehensive admin capabilities.",
          "author": "Development Team",
          "role": "Full-Stack Developers"
        }
      },
      
      {
        id: 'fliday-esim',
        title: 'Fliday – Global eSIM Marketplace',
        client: 'Fliday',
        category: 'Travel / Telecom',
        description: 'A fully responsive, production-grade eSIM marketplace that enables travelers to browse, purchase, and instantly activate global eSIM plans without physical SIM cards.',
        challenge: 'International travelers faced high roaming charges, limited connectivity options, and the inconvenience of purchasing physical SIM cards in each country.',
        solution: 'We built a full-stack eSIM retail platform using Next.js and Node.js with instant digital delivery, secure authentication, integrated payments, and real-time order tracking. The platform is optimized for SEO, performance, and scalability.',
        results: [
            'Instant global eSIM activation',
            'Seamless digital checkout experience',
            'High-performance SEO-optimized pages',
            'Scalable architecture for worldwide users'
        ],
        technologies: [
            'Next.js',
            'React',
            'Node.js',
            'Express.js',
            'MongoDB'
        ],
        image: '/images/fliday.png',
        featured: true,
        "testimonial": {
  "quote": "A well-architected global eSIM marketplace showcasing modern full-stack development with secure payments, real-time eSIM delivery, and a robust admin management system.",
  "author": "Fliday Team",
  "role": "Product & Engineering"
}

    }
    ,
    {
        "id": "super-media-bros-auction",
        "title": "Super Media Bros - Premium Auction Platform",
        "client": "Super Media Bros",
        "category": "E-Commerce / Auction Platform",
        "description": "A full-featured online auction platform specializing in media collectibles, toys, games, and pop culture items. Features real-time bidding, seller consignment management, automated invoicing, and comprehensive admin dashboard.",
        "challenge": "The client needed a modern auction platform to compete with established auction houses. Requirements included real-time bidding updates, complex proxy bidding logic, seller settlement management, automated invoice generation, and a comprehensive admin CMS. The platform needed to handle high concurrency during live auctions while maintaining data integrity and providing seamless user experience across buyer, seller, and admin roles.",
        "solution": "Built a scalable Next.js platform with real-time capabilities using Pusher for live bid updates, implemented sophisticated proxy bidding system with automatic bid increments, created comprehensive seller consignment workflow with document verification, developed automated settlement calculation system for seller payouts, integrated Stripe for secure payment processing, and built a full-featured admin CMS for auction management, user administration, and financial operations.",
        "results": [
          "Real-time bid updates with <500ms latency",
          "Automated invoice generation and payment processing",
          "Complete seller settlement management system",
          "Comprehensive admin dashboard with 10+ management modules",
          "Multi-role user system (Buyers, Sellers, Admins)",
          "Automated email notifications for bids, invoices, and payments"
        ],
        "technologies": [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Prisma ORM",
          "PostgreSQL",
          "Stripe",
          "Pusher (Real-time)",
          "Cloudinary",
          "Redis/Upstash",
          "QStash",
          "Nodemailer",
          "PDFKit",
          "Tailwind CSS",
          "React Query",
          "Zod",
          "Vercel"
        ],
        // "keyFeatures": [
        //   "Real-time bidding with live updates",
        //   "Proxy bidding system with automatic increments",
        //   "Seller consignment management",
        //   "Automated invoice generation",
        //   "Settlement calculation and payout tracking",
        //   "Admin CMS dashboard",
        //   "Email notification system",
        //   "PDF document generation",
        //   "User authentication & verification",
        //   "Newsletter management",
        //   "Payment processing with Stripe",
        //   "Image upload and management",
        //   "Rate limiting and queue management"
        // ],
        "image": "/images/auction.jpeg",
        "featured": true,
        "testimonial": {
          "quote": "The platform exceeded our expectations. The real-time bidding system works flawlessly, and the admin dashboard makes managing auctions effortless. Our sellers love the automated settlement process.",
          "author": "Project Owner",
          "role": "Super Media Bros"
        }
      },
      {
        id: 'i-need-hypno',
        title: 'I Need Hypno – Doctor’s Video Appointment Generator',
        client: 'I Need Hypno',
        category: 'Healthcare / Mental Wellness',
        description: 'A professional hypnosis platform designed to help individuals achieve personal transformation through guided subconscious therapy, online consultations, and audio-based self-improvement programs.',
        challenge: 'Clients seeking hypnosis and mental wellness solutions needed a secure, user-friendly platform for booking private sessions, accessing guided content, and maintaining long-term engagement without in-person visits.',
        solution: 'Developed an intuitive web platform that enables 1-on-1 Zoom hypnosis session bookings, subscription-based audio programs with auto-renewal, and secure user interactions. The system prioritizes ease of use, data protection, and seamless scheduling.',
        results: [
            'Streamlined online booking for private hypnosis sessions',
            'Subscription-based revenue model with auto-renewal',
            'Improved user engagement through audio programs',
            'Secure and privacy-compliant user experience'
        ],
        technologies: [
            'React',
            'Next.js',
            'Node.js',
            'Payment Gateway',
            'Zoom Integration'
        ],
        image: '/images/hypno.png',
        featured: false,
        testimonial: {
            quote: 'A thoughtfully designed platform that combines secure video appointments, subscription-based content, and an intuitive user experience for mental wellness services.',
            author: 'I Need Hypno Team',
            role: 'Product & Wellness Specialists'
        }
    },
    
    {
        id: 'marblestone-property-management',
        title: 'Marblestone Real Estate – Property Management Platform',
        client: 'Marblestone Real Estate LLC',
        category: 'Real Estate / Property Management',
        description: 'A full-featured property management platform built with the MERN stack that enables property owners and tenants to efficiently manage residential and commercial properties through a single digital system.',
        challenge: 'Property managers needed a centralized solution to handle property listings, tenant communication, maintenance requests, and financial tracking without relying on fragmented tools.',
        solution: 'Developed a scalable MERN-based application with a dynamic React front end, secure Node.js and Express backend, and MongoDB for managing properties, leases, payments, and maintenance workflows.',
        results: [
            'Centralized management for residential and commercial properties',
            'Improved tenant–landlord communication',
            'Efficient maintenance request tracking',
            'Secure and scalable data handling'
        ],
        technologies: [
            'MongoDB',
            'Express.js',
            'React',
            'Node.js'
        ],
        image: '/images/marbelstone.png',
        featured: false,
        testimonial: {
            quote: 'A robust and scalable property management solution that streamlines operations for property owners while delivering a smooth and intuitive experience for tenants.',
            author: 'Marblestone Team',
            role: 'Property Management'
        }
    },
    
    {
        id: '44pro-custom-ecommerce',
        title: '44pro – Custom Product E-commerce Platform',
        client: '44pro',
        category: 'E-commerce',
        description: 'A customizable e-commerce platform that allows users to personalize products before purchase, featuring secure authentication, seamless checkout, and responsive design.',
        challenge: 'Standard e-commerce platforms lacked flexible product personalization and secure yet simple user authentication while maintaining a smooth purchasing experience.',
        solution: 'Built a MERN stack e-commerce application with a real-time product customization interface, OTP-based email authentication, Stripe payment integration, and a responsive user-friendly design.',
        results: [
            'Enhanced customer engagement through product personalization',
            'Secure email-based OTP authentication',
            'Smooth and reliable checkout with Stripe payments',
            'Improved order transparency with order history tracking'
        ],
        technologies: [
            'MongoDB',
            'Express.js',
            'React',
            'Node.js',
            'Stripe'
        ],
        image: '/images/44pro.png',
        featured: false,
        testimonial: {
            quote: 'A modern and flexible e-commerce solution that combines product customization, secure authentication, and smooth payment processing into a seamless shopping experience.',
            author: '44pro Team',
            role: 'E-commerce Product'
        }
    },
    {
      id: 'myperfecthire-recruiting-platform',
      title: 'MyPerfectHire – Executive Search & Recruiting Platform',
      client: 'MyPerfectHire.com',
      category: 'Recruiting / Talent Acquisition',
      description: 'A flat-fee executive search and recruiting platform designed to help companies hire top-tier talent without traditional recruiter markups, focusing on proactive headhunting and long-term placement success.',
      challenge: 'Traditional recruiting firms often rely on percentage-based commissions, generic job board candidates, and internal quotas, leading to higher costs and longer hiring cycles.',
      solution: 'Developed a modern, conversion-focused recruiting platform with a clean UI, clear value proposition, and optimized user experience to communicate trust, transparency, and hiring efficiency.',
      results: [
          '50–70% cost savings compared to traditional recruiters',
          'Clear and transparent flat-fee hiring model',
          'Improved lead conversion through optimized UX',
          'Professional, credibility-driven design'
      ],
      technologies: [
          'React.js',
          'Next.js',
          'Tailwind CSS',
          'Redux'
      ],
      image: '/images/perfect.png',
      featured: false,
      testimonial: {
          quote: 'A strategic recruiting platform that combines modern UI, clear messaging, and a strong value proposition to help companies hire top talent efficiently.',
          author: 'MyPerfectHire Team',
          role: 'Talent Acquisition'
      }
  },{
    id: 'fashion-ecommerce-store',
    title: 'Full Stack Fashion E-commerce Store',
    client: 'Fashion Retail Platform',
    category: 'E-commerce / Fashion',
    description: 'A modern full-stack fashion e-commerce platform that delivers a seamless and stylish online shopping experience with dynamic product browsing and secure checkout.',
    challenge: 'Fashion retailers needed a scalable online store that could handle product listings, user authentication, payments, and order management while maintaining a smooth and responsive user experience.',
    solution: 'Built a MERN stack e-commerce application featuring a dynamic React front end, secure Node.js and Express backend, and MongoDB for managing products, users, and transactions. The platform supports filtering, detailed product views, and reliable order processing.',
    results: [
        'Smooth and responsive shopping experience',
        'Secure authentication and payment processing',
        'Efficient order and transaction management',
        'Scalable architecture for future growth'
    ],
    technologies: [
        'MongoDB',
        'Express.js',
        'React',
        'Node.js'
    ],
    image: '/images/fasion.png',
    featured: false,
    testimonial: {
        quote: 'A well-built fashion e-commerce platform that combines modern design, secure transactions, and a scalable full-stack architecture.',
        author: 'Project Review',
        role: 'E-commerce Development'
    }
},
{
  id: 'eco-agriculture-platform',
  title: 'Eco-Friendly Agriculture & Organic Farming Platform',
  client: 'Organic Agriculture Business',
  category: 'Agriculture / Sustainability',
  description: 'A modern, high-performance web platform for an eco-friendly agriculture business focused on organic farming supplies, sustainable crop management consulting, and educational content.',
  challenge: 'The client needed a fast, SEO-friendly, and mobile-optimized website to showcase services, educate farmers on sustainable practices, and increase inquiries—while ensuring smooth performance even on mobile devices used in the field.',
  solution: 'Developed a full-stack application using Next.js App Router with server-side rendering for performance and SEO, Node.js and Express for backend logic, PostgreSQL for structured content storage, and Framer Motion for engaging yet subtle animations.',
  results: [
      'Significantly higher user engagement after launch',
      'Increased lead generation through optimized contact flows',
      'Improved visibility via SEO-optimized pages',
      'Smooth mobile experience for on-field access'
  ],
  technologies: [
      'Next.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Framer Motion'
  ],
  image: '/images/eco.png',
  featured: false,
  testimonial: {
      quote: 'A beautifully designed and high-performing platform that clearly communicates our mission for sustainable farming while driving real engagement and inquiries.',
      author: 'Client Team',
      role: 'Sustainable Agriculture'
  }
},
{
  id: 'clemson-printing-lab-scheduler',
  title: 'Clemson University Printing Lab Scheduler',
  client: 'Clemson University',
  category: 'Education / Resource Management',
  description: 'An online scheduling system designed to streamline access to Clemson University’s printing labs, enabling students, faculty, and staff to reserve time slots efficiently and reduce wait times.',
  challenge: 'The university needed a centralized, easy-to-use platform to manage high-demand printing resources while ensuring fair access, real-time availability, and minimal administrative overhead.',
  solution: 'Developed a web-based scheduling system with secure university authentication, real-time slot availability, automated notifications, and an admin control panel to manage lab usage and enforce policies.',
  results: [
      'Reduced wait times through advance reservations',
      'Improved utilization of printing lab resources',
      'Simplified administration with centralized controls',
      'Enhanced user experience across all devices'
  ],
  technologies: [
      'Web-Based Scheduling System',
      'User Authentication',
      'Real-Time Data Management',
      'Notification Services'
  ],
  image: '/images/lab.png',
  featured: false,
  testimonial: {
      quote: 'A reliable and efficient scheduling solution that significantly improved access to our printing labs while reducing administrative complexity.',
      author: 'Clemson University Staff',
      role: 'Printing Lab Administration'
  }
},
{
  id: 'mern-pos-system',
  title: 'Retail Point of Sale (POS) System',
  client: 'Retail Business',
  category: 'Retail / POS',
  description: 'A robust, full-featured Point of Sale (POS) system designed to streamline sales, inventory, and customer management for retail businesses using a modern MERN stack architecture.',
  challenge: 'The client needed to replace manual sales tracking and fragmented inventory management with a secure, real-time system that supports multiple user roles and daily operational reporting.',
  solution: 'Developed a MERN stack POS application with a responsive React frontend, role-based authentication, real-time inventory tracking, sales reporting, barcode scanning, and receipt printing. The backend uses RESTful APIs with Express and Node.js, deployed using Docker and MongoDB Atlas.',
  results: [
      'Automated daily sales and inventory operations',
      'Reduced manual errors and improved data accuracy',
      'Faster checkout with barcode scanning and receipt printing',
      'Improved business efficiency through real-time reporting'
  ],
  technologies: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Redux',
      'Material-UI',
      'Docker',
      'MongoDB Atlas'
  ],
  image: '/images/retail.png',
  featured: false,
  testimonial: {
      quote: 'A powerful and reliable POS system that significantly improved our daily operations, inventory accuracy, and sales reporting.',
      author: 'Client Team',
      role: 'Retail Operations'
  }
},
{
  id: 'blox-fruit-hub',
  title: 'Blox Fruit Hub – Gaming E-Commerce Platform',
  client: 'Blox Fruit Hub',
  category: 'Gaming / E-commerce',
  description: 'A modern and dynamic gaming e-commerce website designed for selling Roblox in-game items, focusing on fast purchasing, instant delivery, and a highly engaging user experience.',
  challenge: 'Gamers expect instant access to digital items, fast checkout, and a visually immersive interface while maintaining secure and reliable payment processing.',
  solution: 'Designed and developed a dark-themed e-commerce platform with animated visuals, an optimized product grid, and a streamlined checkout flow to ensure fast purchases and immediate digital delivery.',
  results: [
      'Faster purchase flow for in-game items',
      'Improved user engagement with gaming-focused UI',
      'Secure and reliable payment experience',
      'Enhanced conversion through optimized product layout'
  ],
  technologies: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Payment Gateway'
  ],
  image: '/images/blox.png',
  featured: false,
  testimonial: {
      quote: 'A visually striking and performance-focused gaming store that delivers a smooth purchasing experience for digital items.',
      author: 'Blox Fruit Hub Team',
      role: 'Gaming E-commerce'
  }
},
{
  id: 'powerup-device-rental',
  title: 'PowerUp – Smart Device Rental Website',
  client: 'PowerUp',
  category: 'IoT / Rental / Smart Devices',
  description: 'A clean and modern website designed for PowerUp, a smart power bank rental network based in Cracow, focused on convenience, sustainability, and fast charging solutions.',
  challenge: 'The brand needed a mobile-first website that clearly communicates its value proposition, drives app downloads, supports station partners, and builds user trust through a polished and intuitive interface.',
  solution: 'Designed a sleek, responsive website with strong visual hierarchy, clear app download CTAs, interactive FAQs, and a dedicated partner section. The design emphasizes usability, eco-friendly messaging, and brand consistency.',
  results: [
      'Improved user clarity around rental process',
      'Increased app download engagement',
      'Enhanced brand trust through clean UI',
      'Mobile-first experience optimized for on-the-go users'
  ],
  technologies: [
      'UI/UX Design',
      'Responsive Web Design',
      'Interactive Components',
      'Modern Web Animations'
  ],
  image: '/images/powerup.png',
  featured: false,
  testimonial: {
      quote: 'A thoughtfully designed website that clearly communicates our mission while making it easy for users and partners to engage with the PowerUp network.',
      author: 'PowerUp Team',
      role: 'Smart Mobility'
  }
},
{
  id: 'deephash-cloud-mining',
  title: 'DeepHash – AI-Powered Cloud Mining Platform',
  client: 'DeepHash',
  category: 'Blockchain / Cloud Mining',
  description: 'A professional AI-powered cloud mining website designed to showcase smart hashpower solutions and eco-friendly global mining farms with a focus on performance, clarity, and trust.',
  challenge: 'Cloud mining platforms must clearly communicate complex concepts like hashpower plans, earnings projections, and sustainability while maintaining user trust and high performance.',
  solution: 'Designed and developed a modern, responsive platform featuring interactive mining plan selection, live earnings tracking, and a clean UI/UX optimized for clarity, speed, and scalability.',
  results: [
      'Improved user understanding of mining plans',
      'Higher engagement through interactive plan selection',
      'Clear presentation of live earnings data',
      'Optimized performance across all devices'
  ],
  technologies: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'Data Visualization'
  ],
  image: '/images/deephash.png',
  featured: false,
  testimonial: {
      quote: 'A sleek and professional platform that clearly communicates our AI-driven mining solutions while delivering an engaging and high-performance user experience.',
      author: 'DeepHash Team',
      role: 'Blockchain & AI Mining'
  }
},
{
  id: 'airnexus-b2b-landing-page',
  title: 'High-Converting B2B Tech Landing Page',
  client: 'AirNexus',
  category: 'B2B / AI / UI-UX Design',
  description: 'A high-converting B2B landing page designed to establish AirNexus as a premium AI-driven technology brand while simplifying complex solutions and driving app downloads and inquiries.',
  challenge: 'AirNexus needed a landing page that could clearly communicate advanced AI technology in a way that felt accessible, futuristic, and trustworthy to B2B decision-makers.',
  solution: 'Designed a futuristic dark-mode UI/UX with electric purple and blue accents, glowing 3D abstract visuals, and a clear content hierarchy. Strong headlines, icon-driven sections, and strategically placed CTAs were used to maximize clarity and conversions.',
  results: [
      'Clear brand positioning in the AI and B2B space',
      'Improved user understanding of complex offerings',
      'Conversion-focused layout with strong CTA visibility',
      'Premium, modern visual identity ready for development'
  ],
  technologies: [
      'Figma',
      'UI/UX Design',
      'Wireframing',
      'High-Fidelity Prototyping'
  ],
  image: '/images/airnexus.png',
  featured: false,
  testimonial: {
      quote: 'A visually striking and conversion-focused landing page that clearly communicates our innovation and positions AirNexus as a premium AI brand.',
      author: 'AirNexus Team',
      role: 'Product & Marketing'
  }
},{
  id: 'restaurant-menu-platform',
  title: 'Restaurant & Menu Platform – Full Stack Build',
  client: 'Food Service Client',
  category: 'Restaurant / Hospitality',
  description: 'A sophisticated full-stack restaurant and menu platform designed to showcase the menu dynamically, facilitate reservations, and enhance customer engagement with a premium online presence.',
  challenge: 'The client needed a visually rich, responsive website that could dynamically display menus, handle reservations, and provide an engaging online experience without compromising performance.',
  solution: 'Developed a full-stack application using React/Next.js for a fast, responsive front end, Node.js/Express for backend API routes, and PostgreSQL/MongoDB for managing menus, specials, and reservations. Implemented a dynamic CMS for easy menu updates and secure reservation forms with back-end validation.',
  results: [
      'Dynamic menu system with easy content updates',
      'Secure, validated reservation forms',
      'High-performance, responsive website design',
      'Visually engaging dark-theme layout highlighting food photography'
  ],
  technologies: [
      'React.js / Next.js',
      'Node.js',
      'Express.js',
      'PostgreSQL / MongoDB',
      'Full-Stack Development',
      'CMS Integration'
  ],
  image: '/images/restaurant.png',
  featured: false,
  testimonial: {
      quote: 'A visually stunning and fully functional platform that elevated our online presence while simplifying menu management and reservations.',
      author: 'Client Team',
      role: 'Restaurant Operations'
  }
},
{
  id: 'corporate-agency-website',
  title: 'Corporate Agency Website – Full Stack Development',
  client: 'Corporate Agency',
  category: 'B2B / Agency / Corporate',
  description: 'A high-performance, secure full-stack corporate website developed to establish a premium brand identity, showcase client successes, and improve lead conversion for high-value B2B audiences.',
  challenge: 'The client needed to transform a static website into a dynamic digital hub that clearly communicates credibility, displays team expertise, and generates leads efficiently.',
  solution: 'Built a modern full-stack platform using React/Next.js for SEO-friendly, responsive front-end architecture with Tailwind CSS. Node.js/Express handled secure backend operations, and PostgreSQL/MongoDB managed persistent data. Integrated a dynamic CMS for content updates and secure lead generation forms with CRM integration.',
  results: [
      'Enhanced brand credibility and professional market positioning',
      'Improved lead generation through validated, secure forms',
      'Dynamic CMS enabling instant content updates',
      'Top-tier performance and responsive design across devices'
  ],
  technologies: [
      'React.js / Next.js',
      'Node.js',
      'Express.js',
      'Tailwind CSS',
      'PostgreSQL / MongoDB',
      'CMS Integration'
  ],
  image: '/images/corporate.png',
  featured: false,
  testimonial: {
      quote: 'A modern, fast, and secure platform that transformed our digital presence and significantly improved our lead conversion and client engagement.',
      author: 'Client Team',
      role: 'Corporate Marketing & Operations'
  }
},
{
  id: 'dynamic-restaurant-website',
  title: 'Dynamic Restaurant Website & Menu Design',
  client: 'Restaurant Client',
  category: 'Restaurant / Hospitality / UI-UX',
  description: 'A visually engaging restaurant website designed to showcase culinary offerings, highlight promotions, and enhance customer interaction with an intuitive and inviting online experience.',
  challenge: 'The client needed a platform that clearly presents menu categories, promotes top-selling dishes, and engages users through content and offers, while maintaining an appealing and professional design.',
  solution: 'Developed a dynamic website with a vibrant hero section, organized menu categories, promotional highlights, and engaging content such as blogs and special offers. The design uses a warm color palette, intuitive navigation, and professional aesthetics to enhance user experience and interaction.',
  results: [
      'Improved visibility of menu offerings and promotions',
      'Increased customer engagement through blogs and special offers',
      'Enhanced online presence with professional and appealing design',
      'User-friendly navigation across all devices'
  ],
  technologies: [
      'React.js / Next.js',
      'UI/UX Design',
      'Responsive Web Design',
      'Interactive Content Sections'
  ],
  image: '/images/dresturant.png',
  featured: false,
  testimonial: {
      quote: 'A beautifully designed restaurant platform that effectively showcases our menu and engages our customers online.',
      author: 'Client Team',
      role: 'Restaurant Management'
  }
},
{
  id: 'modern-real-estate-website',
  title: 'Modern Real Estate Website Design',
  client: 'Real Estate Client',
  category: 'Real Estate / UI-UX',
  description: 'A contemporary and highly functional real estate website designed to simplify the home-buying journey, connect buyers with ideal properties, and provide a premium online experience.',
  challenge: 'The client needed a platform that showcases properties effectively, guides users through an intuitive search and discovery process, and builds trust with professional and engaging content.',
  solution: 'Designed a sleek, modern interface with captivating hero sections, curated property highlights, and user-centric search. Integrated dynamic content areas for recent articles and market insights, while emphasizing high-quality visuals and a seamless browsing experience.',
  results: [
      'Enhanced property discovery with intuitive browsing and search',
      'Improved user engagement through dynamic content and market insights',
      'Built credibility with trust-focused sections highlighting expertise',
      'Delivered a premium, visually appealing interface across all devices'
  ],
  technologies: [
      'React.js / Next.js',
      'Tailwind CSS',
      'UI/UX Design',
      'Responsive Web Design',
      'Dynamic Content Integration'
  ],
  image: '/images/realstate.png',
  featured: false,
  testimonial: {
      quote: 'An elegant and highly functional real estate platform that simplifies property discovery and enhances our online presence.',
      author: 'Client Team',
      role: 'Real Estate Marketing'
  }
},
{
  id: 'dynamic-car-dealer-website',
  title: 'Dynamic Car Dealer Website',
  client: 'Car Dealership Client',
  category: 'Automotive / UI-UX / E-commerce',
  description: 'A sleek and robust car dealer website designed to enhance the online vehicle shopping experience, streamline operations, and engage customers from browsing to purchase.',
  challenge: 'The client needed a platform that simplifies vehicle discovery, highlights key inventory, builds trust through transparent pricing and testimonials, and provides interactive tools to assist buyers in decision-making.',
  solution: 'Developed a dynamic website featuring intuitive vehicle browsing (by type or gallery), prominent inventory highlights with key specs and pricing, trust-building sections including financing offers and customer testimonials, interactive tools like a loan calculator, and subscription features for ongoing engagement.',
  results: [
      'Simplified vehicle discovery and tailored browsing experiences',
      'Enhanced customer trust through transparent pricing and testimonials',
      'Increased engagement with interactive tools like loan calculators',
      'Modern, visually appealing design with smooth navigation'
  ],
  technologies: [
      'React.js / Next.js',
      'Tailwind CSS',
      'UI/UX Design',
      'Responsive Web Design',
      'Interactive Components'
  ],
  image: '/images/carrent.png',
  featured: false,
  testimonial: {
      quote: 'A visually appealing and highly functional platform that improved our online vehicle shopping experience while building trust with customers.',
      author: 'Client Team',
      role: 'Automotive Sales & Marketing'
  }
},
{
  id: 'hatildoo-landing-page',
  title: 'Elegant Home Living Landing Experience',
  client: 'HATILDOO',
  category: 'E-commerce / Furniture / UI-UX',
  description: 'A minimalist and high-impact landing page for HATILDOO, an online furniture store, designed to guide users smoothly from interest to purchase with elegance and clarity.',
  challenge: 'The client wanted a visually striking yet clean landing page that highlights best-selling products, new arrivals, and curated collections while driving conversions through clear calls-to-action.',
  solution: 'Designed a clean and sophisticated landing page featuring a striking hero section, clear promotional messaging, curated product highlights including best-selling items and new arrivals, collection spotlights, and trust-building footer elements. Focused on visual hierarchy and intuitive navigation to enhance user experience and boost conversions.',
  results: [
      'Increased product discovery and visibility of key items',
      'Enhanced user engagement with curated collections',
      'Improved conversion through clear promotional messaging',
      'Professional, calm, and persuasive UI for a premium feel'
  ],
  technologies: [
      'React.js / Next.js',
      'Tailwind CSS',
      'UI/UX Design',
      'Responsive Web Design',
      'Visual Merchandising'
  ],
  image: '/images/hatildo.png',
  featured: false,
  testimonial: {
      quote: 'A beautifully designed landing page that effectively showcases our furniture collections and converts visitors into confident buyers.',
      author: 'HATILDOO Team',
      role: 'E-commerce & Marketing'
  }
},
{
  "id": "lso-bar-exam-platform",
  "title": "LSO Bar Exam - Professional Exam Preparation Platform",
  "client": "LSO Bar Exam Team",
  "category": "E-Learning / Exam Preparation Platform",
  "description": "A comprehensive online exam preparation platform for the Law Society of Ontario (LSO) Bar Exam. Features secure OTP-based authentication, paid and free exam practice sets, real-time exam attempt tracking, automated payment processing, and comprehensive admin dashboard. The platform provides Barrister and Solicitor exam preparation with multiple question sets, detailed explanations, and progress monitoring.",
  "challenge": "The client needed a secure, scalable exam preparation platform that could handle multiple exam types (Barrister/Solicitor), manage paid and free exam access, track user attempts and progress, process payments securely, and provide comprehensive admin oversight. Key requirements included secure authentication without traditional passwords, exam attempt limitations, cart persistence across sessions, automated email notifications for orders and payments, and a robust admin CMS for managing users, orders, and exam content.",
  "solution": "Built a modern Next.js platform with OTP-based authentication using Redis for secure session management, implemented comprehensive exam management system supporting Barrister and Solicitor exams with Set A and Set B variations, created intelligent cart system with backend persistence that syncs across devices and sessions, integrated Stripe for secure payment processing with webhook handling, developed automated email notification system for order confirmations and payment alerts, implemented exam attempt tracking with attempt limits, built comprehensive admin dashboard for user management, order processing, and exam administration, and created responsive UI with mobile-first design for seamless exam taking experience.",
  "results": [
    "Secure OTP-based authentication with Redis session management",
    "Automated payment processing with Stripe integration",
    "Cart persistence across logout/login sessions",
    "Comprehensive email notification system (order confirmations, admin alerts, payment failures)",
    "Exam attempt tracking with automatic limitation enforcement",
    "Full-featured admin dashboard with user, order, and exam management",
    "Multi-exam type support (Barrister/Solicitor, Set A/B, Paid/Free)",
    "Real-time exam progress tracking and results storage"
  ],
  "technologies": [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Prisma ORM",
    "PostgreSQL",
    "Stripe",
    "Redis/Upstash",
    "Nodemailer",
    "Redux Toolkit",
    "Tailwind CSS",
    "Zod",
    "bcryptjs",
    "React Query",
    "Vercel"
  ],

  "image": "/images/lsobar.png",
  "featured": true,
  "testimonial": {
    "quote": "The platform provides a seamless exam preparation experience. The OTP authentication is secure and user-friendly, and the cart persistence across sessions works perfectly. The admin dashboard makes managing users and orders effortless.",
    "author": "LSO Bar Exam Team",
    "role": "Project Owner"
  }
} 
];
