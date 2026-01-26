import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { companyInfo } from "@/data/site";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const icons: Record<string, React.ReactNode> = {
  globe: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  ),
  palette: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    </svg>
  ),
  code: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  ),
  server: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
      />
    </svg>
  ),
  "shopping-cart": (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  ),
  settings: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
};

const serviceImages: Record<string, string> = {
  "web-development": "/srevices/web_dev_mockup-removebg-preview.png",
  "ui-ux-design": "/srevices/uiux_mockup-removebg-preview.png",
  "frontend-development": "/srevices/frontend_mockup-removebg-preview.png",
  "backend-development": "/srevices/backend_mockup-removebg-preview.png",
  ecommerce: "/srevices/ecommerce_mockup-removebg-preview.png",
  "website-maintenance": "/srevices/maintenance_mockup-removebg-preview.png",
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return { title: "Not Found" };
  return {
    title: `${service.title} | Hasib Digital`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();
  const others = services.filter((s) => s.id !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero Section */}
        <section
          className={`pt-32 pb-20 lg:pb-32 ${service.color} relative overflow-hidden`}
        >
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="w-20 h-20 rounded-3xl bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-900 mb-6 shadow-xl">
                  {icons[service.icon]}
                </div>
                <h1 className="text-5xl lg:text-7xl font-black mb-6 text-slate-900 tracking-tight leading-[1.1]">
                  {service.title}
                </h1>
                <p className="text-xl lg:text-2xl text-slate-700 mb-8 leading-relaxed">
                  {service.longDescription || service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={companyInfo.fiverr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full bg-slate-900 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <span>Get Started</span>
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
                  </a>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full bg-white text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative h-[400px] lg:h-[500px]">
                {serviceImages[service.id] && (
                  <Image
                    src={serviceImages[service.id]}
                    alt={service.title}
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        {service.benefits && service.benefits.length > 0 && (
          <section className="py-20 lg:py-32 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                  Why Choose This Service?
                </h2>
                <p className="text-lg text-slate-600">
                  Here's how our {service.title.toLowerCase()} service can
                  transform your business
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 text-2xl font-black">
                      {i + 1}
                    </div>
                    <p className="text-slate-700 text-lg leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Features Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                What's Included
              </h2>
              <p className="text-lg text-slate-600">
                Everything you need for a successful project
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {service.features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-lg font-medium">
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        {service.process && service.process.length > 0 && (
          <section className="py-20 lg:py-32 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                  Our Process
                </h2>
                <p className="text-lg text-slate-600">
                  A proven approach to deliver exceptional results
                </p>
              </div>
              <div className="max-w-4xl mx-auto space-y-6">
                {service.process.map((step, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-2xl font-black">
                        {i + 1}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-black text-slate-900 mb-2">
                          {step.step}
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Technologies Section */}
        {service.technologies && service.technologies.length > 0 && (
          <section className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                  Technologies We Use
                </h2>
                <p className="text-lg text-slate-600">
                  Industry-leading tools and technologies
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {service.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="px-6 py-3 bg-slate-100 text-slate-800 font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Deliverables Section */}
        {service.deliverables && service.deliverables.length > 0 && (
          <section className="py-20 lg:py-32 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                  What You'll Receive
                </h2>
                <p className="text-lg text-slate-600">
                  Comprehensive deliverables for your project
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {service.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-4"
                  >
                    <div className="w-3 h-3 rounded-full bg-emerald-500 flex-shrink-0" />
                    <p className="text-slate-700 text-lg font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-slate-900 text-white">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our{" "}
              {service.title.toLowerCase()} services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={companyInfo.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full bg-white text-slate-900 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Hire on Fiverr</span>
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
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full bg-transparent text-white border-2 border-white hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                Explore Our Other{" "}
                <span className="bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-lg text-slate-600">
                Discover more solutions we offer to help grow your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {others.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.id}`}
                  className={`group rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${s.color}`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {icons[s.icon]}
                  </div>

                  <h3 className="text-2xl font-black mb-3 text-slate-900">
                    {s.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    {s.description}
                  </p>

                  <div className="flex items-center text-sm font-bold text-slate-900 group-hover:translate-x-2 transition-transform">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
