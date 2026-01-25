'use client';

import { technologies } from '@/data/site';

const categoryLabels: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    cloud: 'Cloud & DevOps',
    tools: 'Design Tools',
};

const categoryColors: Record<string, string> = {
    frontend: 'bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100',
    backend: 'bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100',
    database: 'bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100',
    cloud: 'bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100',
    tools: 'bg-pink-50 text-pink-600 border-pink-200 hover:bg-pink-100',
};

export default function TechStack() {
    const categories = ['frontend', 'backend', 'database', 'cloud', 'tools'] as const;

    return (
        <section className="py-20 lg:py-28 bg-white relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4 before:h-0.5 before:w-8 before:bg-emerald-600/30 after:h-0.5 after:w-8 after:bg-emerald-600/30">Technologies</span>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Powered by <span className="bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-transparent">Modern Tech</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
                        We use the latest tools and frameworks to build scalable solutions.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {categories.map((cat) => {
                        const techs = technologies.filter(t => t.category === cat);
                        return (
                            <div key={cat} className="w-full flex flex-col items-center text-center">
                                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-5">{categoryLabels[cat]}</h4>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {techs.map((tech) => (
                                        <span
                                            key={tech.name}
                                            className={`px-4 py-2.5 rounded-xl text-sm font-semibold border cursor-default transition-all duration-200 hover:scale-105 hover:shadow-md ${categoryColors[cat]}`}
                                        >
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
