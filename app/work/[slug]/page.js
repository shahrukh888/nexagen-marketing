import Link from "next/link";

const projects = {
  "digital-campaign": {
    number: "01",
    category: "DIGITAL CAMPAIGN",
    title: "Digital Campaign",
    description:
      "Creative campaigns designed to build attention, engagement and brand growth.",
    image: "/digital-campaign.jpg",
    services: [
      "Campaign Strategy",
      "Creative Direction",
      "Digital Content",
      "Brand Communication",
    ],
  },

  "web-experience": {
    number: "02",
    category: "WEB EXPERIENCE",
    title: "Web Experience",
    description:
      "Modern digital experiences designed around users, brands and business goals.",
    image: "/web-experience.jpg",
    services: [
      "Web Design",
      "User Experience",
      "Responsive Design",
      "Digital Development",
    ],
  },
};

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#ff4d3d]">
            Project not found
          </p>

          <h1 className="text-5xl font-bold">
            This project does not exist.
          </h1>

          <Link
            href="/#work"
            className="mt-10 inline-flex border-b border-[#ff4d3d] pb-3 text-xs font-semibold uppercase tracking-[0.25em] transition-colors hover:text-[#ff4d3d]"
          >
            ← Back to Work
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* HEADER */}

      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

          <Link
            href="/"
            className="text-lg font-bold tracking-tight"
          >
            NEXAGEN
            <span className="text-[#ff4d3d]">.</span>
          </Link>

          <Link
            href="/#work"
            className="text-xs uppercase tracking-[0.25em] text-white/50 transition-colors hover:text-[#ff4d3d]"
          >
            ← Back to Work
          </Link>

        </div>
      </header>

      {/* PROJECT INTRO */}

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-28">

        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">

          <div>

            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#ff4d3d]">
              {project.number} / {project.category}
            </p>

            <h1 className="max-w-5xl text-6xl font-bold leading-[0.85] tracking-[-0.06em] sm:text-7xl lg:text-[8rem]">
              {project.title}
              <span className="text-[#ff4d3d]">.</span>
            </h1>

          </div>

          <div>
            <p className="max-w-md text-base leading-7 text-white/45">
              {project.description}
            </p>
          </div>

        </div>
      </section>

      {/* MAIN DISPLAY IMAGE */}

      <section className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="group relative overflow-hidden border border-white/10 bg-[#111]">

          <img
            src={project.image}
            alt={project.title}
            className="h-auto min-h-[320px] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.02] sm:min-h-[450px] lg:min-h-[600px]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        </div>

      </section>

      {/* PROJECT INFORMATION */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#ff4d3d]">
              The Project
            </p>

            <h2 className="max-w-xl text-4xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-5xl">
              Digital ideas built around real goals.
            </h2>

          </div>

          {/* RIGHT */}

          <div>

            <p className="max-w-xl text-sm leading-7 text-white/45">
              {project.description}
            </p>

            <div className="mt-10 border-t border-white/10">

              {project.services.map((service, index) => (
                <div
                  key={service}
                  className="flex items-center justify-between border-b border-white/10 py-5"
                >
                  <span className="text-xs text-[#ff4d3d]">
                    0{index + 1}
                  </span>

                  <span className="text-sm text-white/70">
                    {service}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* BACK TO WORK */}

      <section className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10 lg:px-10">

          <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">
            NexaGen Marketing
          </span>

          <Link
            href="/#work"
            className="group flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em]"
          >
            Back to Work

            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
          </Link>

        </div>

      </section>

    </main>
  );
}