import { Service } from '@/types';

export const services: Service[] = [
    {
        id: 'web-development',
        title: 'Web Design & Development',
        description: 'Our professional web design solutions are creative and functional to create stunning websites.',
        tagline: 'Build Your Digital Empire',
        icon: 'globe',
        color: 'bg-gradient-to-br from-purple-100 via-purple-50 to-white',
        accentColor: 'purple',
        features: [
            'Responsive Design for All Devices',
            'SEO-Optimized Architecture',
            'Fast Loading Performance',
            'Cross-Browser Compatibility',
            'Content Management Systems'
        ],
        longDescription: 'Transform your digital presence with our cutting-edge web development services. We create stunning, high-performance websites that not only look amazing but deliver exceptional user experiences and drive real business results.',
        benefits: [
            'Increase online visibility and reach more customers',
            'Improve user engagement with intuitive interfaces',
            'Boost conversion rates with optimized user flows',
            'Scale effortlessly as your business grows',
            'Stand out from competitors with unique designs'
        ],
        process: [
            { step: 'Discovery & Planning', description: 'We analyze your business goals, target audience, and technical requirements' },
            { step: 'Design & Prototyping', description: 'Create wireframes and high-fidelity designs for your approval' },
            { step: 'Development', description: 'Build your website using modern technologies and best practices' },
            { step: 'Testing & Launch', description: 'Rigorous testing across devices and browsers before going live' },
            { step: 'Support & Maintenance', description: 'Ongoing support to ensure your website stays updated and secure' }
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
        deliverables: ['Fully responsive website', 'Source code', 'Admin panel', 'Documentation', '3 months support']
    },
    {
        id: 'ui-ux-design',
        title: 'UI/UX Design',
        description: 'Exceptional UX isn\'t just design; it\'s a journey that builds trust, forges loyalty, and makes your brand unforgettable.',
        tagline: 'Design That Speaks',
        icon: 'palette',
        color: 'bg-gradient-to-br from-pink-100 via-purple-50 to-white',
        accentColor: 'purple',
        features: [
            'User Research & Personas',
            'Wireframing & Prototyping',
            'Design Systems & Style Guides',
            'Usability Testing',
            'Interactive Mockups'
        ],
        longDescription: 'We craft digital experiences that users love. Our UX design process is rooted in research, empathy, and data-driven insights. From initial concept to final pixel, we ensure every interaction delights your users and supports your business objectives.',
        benefits: [
            'Reduce user frustration and support tickets',
            'Increase user satisfaction and retention',
            'Establish a consistent brand identity',
            'Make data-driven design decisions',
            'Create accessible experiences for all users'
        ],
        process: [
            { step: 'Research', description: 'User interviews, surveys, and competitive analysis' },
            { step: 'Define', description: 'Create personas, user journeys, and information architecture' },
            { step: 'Ideate', description: 'Sketching, wireframing, and exploring design concepts' },
            { step: 'Prototype', description: 'Build interactive prototypes for testing' },
            { step: 'Test & Iterate', description: 'User testing and refinement based on feedback' }
        ],
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro', 'UserTesting'],
        deliverables: ['Design system', 'High-fidelity mockups', 'Interactive prototypes', 'User flow diagrams', 'Design specifications']
    },
    {
        id: 'frontend-development',
        title: 'Frontend Development',
        description: 'Modern, performant frontend solutions using React, Next.js, and cutting-edge technologies.',
        tagline: 'Pixel-Perfect Experiences',
        icon: 'code',
        color: 'bg-gradient-to-br from-emerald-100 via-teal-50 to-white',
        accentColor: 'emerald',
        features: [
            'React & Next.js Applications',
            'Vue.js & Nuxt Development',
            'Progressive Web Apps (PWA)',
            'Animation & Micro-interactions',
            'Performance Optimization'
        ],
        longDescription: 'Bring your designs to life with our expert frontend development services. We build lightning-fast, interactive web applications that work flawlessly across all devices and browsers. Our code is clean, maintainable, and optimized for peak performance.',
        benefits: [
            'Lightning-fast page load times',
            'Smooth animations and transitions',
            'Offline functionality with PWA',
            'Reduced maintenance costs',
            'Future-proof technology stack'
        ],
        process: [
            { step: 'Setup & Architecture', description: 'Project scaffolding and technical architecture planning' },
            { step: 'Component Development', description: 'Building reusable UI components' },
            { step: 'Integration', description: 'Connect with APIs and backend services' },
            { step: 'Optimization', description: 'Performance tuning and code splitting' },
            { step: 'Deployment', description: 'CI/CD setup and production deployment' }
        ],
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
        deliverables: ['Production-ready code', 'Component library', 'Performance report', 'Deployment pipeline', 'Technical documentation']
    },
    {
        id: 'backend-development',
        title: 'Backend Development',
        description: 'Scalable, secure backend systems that power your applications with robust APIs and cloud infrastructure.',
        tagline: 'Power Your Platform',
        icon: 'server',
        color: 'bg-gradient-to-br from-orange-100 via-amber-50 to-white',
        accentColor: 'orange',
        features: [
            'RESTful & GraphQL APIs',
            'Database Design & Optimization',
            'Cloud Deployment (AWS, GCP)',
            'Authentication & Security',
            'Third-party Integrations'
        ],
        longDescription: 'Build a rock-solid foundation for your application with our backend development expertise. We create scalable, secure systems that handle millions of requests while maintaining peak performance. From database design to API development, we\'ve got you covered.',
        benefits: [
            'Handle high traffic with ease',
            'Enterprise-grade security',
            'Reduced server costs through optimization',
            'Real-time data processing',
            'Seamless third-party integrations'
        ],
        process: [
            { step: 'Architecture Design', description: 'Plan database schema and system architecture' },
            { step: 'API Development', description: 'Build robust RESTful or GraphQL APIs' },
            { step: 'Database Setup', description: 'Configure and optimize database systems' },
            { step: 'Security Implementation', description: 'Add authentication, authorization, and encryption' },
            { step: 'Deployment & Scaling', description: 'Deploy to cloud with auto-scaling capabilities' }
        ],
        technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'],
        deliverables: ['API documentation', 'Database schema', 'Admin dashboard', 'Security audit report', 'Deployment scripts']
    },
    {
        id: 'ecommerce',
        title: 'E-Commerce Solutions',
        description: 'Complete online store development with payment integration, inventory management, and optimized checkout.',
        tagline: 'Sell More, Stress Less',
        icon: 'shopping-cart',
        color: 'bg-gradient-to-br from-yellow-200 via-yellow-100 to-white',
        accentColor: 'yellow',
        features: [
            'Custom E-commerce Platforms',
            'Shopify & WooCommerce',
            'Payment Gateway Integration',
            'Inventory Management',
            'Order Tracking Systems'
        ],
        longDescription: 'Launch or upgrade your online store with our comprehensive e-commerce solutions. We build feature-rich platforms that make selling online effortless, with seamless payment processing, inventory management, and customer analytics built right in.',
        benefits: [
            'Increase sales with optimized checkout',
            'Reduce cart abandonment rates',
            'Automate inventory management',
            'Accept payments globally',
            'Gain insights with advanced analytics'
        ],
        process: [
            { step: 'Store Planning', description: 'Define product catalog, features, and payment methods' },
            { step: 'Platform Setup', description: 'Configure e-commerce platform or build custom solution' },
            { step: 'Design & Development', description: 'Create beautiful storefront and shopping experience' },
            { step: 'Payment Integration', description: 'Set up secure payment gateways' },
            { step: 'Launch & Optimize', description: 'Go live and continuously improve conversion rates' }
        ],
        technologies: ['Shopify', 'WooCommerce', 'Stripe', 'Next.js', 'Sanity CMS', 'Vercel'],
        deliverables: ['Fully functional online store', 'Payment integration', 'Admin dashboard', 'Product management system', 'Analytics setup']
    },
    {
        id: 'website-maintenance',
        title: 'Website Maintenance',
        description: 'Keep your website running smoothly with regular updates, security patches, and performance monitoring.',
        tagline: 'Always Online, Always Optimized',
        icon: 'settings',
        color: 'bg-gradient-to-br from-slate-100 via-gray-50 to-white',
        accentColor: 'slate',
        features: [
            'Regular Security Updates',
            'Performance Monitoring',
            'Content Updates',
            'Bug Fixes & Support',
            '24/7 Uptime Monitoring'
        ],
        longDescription: 'Don\'t let your website fall behind. Our maintenance services ensure your site stays secure, fast, and up-to-date. We monitor, maintain, and optimize your website so you can focus on running your business.',
        benefits: [
            'Peace of mind with 24/7 monitoring',
            'Prevent security breaches',
            'Maintain peak performance',
            'Quick response to issues',
            'Regular backups and disaster recovery'
        ],
        process: [
            { step: 'Initial Audit', description: 'Comprehensive review of your current website' },
            { step: 'Monitoring Setup', description: 'Configure uptime and performance monitoring' },
            { step: 'Regular Updates', description: 'Weekly security and software updates' },
            { step: 'Performance Optimization', description: 'Monthly performance tuning' },
            { step: 'Reporting', description: 'Monthly reports on site health and metrics' }
        ],
        technologies: ['New Relic', 'Cloudflare', 'GitHub Actions', 'Sentry', 'Google Analytics'],
        deliverables: ['Monthly reports', 'Uptime monitoring', 'Security updates', 'Performance optimization', 'Priority support']
    }
];
