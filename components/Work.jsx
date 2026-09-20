"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "DIGITAL CAMPAIGN",
    title: "Digital Campaign",
    description:
      "Creative campaigns designed to build attention, engagement and brand growth.",
    image: "/digital-campaign.jpg",
    slug: "digital-campaign",
  },
  {
    number: "02",
    category: "WEB EXPERIENCE",
    title: "Web Experience",
    description:
      "Modern digital experiences designed around users, brands and business goals.",
    image: "/web-experience.jpg",
    slug: "web-experience",
  },
];

export default function Work() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const startPoint = viewportHeight * 0.9;
      const endPoint = viewportHeight * 0.15;

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

  // -----------------------------
  // HEADING ANIMATION
  // -----------------------------

  const headingProgress = Math.min(
    scrollProgress / 0.3,
    1
  );

  const headingOpacity =
    0.15 + headingProgress * 0.85;

  const headingY =
    (1 - headingProgress) * 80;

  // -----------------------------
  // DESCRIPTION ANIMATION
  // -----------------------------

  const descriptionProgress = Math.min(
    Math.max(
      (scrollProgress - 0.12) / 0.3,
      0
    ),
    1
  );

  const descriptionOpacity =
    0.15 + descriptionProgress * 0.85;

  const descriptionY =
    (1 - descriptionProgress) * 50;

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-[#0a0a0a] py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">

        {/* TOP */}

        <div className="mb-12 grid gap-8 lg:grid-cols-2">

          {/* HEADING */}

          <div
            style={{
              opacity: headingOpacity,
              transform: `translateY(${headingY}px)`,
            }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#ff4d3d]">
              Selected Work
            </p>

            <h2 className="text-5xl font-bold leading-[0.88] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              OUR
              <br />
              <span className="text-[#ff4d3d]">
                WORK.
              </span>
            </h2>
          </div>

          {/* DESCRIPTION */}

          <div
            className="flex items-end lg:pb-2"
            style={{
              opacity: descriptionOpacity,
              transform: `translateY(${descriptionY}px)`,
            }}
          >
            <p className="max-w-md text-sm leading-6 text-white/40">
              Creative campaigns, digital experiences and
              solutions designed to help businesses connect,
              convert and grow.
            </p>
          </div>
        </div>

        {/* PROJECTS */}

        <div className="grid gap-5 md:grid-cols-2">

          {projects.map((project, index) => {

            const projectStart =
              0.25 + index * 0.18;

            const projectProgress = Math.min(
              Math.max(
                (scrollProgress - projectStart) / 0.3,
                0
              ),
              1
            );

            const projectOpacity =
              projectProgress;

            const projectY =
              (1 - projectProgress) * 100;

            const projectScale =
              0.92 +
              projectProgress * 0.08;

            return (
              <Link
                key={project.number}
                href={`/work/${project.slug}`}
                className="group relative block"
                style={{
                  opacity: projectOpacity,
                  transform: `
                    translateY(${projectY}px)
                    scale(${projectScale})
                  `,
                }}
              >

                {/* IMAGE AREA */}

                <div className="relative h-[320px] overflow-hidden border border-white/15 bg-[#111] transition-colors duration-300 group-hover:border-[#ff4d3d] sm:h-[380px] lg:h-[420px]">

                  <div className="absolute inset-0 bg-[#151515]" />

                  {/* PROJECT IMAGE */}

                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* DARK OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-opacity duration-500 group-hover:from-black/65" />

                  {/* NUMBER */}

                  <div className="absolute left-5 top-5">
                    <span className="text-xs text-[#ff4d3d]">
                      {project.number}
                    </span>
                  </div>

                  {/* ARROW */}

                  <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-white/20 text-white transition-all duration-300 group-hover:border-[#ff4d3d] group-hover:bg-[#ff4d3d]">
                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>

                  {/* PROJECT NAME */}

                  <div className="absolute bottom-5 left-5">
                    <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-[#ff4d3d]">
                      {project.category}
                    </p>

                    <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* DESCRIPTION */}

                <div className="flex justify-between gap-6 border-b border-white/10 py-4">
                  <p className="max-w-sm text-xs leading-5 text-white/35">
                    {project.description}
                  </p>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/25 transition-colors duration-300 group-hover:text-[#ff4d3d]">
                    View
                  </span>
                </div>

              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}