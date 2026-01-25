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
    }
    
];
