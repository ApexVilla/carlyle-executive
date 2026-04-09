import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 flex items-center ${
        scrolled 
          ? "bg-white/40 backdrop-blur-2xl border-b border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.06),_inset_0_0_20px_rgba(255,255,255,0.4)] py-3" 
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-14">
        <a href="#" className="flex items-center gap-3 transition-transform duration-500 hover:scale-105">
          <img src="/logo.png" alt="Renato Carlyle" className="h-10 md:h-12 object-contain" />
          <span className="font-display text-lg md:text-xl text-foreground tracking-wide font-medium">
            Renato <span className="text-primary font-light">Carlyle</span>
          </span>
        </a>
        <a
          href="#contato"
          className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-body font-medium"
        >
          Contato
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
