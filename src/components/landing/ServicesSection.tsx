import { Compass, TrendingUp, UsersRound, ShieldCheck, Lightbulb, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { title: "Estratégia Comercial", desc: "Arquitetura de estratégias que conectam mercado, produto e execução com precisão.", icon: Compass },
  { title: "Expansão de Market Share", desc: "Identificação e captura de oportunidades em mercados competitivos.", icon: TrendingUp },
  { title: "Reestruturação de Equipes", desc: "Construção de times comerciais de alta performance com cultura de resultado.", icon: UsersRound },
  { title: "Governança Comercial", desc: "Processos, métricas e frameworks que garantem consistência operacional.", icon: ShieldCheck },
  { title: "Mentoria Executiva", desc: "Desenvolvimento de lideranças com visão estratégica e capacidade de execução.", icon: Lightbulb },
  { title: "Inteligência Comercial + IA", desc: "Dados e tecnologia aplicados à tomada de decisão comercial.", icon: BrainCircuit },
];

const ServicesSection = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4 font-medium">Atuação</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Áreas de impacto
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                type: "spring",
                stiffness: 80,
                damping: 20
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="group relative bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-[2.5rem] flex flex-col gap-6 hover:bg-white/20 hover:shadow-[0_25px_50px_rgba(0,0,0,0.04)] cursor-default overflow-hidden"
            >
              {/* Glossy Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              
              <div className="relative z-10 w-16 h-16 bg-white/10 rounded-2xl shadow-inner flex items-center justify-center border border-white/20 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500 stroke-[1.5]" />
              </div>
              
              <div className="relative z-10 flex flex-col">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-base text-muted-foreground/80 leading-relaxed font-body font-light">
                  {service.desc}
                </p>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute -inset-full top-0 block w-1/2 h-full z-20 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 group-hover:animate-shine" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
