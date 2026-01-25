import { Service } from '@/types';

export const services: Service[] = [
    {
        id: 'web-development',
        title: 'Custom Web Development',
        description: 'Build stunning, responsive websites tailored to your business needs. From landing pages to complex web applications.',
        icon: 'globe',
        features: [
            'Responsive design for all devices',
            'SEO-optimized architecture',
            'Fast loading performance',
            'Cross-browser compatibility',
            'Content Management Systems'
        ]
    },
    {
        id: 'ui-ux-design',
        title: 'UI/UX Design',
        description: 'Create intuitive, beautiful user interfaces that engage and convert. Research-driven design process.',
        icon: 'palette',
        features: [
            'User research & personas',
            'Wireframing & prototyping',
            'Design systems & style guides',
            'Usability testing',
            'Interactive mockups'
        ]
    },
    {
        id: 'frontend-development',
        title: 'Frontend Development',
        description: 'Modern, performant frontend solutions using React, Next.js, Vue, and more. Pixel-perfect implementations.',
        icon: 'code',
        features: [
            'React & Next.js applications',
            'Vue.js & Nuxt development',
            'Progressive Web Apps (PWA)',
            'Animation & micro-interactions',
            'Performance optimization'
        ]
    },
    {
        id: 'backend-development',
        title: 'Backend Development',
        description: 'Scalable, secure backend systems that power your applications. APIs, databases, and cloud infrastructure.',
        icon: 'server',
        features: [
            'RESTful & GraphQL APIs',
            'Database design & optimization',
            'Cloud deployment (AWS, GCP)',
            'Authentication & security',
            'Third-party integrations'
        ]
    },
    {
        id: 'ecommerce',
        title: 'E-Commerce Solutions',
        description: 'Complete online store development with payment integration, inventory management, and optimized checkout flows.',
        icon: 'shopping-cart',
        features: [
            'Custom e-commerce platforms',
            'Shopify & WooCommerce',
            'Payment gateway integration',
            'Inventory management',
            'Order tracking systems'
        ]
    },
    {
        id: 'website-maintenance',
        title: 'Website Maintenance',
        description: 'Keep your website running smoothly with regular updates, security patches, and performance monitoring.',
        icon: 'settings',
        features: [
            'Regular security updates',
            'Performance monitoring',
            'Content updates',
            'Bug fixes & support',
            '24/7 uptime monitoring'
        ]
    }
];
