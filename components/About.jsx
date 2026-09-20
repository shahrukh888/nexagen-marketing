"use client";

import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    number: "01",
    title: "STRATEGY",
    subtitle: "PLAN WITH PURPOSE",
  },
  {
    number: "02",
    title: "CREATIVE",
    subtitle: "DESIGN THAT CONNECTS",
  },
  {
    number: "03",
    title: "GROWTH",
    subtitle: "BUILT FOR BUSINESS",
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const totalScroll = rect.height - viewportHeight;

      const progress =
        totalScroll > 0
          ? Math.min(
              Math.max(-rect.top / totalScroll, 0),
              1
            )
          : 0;

      setScrollProgress(progress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  /* Heading reveal */
  const headingProgress = Math.min(scrollProgress / 0.4, 1);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-[160vh] overflow-hidden bg-[#0a0a0a]"
    >
      <div className="sticky top-0 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">

          {/* TOP CONTENT */}
          <div className="grid gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#ff4d3d]">
                About NexaGen
              </p>

              <h2 className="text-6xl font-bold leading-[0.86] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                <span className="block text-white">
                  WE MAKE
                </span>

                <span
                  className="block"
                  style={{
                    color: `rgba(255,255,255,${
                      0.25 + headingProgress * 0.75
                    })`,
                  }}
                >
                  DIGITAL
                </span>

                <span
                  className="block"
                  style={{
                    color: `rgba(255,77,61,${
                      headingProgress
                    })`,
                  }}
                >
                  SIMPLE.
                </span>
              </h2>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col justify-end lg:pb-2">

              <p className="max-w-xl text-xl leading-8 text-white/75">
                NexaGen Marketing is a digital agency built to
                help ambitious businesses grow online.
              </p>

              <p className="mt-8 max-w-xl text-sm leading-7 text-white/40">
                We combine strategy, creative thinking and
                technology to create digital experiences that
                connect brands with the right people. From
                social media and performance marketing to
                websites and e-commerce, we turn ideas into
                practical digital solutions.
              </p>

              <a
                href="#contact"
                className="group mt-10 inline-flex w-fit items-center gap-3 border-b border-[#ff4d3d] pb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:text-[#ff4d3d]"
              >
                Let's build something

                <span className="text-base transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>

            </div>
          </div>

          {/* PILLARS */}
          <div className="mt-24 grid border-y border-white/10 md:grid-cols-3">

            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="group relative border-white/10 px-6 py-8 transition-all duration-500 hover:bg-white/[0.02] md:border-l md:first:border-l-0"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs text-[#ff4d3d] opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {pillar.number}
                  </span>

                  <span className="h-px w-0 bg-[#ff4d3d] transition-all duration-500 group-hover:w-12" />
                </div>

                <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[#ff4d3d]">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/30 transition-colors duration-300 group-hover:text-white/50">
                  {pillar.subtitle}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}