// Removed useScrollReveal
import { motion } from "framer-motion";
import { BarChart3, Globe2, Zap, Users2 } from "lucide-react";

const results = [
  { 
    title: "Crescimento de faturamento", 
    desc: "Estruturas comerciais que geraram crescimento consistente em múltiplos mercados.",
    icon: BarChart3
  },
  { 
    title: "Expansão de mercado", 
    desc: "Abertura de novos canais e territórios com estratégia e execução disciplinada.",
    icon: Globe2
  },
  { 
    title: "Otimização de processos", 
    desc: "Redução de complexidade operacional com ganho de velocidade e margem.",
    icon: Zap
  },
  { 
    title: "Equipes de alta performance", 
    desc: "Times formados com mentalidade de resultado e cultura de accountability.",
    icon: Users2
  },
];

const ResultsSection = () => {
  return (
    <section className="section-padding relative z-10 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4 font-medium">Resultados</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
            Impacto mensurável
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {results.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring",
                stiffness: 80,
                damping: 20,
                delay: i * 0.1 
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="group relative bg-white/40 backdrop-blur-3xl border border-white/40 p-8 rounded-[3rem] text-center flex flex-col items-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              
              <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center border border-border/40 group-hover:bg-primary transition-all duration-500 shadow-sm relative z-10">
                <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500 stroke-[1.5]" />
              </div>
              
              <div className="relative z-10">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  {item.desc}
                </p>
              </div>

              {/* Shine effect */}
              <div className="absolute -inset-full top-0 block w-1/2 h-full z-20 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-shine" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
