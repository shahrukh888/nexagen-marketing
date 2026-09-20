"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animation progress: 0 → 1
  const progress = Math.min(scrollY / 500, 1);

  // Image animation
  const imageScale = 1 + progress * 0.65;
  const imageX = progress * -180;
  const imageY = progress * 80;

  return (
    <section className="relative min-h-[100vh] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute right-[-200px] top-[-150px] h-[600px] w-[600px] rounded-full bg-[#ff4d3d]/10 blur-[140px]" />

      <div className="relative mx-auto grid min-h-[700px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">

        {/* HERO LEFT */}
        <div
  className="relative z-20"
  style={{
    opacity: 1 - progress * 0.5,
  }}
>

          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#ff4d3d]">
            Digital Marketing Agency
          </p>

          <h1 className="text-6xl font-bold leading-[0.88] tracking-[-0.05em] sm:text-7xl lg:text-[92px]">

            <span className="block text-white">
              IDEAS
            </span>

            <span className="block text-white/30">
              THAT
            </span>

            <span className="block text-white">
              BUILD
            </span>

            <span className="block text-[#ff4d3d]">
              BRAND.
            </span>

          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-white/50">
            We help brands grow through digital marketing, web design,
            e-commerce and creative strategies that turn attention into
            real business results.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#contact"
              className="bg-[#ff4d3d] px-7 py-4 text-xs font-bold uppercase tracking-wider transition hover:bg-white hover:text-black"
            >
              Start a Project →
            </a>

            <a
              href="#work"
              className="border border-white/20 px-7 py-4 text-xs font-bold uppercase tracking-wider transition hover:border-white"
            >
              View Our Work
            </a>

          </div>

        </div>


        {/* HERO IMAGE */}
        <div className="relative h-[460px] lg:h-[500px]">

          <div
            className="absolute inset-0 overflow-hidden border border-white/10 bg-[#151515]"
            style={{
              transform: `translate(${imageX}px, ${imageY}px) scale(${imageScale})`,
              transformOrigin: "center center",
              zIndex: progress > 0.35 ? 5 : 1,
            }}
          >

            <img
              src="/hero.jpg"
              alt="NexaGen Marketing team"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-8 left-8">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                Strategy / Web / E-Commerce / Growth
              </p>
            </div>

          </div>


          {/* FLOATING NUMBER */}
          <div
            className="absolute -left-5 top-[15%] z-30 flex h-20 w-20 items-center justify-center rounded-full border border-[#ff4d3d] bg-[#0a0a0a]"
            style={{
              transform: `translateX(${progress * -80}px)`,
              opacity: 1 - progress * 0.7,
            }}
          >
            <span className="text-sm font-bold text-[#ff4d3d]">
              01
            </span>
          </div>


          {/* FLOATING CARD */}
          <div
            className="absolute -bottom-5 -left-5 z-30 border border-white/10 bg-[#111]/90 px-5 py-4 backdrop-blur"
            style={{
              transform: `translateY(${progress * 100}px)`,
              opacity: 1 - progress,
            }}
          >

            <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">
              What we build
            </p>

            <p className="mt-2 text-sm font-medium">
              Brands • Websites • Stores
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}