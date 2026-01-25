import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

const serviceImages: Record<string, string> = {
  "web-development": "/services/web-dev-3d.png",
  "ui-ux-design": "/services/uiux-3d.png",
  "frontend-development": "/services/frontend-3d.png",
  "backend-development": "/services/backend-3d.png",
  ecommerce: "/services/ecommerce-3d.png",
  "website-maintenance":
    "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1080&auto=format&fit=crop",
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-teal-500/10 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 uppercase tracking-[0.2em] mb-4">
              <span className="w-8 h-[1px] bg-emerald-400/50" />
              Our Expertise
            </span>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Precision-Engineered <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h2>
          </div>
          <p className="max-w-md text-slate-400 text-lg leading-relaxed">
            We blend cutting-edge technology with world-class design to build
            products that redefine industries.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {services.map((service, index) => {
            // Custom grid spans for Bento effect
            const isLarge = index === 0 || index === 3;
            const isMedium = index === 4;

            return (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:border-emerald-400/50 hover:bg-white/[0.08] flex flex-col justify-between
                                    ${isLarge ? "md:col-span-4" : "md:col-span-2"}
                                    ${isMedium ? "md:col-span-3" : ""}
                                `}
              >
                {/* Subtle noise texture */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={serviceImages[service.id]}
                        alt={service.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400/50 uppercase tracking-widest bg-emerald-400/5 px-3 py-1 rounded-full border border-emerald-400/10">
                      SEC-0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-sm">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((f, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-3 py-1.5 bg-white/5 rounded-lg group-hover:text-emerald-200 transition-colors"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive arrow */}
                <div className="mt-12 flex items-center gap-2 text-emerald-400 text-sm font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  Explore Service
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>

                {/* Background gradient glow on hover */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
