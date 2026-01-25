import { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
    {
        id: 'luxe-ecommerce',
        title: 'Luxe Fashion E-Commerce Platform',
        client: 'Luxe Fashion Inc.',
        category: 'E-Commerce',
        description: 'A premium fashion e-commerce platform with advanced filtering, AR try-on features, and seamless checkout experience.',
        challenge: 'The client needed to compete with major fashion retailers by offering a unique, personalized shopping experience. Their existing platform was slow, outdated, and had a 68% cart abandonment rate.',
        solution: 'We built a custom Next.js e-commerce platform with real-time inventory, AI-powered recommendations, and an innovative AR try-on feature. The new design focused on speed and mobile-first experience.',
        results: [
            '340% increase in mobile conversions',
            '52% reduction in cart abandonment',
            '2.1s average page load time',
            '$2.4M additional revenue in first quarter'
        ],
        technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'TensorFlow'],
        image: '/cases/luxe-hero.jpg',
        featured: true,
        testimonial: {
            quote: 'The team exceeded every expectation. Our new platform is faster, more beautiful, and most importantly, converts like never before.',
            author: 'Jennifer Walsh',
            role: 'CEO, Luxe Fashion Inc.'
        }
    },
    {
        id: 'healthtrack-saas',
        title: 'HealthTrack SaaS Dashboard',
        client: 'HealthTrack Medical',
        category: 'SaaS / Healthcare',
        description: 'A comprehensive healthcare management dashboard for clinics and hospitals with patient tracking, scheduling, and analytics.',
        challenge: 'Healthcare providers struggled with fragmented systems for patient management, scheduling, and reporting. They needed a unified, HIPAA-compliant solution that worked across devices.',
        solution: 'We developed a React-based SaaS platform with real-time updates, role-based access control, and comprehensive analytics. The system integrates with existing EHR systems and provides actionable insights.',
        results: [
            '45% reduction in administrative time',
            '99.99% uptime maintained',
            '12,000+ daily active users',
            'HIPAA & SOC 2 certified'
        ],
        technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Docker', 'Kubernetes'],
        image: '/cases/healthtrack-hero.jpg',
        featured: true,
        testimonial: {
            quote: 'This platform transformed how we manage patient care. The attention to security and compliance was impressive.',
            author: 'Dr. Michael Chen',
            role: 'CTO, HealthTrack Medical'
        }
    },
    {
        id: 'finwise-fintech',
        title: 'FinWise Investment Platform',
        client: 'FinWise Technologies',
        category: 'FinTech',
        description: 'A modern investment platform with real-time market data, portfolio management, and automated trading capabilities.',
        challenge: 'FinWise needed to attract younger investors with a modern, intuitive platform that simplified complex financial data and enabled quick decision-making.',
        solution: 'We created a sleek, real-time investment dashboard with data visualization, educational tooltips, and a gamified onboarding experience. The platform supports cryptocurrency and traditional assets.',
        results: [
            '180% increase in new user signups',
            '$50M assets under management',
            '4.8/5 App Store rating',
            '65% increase in daily active users'
        ],
        technologies: ['Vue.js', 'Python', 'FastAPI', 'Redis', 'WebSocket', 'D3.js'],
        image: '/cases/finwise-hero.jpg',
        featured: true,
        testimonial: {
            quote: 'They understood our vision perfectly. The platform feels premium and our users love the intuitive experience.',
            author: 'Alexandra Kim',
            role: 'Founder, FinWise Technologies'
        }
    },
    {
        id: 'edulearn-platform',
        title: 'EduLearn Online Learning Platform',
        client: 'EduLearn Global',
        category: 'EdTech',
        description: 'An interactive online learning platform with live classes, course management, and student progress tracking.',
        challenge: 'Traditional LMS platforms lacked engagement features. EduLearn needed a platform that could handle live video, interactive quizzes, and progress tracking at scale.',
        solution: 'We built a custom learning platform with integrated video conferencing, gamified progress systems, and AI-powered learning path recommendations. The platform supports 50,000+ concurrent users.',
        results: [
            '89% course completion rate',
            '50,000+ concurrent users supported',
            '42% improvement in learning outcomes',
            '4.9/5 student satisfaction score'
        ],
        technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'WebRTC', 'AWS Lambda', 'ElasticSearch'],
        image: '/cases/edulearn-hero.jpg',
        featured: false,
        testimonial: {
            quote: 'The platform handles our global student base flawlessly. The interactive features keep students engaged throughout courses.',
            author: 'Robert Martinez',
            role: 'VP of Product, EduLearn Global'
        }
    },
    {
        id: 'foodie-delivery',
        title: 'Foodie Express Delivery App',
        client: 'Foodie Express',
        category: 'Food & Delivery',
        description: 'A complete food delivery ecosystem including customer app, restaurant dashboard, and driver management system.',
        challenge: 'A regional food delivery startup needed to compete with major players by offering faster delivery, better restaurant tools, and a superior customer experience.',
        solution: 'We developed a three-part ecosystem: a Progressive Web App for customers, a comprehensive restaurant management portal, and a real-time driver tracking system with route optimization.',
        results: [
            '28-minute average delivery time',
            '500+ restaurant partners',
            '94% customer satisfaction rate',
            '3x growth in monthly orders'
        ],
        technologies: ['React Native', 'Node.js', 'Firebase', 'Google Maps API', 'Stripe Connect', 'Socket.io'],
        image: '/cases/foodie-hero.jpg',
        featured: false
    },
    {
        id: 'realestate-platform',
        title: 'PropView Real Estate Platform',
        client: 'PropView Realty',
        category: 'Real Estate',
        description: 'A modern real estate platform with virtual tours, AI property matching, and integrated mortgage calculators.',
        challenge: 'Traditional real estate listings were static and uninspiring. PropView wanted to revolutionize property discovery with immersive virtual experiences.',
        solution: 'We created an innovative platform featuring 360° virtual tours, AI-powered property recommendations based on user preferences, and seamless scheduling with agents.',
        results: [
            '250% increase in property inquiries',
            '85% reduction in unnecessary site visits',
            '12,000+ properties listed',
            '45% faster time-to-close'
        ],
        technologies: ['Next.js', 'Three.js', 'Python', 'TensorFlow', 'AWS S3', 'Mapbox'],
        image: '/cases/propview-hero.jpg',
        featured: false
    }
];
