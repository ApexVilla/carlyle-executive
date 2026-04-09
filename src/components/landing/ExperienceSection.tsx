import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  { role: "Diretor Executivo", company: "Villela Brasil Bank", period: "Gestão estratégica e expansão de operações" },
  { role: "Fundador", company: "R7 Comunicação e Desenvolvimento", period: "Consultoria e desenvolvimento organizacional" },
  { role: "Diretor Comercial", company: "UP380", period: "Liderança de operações comerciais" },
  { role: "Consultor", company: "Fox Partners", period: "Estratégia e performance empresarial" },
  { role: "Gerente Comercial", company: "Dinavidros", period: "Gestão comercial e crescimento de mercado" },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding">
      <div className="container" ref={ref}>
        <div
          className={`mb-16 md:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">Trajetória</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Experiência executiva
          </h2>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className={`group border-t border-border py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 hover:bg-secondary/30 transition-all duration-500 px-4 md:px-8 -mx-4 md:-mx-8 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              <span className="text-xs text-muted-foreground font-body md:w-8">0{i + 1}</span>
              <h3 className="font-display text-xl md:text-2xl font-light text-foreground group-hover:text-primary transition-colors duration-300 md:w-64 shrink-0">
                {exp.role}
              </h3>
              <p className="text-primary text-sm tracking-wide font-body md:w-64 shrink-0">
                {exp.company}
              </p>
              <p className="text-sm text-muted-foreground font-body flex-1">
                {exp.period}
              </p>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
