import { technologies } from "@/data/site";

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  cloud: "Infrastructure",
  tools: "Design & QA",
};

export default function TechStack() {
  const categories = [
    "frontend",
    "backend",
    "database",
    "cloud",
    "tools",
  ] as const;

  return (
    <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      {/* Structural Background Lines */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-3 text-xs font-mono text-emerald-500 uppercase tracking-[0.3em] mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Our Tech Ecosystem
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Built for{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Scale
            </span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            We leverage industry-leading technologies to ensure your product
            survives the test of time and traffic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {categories.map((cat, idx) => {
            const techs = technologies.filter((t) => t.category === cat);
            return (
              <div
                key={cat}
                className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-500"
              >
                {/* Category Index */}
                <div className="text-[40px] font-black text-slate-800 absolute top-4 right-6 group-hover:text-emerald-500/10 transition-colors">
                  0{idx + 1}
                </div>

                <h4 className="text-sm font-mono text-emerald-400 uppercase tracking-widest mb-10 border-l-2 border-emerald-500/30 pl-4">
                  {categoryLabels[cat]}
                </h4>

                <div className="flex flex-col gap-4">
                  {techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 group/item"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover/item:bg-emerald-400 transition-colors" />
                      <span className="text-slate-300 font-bold text-sm tracking-wide group-hover/item:text-white transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
              </div>
            );
          })}
        </div>

        {/* Bottom decorative bar */}
        <div className="mt-20 flex justify-center">
          <div className="px-8 py-4 bg-emerald-500/5 border border-emerald-500/10 rounded-full backdrop-blur-xl">
            <p className="text-slate-400 text-sm font-medium">
              <span className="text-emerald-400 font-bold">Pro Tip:</span> We
              prioritize Next.js & Node.js for maximum performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
