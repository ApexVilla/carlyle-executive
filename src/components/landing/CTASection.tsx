import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contato" className="section-padding border-t border-border" ref={ref}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-8">Próximo passo</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-8">
              Se sua empresa precisa crescer com{" "}
              <span className="italic text-primary">estrutura, estratégia e consistência</span>
              {" "}— vamos conversar.
            </h2>
            <div className="w-12 h-px bg-primary mx-auto my-12" />
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 text-sm tracking-[0.2em] uppercase font-body hover:bg-gold-light transition-all duration-500"
            >
              Falar com Renato
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
