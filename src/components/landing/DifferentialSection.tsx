import { useScrollReveal } from "@/hooks/useScrollReveal";

const DifferentialSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding border-t border-border" ref={ref}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-12 h-px bg-primary mx-auto mb-12" />
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-foreground italic">
              "Não se trata de vender mais.
              <br />
              <span className="text-primary">Trata-se de construir estruturas comerciais</span>
              <br />
              que sustentam crescimento real."
            </blockquote>
            <div className="w-12 h-px bg-primary mx-auto mt-12" />
            <p className="mt-8 text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Renato Carlyle
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
