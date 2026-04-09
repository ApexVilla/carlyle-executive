const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-display text-sm text-muted-foreground">
        © {new Date().getFullYear()} Renato Carlyle
      </span>
      <span className="text-xs text-muted-foreground tracking-wide font-body">
        Gestor Comercial Sênior · Mentor · Conselheiro
      </span>
    </div>
  </footer>
);

export default Footer;
