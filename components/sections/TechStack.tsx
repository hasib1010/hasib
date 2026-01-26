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
    <section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      {/* Animated Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-teal-500/10 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4">
            <span className="w-8 h-[1px] bg-emerald-400/50" />
            Our Tech Ecosystem
          </span>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
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
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 hover:border-emerald-400/50 hover:bg-white/[0.08] transition-all duration-500"
              >
                {/* Subtle noise texture */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Category Index */}
                <div className="relative z-10 text-[40px] font-black text-slate-500 absolute top-4 right-6  transition-colors">
                  0{idx + 1}
                </div>

                <h4 className="relative z-10 text-sm font-mono text-emerald-400 uppercase tracking-widest mb-10 border-l-2 border-emerald-500/30 pl-4">
                  {categoryLabels[cat]}
                </h4>

                <div className="relative z-10 flex flex-col gap-4">
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
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem]" />
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