import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  { role: "Diretor Executivo", company: "Villela Brasil Bank", period: "Gestão estratégica e expansão de operações" },
  { role: "Fundador", company: "R7 Comunicação e Desenvolvimento", period: "Consultoria e desenvolvimento organizacional" },
  { role: "Diretor Comercial", company: "UP380", period: "Liderança de operações comerciais" },
  { role: "Consultor", company: "Fox Partners", period: "Estratégia e performance empresarial" },
  { role: "Gerente Comercial", company: "Dinavidros", period: "Gestão comercial e crescimento de mercado" },
];

const ExperienceSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4 font-medium">Trajetória</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Experiência executiva
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 60 }}
              className="group relative border-t border-border py-10 md:py-14 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-secondary/20 transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8"
            >
              {/* Linha vertical de animação */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 ease-in-out" />

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 flex-1">
                <span className="text-sm tracking-[0.2em] text-muted-foreground font-body w-8 hidden md:block">
                  0{i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-foreground group-hover:text-primary transition-colors duration-500 mb-2 md:mb-3">
                    {exp.role}
                  </h3>
                  <p className="text-primary tracking-[0.2em] text-xs md:text-sm uppercase font-body font-medium">
                    {exp.company}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 md:w-5/12 ml-auto text-left md:text-right">
                <p className="text-sm text-muted-foreground font-body leading-relaxed md:ml-auto max-w-[280px]">
                  {exp.period}
                </p>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:border-primary transition-all duration-500 group-hover:bg-primary/5 hidden sm:flex">
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
