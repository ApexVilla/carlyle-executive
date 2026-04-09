import { useScrollReveal } from "@/hooks/useScrollReveal";

const audiences = [
  "Empresas em crescimento que precisam de estrutura comercial",
  "Negócios em reestruturação buscando eficiência e resultado",
  "Executivos que precisam de direção estratégica clara",
  "Organizações buscando governança e escala sustentável",
];

const AudienceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding" ref={ref}>
      <div className="container">
        <div className="max-w-3xl">
          <div
            className={`mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">Para quem</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
              Se você se reconhece aqui
            </h2>
          </div>

          <div className="space-y-6">
            {audiences.map((a, i) => (
              <div
                key={i}
                className={`flex items-start gap-6 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                <span className="text-primary mt-1.5 text-lg">—</span>
                <p className="text-lg md:text-xl text-secondary-foreground font-display font-light leading-relaxed">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
