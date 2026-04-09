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

const DifferentialSection = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring" }}
          >
            <div className="w-12 h-px bg-primary mx-auto mb-12" />
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-snug text-foreground italic">
              "Não se trata de vender mais.
              <br />
              <span className="text-primary">Trata-se de construir estruturas comerciais</span>
              <br />
              que sustentam crescimento real."
            </blockquote>
            <p className="mt-8 text-sm tracking-[0.3em] uppercase text-muted-foreground font-body font-medium">
              Renato Carlyle
            </p>
            <div className="w-12 h-px bg-primary mx-auto mt-12" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
