import { motion } from "framer-motion";
import heroImage from "@/assets/renato-hero.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="Renato Carlyle" className="w-full h-full object-cover object-top" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
    </div>

    <div className="container relative z-10 pt-32 pb-20">
      <div className="max-w-2xl">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-px bg-primary mb-8"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-6"
        >
          Renato Carlyle
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] mb-8 text-foreground"
        >
          Transformando operações comerciais em{" "}
          <span className="italic text-primary">máquinas de crescimento</span>{" "}
          sustentável
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-12 max-w-xl"
        >
          Mais de 30 anos liderando estratégias, pessoas e resultados no mais alto nível
        </motion.p>
        <motion.a
          href="#contato"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="inline-flex items-center gap-3 border border-primary text-primary px-8 py-4 text-sm tracking-[0.15em] uppercase font-body hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          Agendar conversa estratégica
          <span className="text-lg">→</span>
        </motion.a>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-px h-8 bg-primary/50"
      />
    </motion.div>
  </section>
);

export default HeroSection;
