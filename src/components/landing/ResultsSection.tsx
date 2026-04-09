import { useScrollReveal } from "@/hooks/useScrollReveal";

const results = [
  { title: "Crescimento de faturamento", desc: "Estruturas comerciais que geraram crescimento consistente em múltiplos mercados." },
  { title: "Expansão de mercado", desc: "Abertura de novos canais e territórios com estratégia e execução disciplinada." },
  { title: "Otimização de processos", desc: "Redução de complexidade operacional com ganho de velocidade e margem." },
  { title: "Equipes de alta performance", desc: "Times formados com mentalidade de resultado e cultura de accountability." },
];

const ResultsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding border-t border-border bg-secondary/20" ref={ref}>
      <div className="container">
        <div
          className={`mb-16 md:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">Resultados</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Impacto mensurável
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {results.map((r, i) => (
            <div
              key={r.title}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <div className="w-8 h-px bg-primary mb-6" />
              <h3 className="font-display text-xl md:text-2xl font-light text-foreground mb-3">
                {r.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
