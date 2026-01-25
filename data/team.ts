import { TeamMember } from '@/types';

export const team: TeamMember[] = [
    // UI/UX Designers (2)
    {
        id: 'fahmida-rahman',
        name: 'Fahmida Rahman',
        role: 'Lead UI/UX Designer',
        department: 'design',
        bio: 'Award-winning designer from Dhaka with 8+ years crafting intuitive digital experiences. Specializes in design systems and user research.',
        skills: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems', 'User Research'],
        image: 'https://images.unsplash.com/photo-1626443791479-4733bcae7327?q=80&w=1080&auto=format&fit=crop',
        social: {
            linkedin: 'https://linkedin.com/in/fahmida-rahman',
            twitter: 'https://twitter.com/fahmida_rahman'
        }
    },
    {
        id: 'tanvir-hossain',
        name: 'Tanvir Hossain',
        role: 'Senior UI/UX Designer',
        department: 'design',
        bio: 'Creative problem solver from Chittagong passionate about accessible design. Expert in motion design and micro-interactions.',
        skills: ['Sketch', 'Principle', 'After Effects', 'Accessibility', 'Animation'],
        image: '/team/young-indian-man-with-laptop-gray-wall.jpg',
        social: {
            linkedin: 'https://linkedin.com/in/tanvir-hossain'
        }
    },

    // Backend Developers (3)
    {
        id: 'rakibul-islam',
        name: 'Rakibul Islam',
        role: 'Lead Backend Developer',
        department: 'backend',
        bio: 'Full-stack architect from Dhaka with expertise in scalable microservices. 10+ years building enterprise-grade applications.',
        skills: ['Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker'],
        image: 'https://images.unsplash.com/photo-1667551970926-d2c7e0f46d8a?q=80&w=1080&auto=format&fit=crop',
        social: {
            github: 'https://github.com/rakibul-islam',
            linkedin: 'https://linkedin.com/in/rakibul-islam'
        }
    },
    {
        id: 'nafisa-akter',
        name: 'Nafisa Akter',
        role: 'Senior Backend Developer',
        department: 'backend',
        bio: 'API specialist and database optimization expert based in Sylhet. Passionate about clean code and test-driven development.',
        skills: ['Java', 'Spring Boot', 'MongoDB', 'Redis', 'Kubernetes'],
        image: '/team/smiling-indian-general-manager-focused-business-operations.jpg',
        social: {
            github: 'https://github.com/nafisa-akter'
        }
    },
    {
        id: 'sabbir-ahmed',
        name: 'Sabbir Ahmed',
        role: 'Backend Developer',
        department: 'backend',
        bio: 'DevOps enthusiast from Rajshahi focused on CI/CD pipelines and cloud infrastructure. Certified AWS Solutions Architect.',
        skills: ['Go', 'Terraform', 'CI/CD', 'Linux', 'Microservices'],
        image: 'https://images.unsplash.com/photo-1683105653852-25028a53a3e4?q=80&w=1080&auto=format&fit=crop',
        social: {
            github: 'https://github.com/sabbir-ahmed'
        }
    },

    // Frontend Developers (6)
    {
        id: 'tasnim-zahan',
        name: 'Tasnim Zahan',
        role: 'Lead Frontend Developer',
        department: 'frontend',
        bio: 'React expert and performance optimization specialist from Dhaka. Leads frontend architecture decisions and mentors the team.',
        skills: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'Performance'],
        image: 'https://images.unsplash.com/photo-1568743296270-9cc798164b3b?q=80&w=1080&auto=format&fit=crop',
        social: {
            github: 'https://github.com/tasnim-zahan',
            twitter: 'https://twitter.com/tasnim_zahan'
        }
    },
    {
        id: 'mehedi-hasan',
        name: 'Mehedi Hasan',
        role: 'Senior Frontend Developer',
        department: 'frontend',
        bio: 'Animation wizard and CSS expert from Khulna. Creates stunning visual experiences with attention to every pixel.',
        skills: ['Vue.js', 'GSAP', 'Three.js', 'CSS', 'WebGL'],
        image: 'https://images.unsplash.com/photo-1608440208198-65202a3d0e8a?q=80&w=1080&auto=format&fit=crop',
        social: {
            github: 'https://github.com/mehedi-hasan'
        }
    },
    {
        id: 'lamia-karim',
        name: 'Lamia Karim',
        role: 'Senior Frontend Developer',
        department: 'frontend',
        bio: 'Mobile-first development advocate from Dhaka. Expert in responsive design and cross-browser compatibility.',
        skills: ['React Native', 'Flutter', 'PWA', 'Tailwind', 'Accessibility'],
        image: 'https://images.unsplash.com/photo-1601114174531-4d95d279713e?q=80&w=1080&auto=format&fit=crop',
        social: {
            linkedin: 'https://linkedin.com/in/lamia-karim'
        }
    },
    {
        id: 'farhan-chowdhury',
        name: 'Farhan Chowdhury',
        role: 'Frontend Developer',
        department: 'frontend',
        bio: 'State management guru from Comilla with deep Redux and MobX expertise. Builds complex, maintainable applications.',
        skills: ['React', 'Redux', 'MobX', 'Jest', 'Storybook'],
        image: 'https://images.unsplash.com/photo-1612190219911-286df0e14656?q=80&w=1080&auto=format&fit=crop',
        social: {
            github: 'https://github.com/farhan-chowdhury'
        }
    },
    {
        id: 'nusrat-jahan',
        name: 'Nusrat Jahan',
        role: 'Frontend Developer',
        department: 'frontend',
        bio: 'Component library specialist from Dhaka focused on reusable, accessible UI components and design system implementation.',
        skills: ['Angular', 'Stencil', 'Web Components', 'SCSS', 'A11y'],
        image: 'https://images.unsplash.com/photo-1729337531424-198f880cb6c7?q=80&w=1080&auto=format&fit=crop',
        social: {
            github: 'https://github.com/nusrat-jahan'
        }
    },
    {
        id: 'arafat-hossain',
        name: 'Arafat Hossain',
        role: 'Junior Frontend Developer',
        department: 'frontend',
        bio: 'Enthusiastic developer from Mymensingh with fresh perspectives and modern approaches. Quick learner passionate about clean code.',
        skills: ['JavaScript', 'React', 'Tailwind CSS', 'Git', 'Figma'],
        image: 'https://images.unsplash.com/photo-1612016219304-c9984757cc54?q=80&w=1080&auto=format&fit=crop',
        social: {
            github: 'https://github.com/arafat-hossain'
        }
    },

    // QA Engineer (1)
    {
        id: 'shabnam-sultana',
        name: 'Shabnam Sultana',
        role: 'QA Lead',
        department: 'qa',
        bio: 'Quality assurance expert from Dhaka ensuring pixel-perfect delivery. Implements comprehensive testing strategies.',
        skills: ['Cypress', 'Playwright', 'Selenium', 'API Testing', 'Performance Testing'],
        image: 'https://images.unsplash.com/photo-1464892216009-6d356060e72c?q=80&w=1080&auto=format&fit=crop',
        social: {
            linkedin: 'https://linkedin.com/in/shabnam-sultana'
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