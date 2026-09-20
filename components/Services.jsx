"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Digital Marketing",
    text: "Data-driven campaigns designed to grow visibility, traffic and sales.",
    image: "/Digital Marketing.png",
  },
  {
    number: "02",
    title: "Web Designing",
    text: "Modern, responsive websites designed to turn visitors into customers.",
    image: "/Web Designing.jpeg",
  },
  {
    number: "03",
    title: "E-Commerce",
    text: "Online stores built to sell, scale and create better customer experiences.",
    image: "/E-Commerce.JPEG",
  },
  {
    number: "04",
    title: "Social Media",
    text: "Content and community strategies that keep your brand relevant.",
    image: "/Social Media.JPEG",
  },
  {
    number: "05",
    title: "Performance Ads",
    text: "Targeted PPC campaigns focused on measurable growth and leads.",
    image: "/Performance Ads.JPEG",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      const distance = Math.min(
        Math.max(viewportHeight - rect.top, 0),
        sectionHeight
      );

      const progress =
        distance / (sectionHeight - viewportHeight);

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

  const revealProgress = Math.min(
    scrollProgress / 0.75,
    1
  );

  const fadeProgress =
    scrollProgress > 0.75
      ? Math.min(
          (scrollProgress - 0.75) / 0.25,
          1
        )
      : 0;

  const sectionOpacity =
    1 - fadeProgress * 0.5;

  const headingOpacity =
    scrollProgress < 0.45
      ? 0.3 + (scrollProgress / 0.45) * 0.7
      : 1;

  const serviceText = "SERVICES.";

  const typingProgress = Math.min(
    scrollProgress / 0.45,
    1
  );

  const typedLength = Math.floor(
    typingProgress * serviceText.length
  );

  const typedServices = serviceText.slice(
    0,
    typedLength
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative min-h-[250vh] bg-[#0a0a0a]"
    >
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">

        <div
          className="mx-auto w-full max-w-7xl px-6 lg:px-10"
          style={{
            opacity: sectionOpacity,
          }}
        >
          <div
            className="mb-12"
            style={{
              opacity:
                headingOpacity * sectionOpacity,
            }}
          >
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#ff4d3d]">
              What we do
            </p>

            <h2 className="text-5xl font-bold leading-[0.88] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
              OUR
              <br />
              <span className="text-[#ff4d3d]">
                {typedServices}
              </span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">

            {services.map((service, index) => {

              const boxStart = index / 5;
              const boxEnd =
                (index + 1) / 5;

              const boxProgress =
                Math.min(
                  Math.max(
                    (revealProgress - boxStart) /
                      (boxEnd - boxStart),
                    0
                  ),
                  1
                );

              return (
                <a
                  key={service.number}
                  href="#contact"
                  className="group relative block min-h-[300px] overflow-hidden border border-white/15 bg-[#111] transition-colors duration-500 hover:border-[#ff4d3d]"
                  style={{
                    opacity: boxProgress,
                    transform: `translateY(${
                      (1 - boxProgress) * 70
                    }px)`,
                  }}
                >
                  {service.image && (
                    <>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/45 transition-colors duration-500 group-hover:bg-black/30" />
                    </>
                  )}

                  <div className="relative z-10 h-[300px] p-6">

                    <div className="flex items-start justify-between">
                      <span className="text-sm font-medium text-[#ff4d3d]">
                        {service.number}
                      </span>

                      <span className="text-2xl text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#ff4d3d]">
                        ↗
                      </span>
                    </div>

                    <div className="absolute bottom-24 left-6 right-6">
                      <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white lg:text-3xl">
                        {service.title}
                      </h3>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <p
                        className={`text-xs leading-5 ${
                          service.image
                            ? "text-white/60"
                            : "text-white/40"
                        }`}
                      >
                        {service.text}
                      </p>
                    </div>

                  </div>
                </a>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}