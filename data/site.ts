import { ProcessStep, Technology, Stat } from '@/types';

export const processSteps: ProcessStep[] = [
    {
        step: 1,
        title: 'Discovery',
        description: 'We dive deep into understanding your goals, target audience, and project requirements through comprehensive research and stakeholder interviews.',
        icon: 'search'
    },
    {
        step: 2,
        title: 'Design',
        description: 'Our designers create stunning wireframes and prototypes, iterating based on your feedback until the design perfectly captures your vision.',
        icon: 'palette'
    },
    {
        step: 3,
        title: 'Develop',
        description: 'Our expert developers bring designs to life using cutting-edge technologies, following best practices for clean, maintainable code.',
        icon: 'code'
    },
    {
        step: 4,
        title: 'Deploy',
        description: 'We rigorously test, optimize for performance, and deploy your project with ongoing support to ensure long-term success.',
        icon: 'rocket'
    }
];

export const technologies: Technology[] = [
    // Frontend
    { name: 'React', icon: 'react', category: 'frontend' },
    { name: 'Next.js', icon: 'nextjs', category: 'frontend' },
    { name: 'Vue.js', icon: 'vue', category: 'frontend' },
    { name: 'TypeScript', icon: 'typescript', category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'tailwind', category: 'frontend' },
    { name: 'Angular', icon: 'angular', category: 'frontend' },

    // Backend
    { name: 'Node.js', icon: 'nodejs', category: 'backend' },
    { name: 'Python', icon: 'python', category: 'backend' },
    { name: 'Java', icon: 'java', category: 'backend' },
    { name: 'Go', icon: 'go', category: 'backend' },
    { name: 'GraphQL', icon: 'graphql', category: 'backend' },
    { name: 'REST API', icon: 'api', category: 'backend' },

    // Database
    { name: 'PostgreSQL', icon: 'postgresql', category: 'database' },
    { name: 'MongoDB', icon: 'mongodb', category: 'database' },
    { name: 'Redis', icon: 'redis', category: 'database' },
    { name: 'MySQL', icon: 'mysql', category: 'database' },

    // Cloud
    { name: 'AWS', icon: 'aws', category: 'cloud' },
    { name: 'Google Cloud', icon: 'gcp', category: 'cloud' },
    { name: 'Vercel', icon: 'vercel', category: 'cloud' },
    { name: 'Docker', icon: 'docker', category: 'cloud' },

    // Tools
    { name: 'Figma', icon: 'figma', category: 'tools' },
    { name: 'Git', icon: 'git', category: 'tools' },
    { name: 'Jira', icon: 'jira', category: 'tools' },
    { name: 'Cypress', icon: 'cypress', category: 'tools' }
];

export const companyStats: Stat[] = [
    { value: '150', label: 'Projects Completed', suffix: '+' },
    { value: '50', label: 'Happy Clients', suffix: '+' },
    { value: '8', label: 'Years Experience', suffix: '+' },
    { value: '99', label: 'Client Satisfaction', suffix: '%' }
];

export const companyInfo = {
    name: 'Md Hasibul Hasan',
    tagline: 'Full-Stack Product Engineering',
    description: 'Independent full-stack development for founders, product teams, and businesses that need dependable digital products from strategy through launch.',
    mission: 'To turn complex product requirements into clear, maintainable, and useful software through thoughtful design and responsible engineering.',
    values: [
        {
            title: 'Quality First',
            description: 'Every line of code, every pixel, every interaction is crafted with excellence in mind.'
        },
        {
            title: 'Client Partnership',
            description: 'We treat every project as a partnership, with your success being our ultimate goal.'
        },
        {
            title: 'Innovation Driven',
            description: 'We stay ahead of trends, using cutting-edge technologies to future-proof your solutions.'
        },
        {
            title: 'Transparent Process',
            description: 'Clear communication, honest timelines, and no surprises throughout your project journey.'
        }
    ],
    founded: 2017,
    location: 'Serving clients worldwide',
    email: 'hello@hasibdigital.com',
    fiverr: 'https://www.fiverr.com/adnanhasib565'
};
