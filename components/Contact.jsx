"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const startPoint = viewportHeight * 0.9;
      const endPoint = viewportHeight * 0.2;

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

  // MAIN HEADING
  const headingProgress = Math.min(
    scrollProgress / 0.4,
    1
  );

  // DESCRIPTION
  const descriptionProgress = Math.min(
    Math.max((scrollProgress - 0.18) / 0.3, 0),
    1
  );

  // BUTTON
  const buttonProgress = Math.min(
    Math.max((scrollProgress - 0.3) / 0.3, 0),
    1
  );

  // FOOTER
  const footerProgress = Math.min(
    Math.max((scrollProgress - 0.5) / 0.3, 0),
    1
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a]"
    >
      <div className="flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

          {/* MAIN CTA */}

          <div>

            <p
              className="mb-6 text-xs uppercase tracking-[0.4em] text-[#ff4d3d]"
              style={{
                opacity: headingProgress,
                transform: `translateY(${
                  (1 - headingProgress) * 40
                }px)`,
              }}
            >
              Let's work together
            </p>

            <h2
              className="max-w-5xl text-6xl font-bold leading-[0.85] tracking-[-0.06em] text-white sm:text-7xl lg:text-[9rem]"
              style={{
                opacity: headingProgress,
                transform: `translateY(${
                  (1 - headingProgress) * 100
                }px)`,
              }}
            >
              LET'S BUILD
              <br />

              <span className="text-[#ff4d3d]">
                SOMETHING
              </span>

              <br />

              GREAT.
            </h2>

            {/* DESCRIPTION + BUTTON */}

            <div
              className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
              style={{
                opacity: descriptionProgress,
                transform: `translateY(${
                  (1 - descriptionProgress) * 50
                }px)`,
              }}
            >
              <p className="max-w-md text-sm leading-6 text-white/40">
                Have an idea, a business or a brand ready to
                grow? Let's create something meaningful
                together.
              </p>

              <a
                href="mailto:hello@nexagenmarketing.com"
                className="group inline-flex w-fit items-center gap-4 border-b border-[#ff4d3d] pb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:text-[#ff4d3d]"
                style={{
                  opacity: buttonProgress,
                  transform: `translateY(${
                    (1 - buttonProgress) * 35
                  }px)`,
                }}
              >
                Start a project

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* FOOTER */}

          <div
            className="mt-24 border-t border-white/10 pt-6"
            style={{
              opacity: footerProgress,
              transform: `translateY(${
                (1 - footerProgress) * 30
              }px)`,
            }}
          >
            <div className="flex flex-col justify-between gap-4 text-[10px] uppercase tracking-[0.25em] text-white/25 sm:flex-row">
              <span>NexaGen Marketing</span>

              <span>Marketing Made Simple</span>

              <span>© 2026</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}