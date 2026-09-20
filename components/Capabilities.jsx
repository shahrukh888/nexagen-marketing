"use client";

import { useEffect, useRef, useState } from "react";

const capabilities = [
  {
    number: "01",
    title: "STRATEGY",
    text: "Clear digital strategies built around your business goals and audience.",
  },
  {
    number: "02",
    title: "CREATIVE",
    text: "Ideas, visuals and content that give brands a distinctive presence.",
  },
  {
    number: "03",
    title: "TECHNOLOGY",
    text: "Modern websites, e-commerce experiences and digital solutions.",
  },
  {
    number: "04",
    title: "GROWTH",
    text: "Data-led campaigns focused on measurable results.",
  },
];

export default function Capabilities() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /*
        Animation starts when section enters
        the lower part of the screen.
      */

      const startPoint = viewportHeight * 0.85;
      const endPoint = viewportHeight * 0.25;

      const progress =
        (startPoint - rect.top) /
        (startPoint - endPoint);

      setScrollProgress(
        Math.max(0, Math.min(progress, 1))
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  /*
    Heading becomes visible first.
  */

  const headingProgress = Math.min(
    scrollProgress / 0.25,
    1
  );

  const headingOpacity =
    0.3 + headingProgress * 0.7;

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="relative min-h-[110vh] overflow-hidden bg-[#0a0a0a]"
    >
      <div className="flex min-h-screen items-start pt-[8vh]">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">

          {/* MAIN ROW */}

          <div
            className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-10"
            style={{
              opacity: headingOpacity,
            }}
          >

            {/* HEADING */}

            <div className="w-full shrink-0 lg:w-[30%]">
              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#ff4d3d]">
                How we work
              </p>

              <h2 className="text-4xl font-bold leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                DIGITAL
                <br />
                <span className="text-[#ff4d3d]">
                  CAPABILITIES.
                </span>
              </h2>
            </div>

            {/* RIGHT SIDE */}

            <div className="flex w-full flex-col gap-8 lg:flex-1 lg:flex-row lg:items-center lg:gap-0">

              {/* DESCRIPTION */}

              <div className="w-full shrink-0 lg:w-[25%] lg:pr-8">
                <p className="text-sm leading-6 text-white/40">
                  Strategy, creativity, technology and growth
                  working together to build stronger digital
                  brands.
                </p>
              </div>

              {/* LINE */}

              <div className="hidden h-px flex-1 bg-white/15 lg:mr-8 lg:block" />

              {/* CAPABILITIES */}

              <div className="grid w-full grid-cols-4 border-t border-white/15 lg:flex lg:w-[48%] lg:border-t-0">

                {capabilities.map((capability, index) => {

                  /*
                    Each item gets its own section
                    of the scroll progress.
                  */

                  const itemStart = index * 0.2;
                  const itemEnd = itemStart + 0.25;

                  const itemProgress = Math.min(
                    Math.max(
                      (scrollProgress - itemStart) /
                        (itemEnd - itemStart),
                      0
                    ),
                    1
                  );

                  return (
                    <div
                      key={capability.number}
                      className={`min-w-0 px-1 py-4 sm:px-4 sm:py-4 lg:flex-1 lg:py-0 ${
                        index !== 0
                          ? "border-l border-white/15"
                          : ""
                      }`}
                      style={{
                        opacity: itemProgress,
                        transform: `translateX(${
                          (1 - itemProgress) * 35
                        }px)`,
                        transition:
                          "opacity 0.15s linear, transform 0.15s linear",
                      }}
                    >

                      <span className="block text-sm font-medium text-[#ff4d3d]">
                        {capability.number}
                      </span>

                      <h3 className="mt-2 text-[10px] font-semibold tracking-tight text-white sm:text-sm">
                        {capability.title}
                      </h3>

                      <p className="mt-2 hidden text-[10px] leading-4 text-white/35 xl:block">
                        {capability.text}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}