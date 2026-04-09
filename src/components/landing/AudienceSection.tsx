import { motion } from "framer-motion";

const audiences = [
  "Empresas em crescimento que precisam de estrutura comercial",
  "Negócios em reestruturação buscando eficiência e resultado",
  "Executivos que precisam de direção estratégica clara",
  "Organizações buscando governança e escala sustentável",
];

const AudienceSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4 font-medium">Para quem</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Se você se reconhece aqui
            </h2>
          </motion.div>

          <div className="space-y-6">
            {audiences.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex items-start gap-6 border-l border-primary/20 pl-6 hover:border-primary transition-colors duration-500 py-4"
              >
                <span className="text-primary mt-1 text-lg font-light">—</span>
                <p className="text-lg md:text-xl lg:text-2xl text-foreground font-display font-light leading-relaxed">
                  {a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
