import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { title: "Estratégia Comercial", desc: "Arquitetura de estratégias que conectam mercado, produto e execução com precisão." },
  { title: "Expansão de Market Share", desc: "Identificação e captura de oportunidades em mercados competitivos." },
  { title: "Reestruturação de Equipes", desc: "Construção de times comerciais de alta performance com cultura de resultado." },
  { title: "Governança Comercial", desc: "Processos, métricas e frameworks que garantem consistência operacional." },
  { title: "Mentoria Executiva", desc: "Desenvolvimento de lideranças com visão estratégica e capacidade de execução." },
  { title: "Inteligência Comercial + IA", desc: "Dados e tecnologia aplicados à tomada de decisão comercial." },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding">
      <div className="container" ref={ref}>
        <div
          className={`mb-16 md:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">Atuação</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Áreas de impacto
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`bg-background p-8 md:p-10 group hover:bg-secondary/50 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <span className="text-xs text-muted-foreground font-body mb-6 block">
                0{i + 1}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-light text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
