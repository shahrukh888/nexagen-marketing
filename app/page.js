import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <Services />


      {/* CAPABILITIES */}
      <Capabilities />


      {/* ABOUT */}
    <div className="-mt-[60vh] lg:-mt-[75vh]">
  <About />
</div>


      {/* WORK */}
      <div className="-mt-[90vh]"></div>
      <Work />

      {/* CONTACT */}
      <div className="-mt-[20vh]"></div>
      <Contact />

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-8 sm:flex-row lg:px-10">

          <div>
            <div className="text-lg font-bold">
              NEXAGEN<span className="text-[#ff4d3d]">.</span>
            </div>

            <p className="mt-1 text-[8px] uppercase tracking-[0.35em] text-white/30">
              Marketing Made Simple
            </p>
          </div>

          <p className="text-xs text-white/30">
            © 2026 NexaGen Marketing. All rights reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}


/* SERVICE CARD */
function Service({ number, title, text }) {
  return (
    <div className="group min-h-[280px] border border-white/10 p-6 transition duration-500 hover:-translate-y-2 hover:border-[#ff4d3d]/60 hover:bg-white/[0.03]">

      <div className="flex items-center justify-between">
        <span className="text-xs text-[#ff4d3d]">
          {number}
        </span>

        <span className="text-xl text-white/30 transition group-hover:text-[#ff4d3d]">
          ↗
        </span>
      </div>

      <div className="mt-24">
        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-white/40">
          {text}
        </p>
      </div>

    </div>
  );
}