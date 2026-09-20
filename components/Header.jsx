export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

        {/* LOGO */}
        <div>
          <div className="text-xl font-bold tracking-tight">
            NEXAGEN<span className="text-[#ff4d3d]">.</span>
          </div>

          <div className="mt-1 text-[8px] uppercase tracking-[0.35em] text-white/40">
            Marketing
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="hidden gap-8 md:flex">

          <a
            href="#work"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Work
          </a>

          <a
            href="#services"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Services
          </a>

          <a
            href="#about"
            className="text-sm text-white/60 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Contact
          </a>

        </nav>

        {/* LET'S TALK */}
        <a
          href="#contact"
          className="border border-white/20 px-5 py-3 text-xs font-medium uppercase tracking-wider transition hover:border-[#ff4d3d] hover:bg-[#ff4d3d]"
        >
          Let's Talk →
        </a>

      </div>
    </header>
  );
}