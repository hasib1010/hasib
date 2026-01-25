import { TeamMember } from '@/types';

export const team: TeamMember[] = [
    // UI/UX Designers (2)
    {
        id: 'sarah-chen',
        name: 'Sarah Chen',
        role: 'Lead UI/UX Designer',
        department: 'design',
        bio: 'Award-winning designer with 8+ years crafting intuitive digital experiences. Specializes in design systems and user research.',
        skills: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems', 'User Research'],
        image: '/team/sarah-chen.jpg',
        social: {
            linkedin: 'https://linkedin.com/in/sarahchen',
            twitter: 'https://twitter.com/sarahchen'
        }
    },
    {
        id: 'marcus-williams',
        name: 'Marcus Williams',
        role: 'Senior UI/UX Designer',
        department: 'design',
        bio: 'Creative problem solver passionate about accessible design. Expert in motion design and micro-interactions.',
        skills: ['Sketch', 'Principle', 'After Effects', 'Accessibility', 'Animation'],
        image: '/team/marcus-williams.jpg',
        social: {
            linkedin: 'https://linkedin.com/in/marcuswilliams'
        }
    },

    // Backend Developers (3)
    {
        id: 'alex-martinez',
        name: 'Alex Martinez',
        role: 'Lead Backend Developer',
        department: 'backend',
        bio: 'Full-stack architect with expertise in scalable microservices. 10+ years building enterprise-grade applications.',
        skills: ['Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker'],
        image: '/team/alex-martinez.jpg',
        social: {
            github: 'https://github.com/alexmartinez',
            linkedin: 'https://linkedin.com/in/alexmartinez'
        }
    },
    {
        id: 'priya-patel',
        name: 'Priya Patel',
        role: 'Senior Backend Developer',
        department: 'backend',
        bio: 'API specialist and database optimization expert. Passionate about clean code and test-driven development.',
        skills: ['Java', 'Spring Boot', 'MongoDB', 'Redis', 'Kubernetes'],
        image: '/team/priya-patel.jpg',
        social: {
            github: 'https://github.com/priyapatel'
        }
    },
    {
        id: 'david-kim',
        name: 'David Kim',
        role: 'Backend Developer',
        department: 'backend',
        bio: 'DevOps enthusiast focused on CI/CD pipelines and cloud infrastructure. Certified AWS Solutions Architect.',
        skills: ['Go', 'Terraform', 'CI/CD', 'Linux', 'Microservices'],
        image: '/team/david-kim.jpg',
        social: {
            github: 'https://github.com/davidkim'
        }
    },

    // Frontend Developers (6)
    {
        id: 'emma-johnson',
        name: 'Emma Johnson',
        role: 'Lead Frontend Developer',
        department: 'frontend',
        bio: 'React expert and performance optimization specialist. Leads frontend architecture decisions and mentors the team.',
        skills: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Performance'],
        image: '/team/emma-johnson.jpg',
        social: {
            github: 'https://github.com/emmajohnson',
            twitter: 'https://twitter.com/emmajohnson'
        }
    },
    {
        id: 'james-anderson',
        name: 'James Anderson',
        role: 'Senior Frontend Developer',
        department: 'frontend',
        bio: 'Animation wizard and CSS expert. Creates stunning visual experiences with attention to every pixel.',
        skills: ['Vue.js', 'GSAP', 'Three.js', 'CSS', 'WebGL'],
        image: '/team/james-anderson.jpg',
        social: {
            github: 'https://github.com/jamesanderson'
        }
    },
    {
        id: 'lisa-nguyen',
        name: 'Lisa Nguyen',
        role: 'Senior Frontend Developer',
        department: 'frontend',
        bio: 'Mobile-first development advocate. Expert in responsive design and cross-browser compatibility.',
        skills: ['React Native', 'Flutter', 'PWA', 'Tailwind', 'Accessibility'],
        image: '/team/lisa-nguyen.jpg',
        social: {
            linkedin: 'https://linkedin.com/in/lisanguyen'
        }
    },
    {
        id: 'michael-brown',
        name: 'Michael Brown',
        role: 'Frontend Developer',
        department: 'frontend',
        bio: 'State management guru with deep Redux and MobX expertise. Builds complex, maintainable applications.',
        skills: ['React', 'Redux', 'MobX', 'Jest', 'Storybook'],
        image: '/team/michael-brown.jpg',
        social: {
            github: 'https://github.com/michaelbrown'
        }
    },
    {
        id: 'sophia-garcia',
        name: 'Sophia Garcia',
        role: 'Frontend Developer',
        department: 'frontend',
        bio: 'Component library specialist focused on reusable, accessible UI components and design system implementation.',
        skills: ['Angular', 'Stencil', 'Web Components', 'SCSS', 'A11y'],
        image: '/team/sophia-garcia.jpg',
        social: {
            github: 'https://github.com/sophiagarcia'
        }
    },
    {
        id: 'ryan-taylor',
        name: 'Ryan Taylor',
        role: 'Junior Frontend Developer',
        department: 'frontend',
        bio: 'Enthusiastic developer with fresh perspectives and modern approaches. Quick learner passionate about clean code.',
        skills: ['JavaScript', 'React', 'Tailwind CSS', 'Git', 'Figma'],
        image: '/team/ryan-taylor.jpg',
        social: {
            github: 'https://github.com/ryantaylor'
        }
    },

    // QA Engineer (1)
    {
        id: 'olivia-white',
        name: 'Olivia White',
        role: 'QA Lead',
        department: 'qa',
        bio: 'Quality assurance expert ensuring pixel-perfect delivery. Implements comprehensive testing strategies.',
        skills: ['Cypress', 'Playwright', 'Selenium', 'API Testing', 'Performance Testing'],
        image: '/team/olivia-white.jpg',
        social: {
            linkedin: 'https://linkedin.com/in/oliviawhite'
        }
    }
];

export const teamStats = {
    totalMembers: 13,
    designers: 2,
    backendDevs: 3,
    frontendDevs: 6,
    qaEngineers: 1,
    yearsExperience: '8+',
    projectsCompleted: '150+'
};
