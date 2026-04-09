import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { number: "30+", label: "Anos de experiência" },
  { number: "C-Level", label: "Atuação executiva" },
  { number: "Certificado", label: "Conselheiro corporativo" },
  { number: "MBA", label: "Mentoria Empresarial" },
];

const AuthoritySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding border-t border-border">
      <div className="container" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center md:text-left transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm tracking-[0.1em] uppercase text-muted-foreground font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
