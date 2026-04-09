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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <span className="font-display text-xl text-foreground tracking-wide">
          Renato <span className="text-primary">Carlyle</span>
        </span>
        <a
          href="#contato"
          className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
        >
          Contato
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
