import { motion } from "framer-motion";
import BackgroundAnimation from "@/components/landing/BackgroundAnimation";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
    {/* Background image */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.img 
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "easeOut" }}
        src="/perfil-2.jpeg" 
        alt="Renato Carlyle" 
        className="w-full h-full object-cover object-top" 
      />
      {/* Layers for contrast in Light Theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      <div className="absolute inset-0 bg-background/30" /> {/* Garante legibilidade do texto escuro */}
    </div>

    {/* Hero-specific geometric background animation */}
    <BackgroundAnimation className="absolute inset-0 pointer-events-none z-0 opacity-40 mix-blend-overlay" />

    <div className="container relative z-10 pt-32 pb-20">
      <div className="max-w-2xl">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="h-px bg-primary mb-8"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm tracking-[0.4em] uppercase text-primary font-body mb-6 font-medium"
        >
          Renato Carlyle
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] mb-8 text-foreground"
        >
          Transformando operações comerciais em{" "}
          <span className="italic text-primary">máquinas de crescimento</span>{" "}
          sustentável
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-12 max-w-xl"
        >
          Mais de 30 anos liderando estratégias, pessoas e resultados no mais alto nível
        </motion.p>
        <motion.a
          href="#contato"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="inline-flex items-center gap-4 text-primary px-8 py-4 text-sm tracking-[0.15em] uppercase font-body hover:bg-primary/5 transition-all duration-500 border border-border hover:border-primary relative overflow-hidden group rounded-sm"
        >
          <span className="relative z-10">Agendar conversa estratégica</span>
          <span className="relative z-10 text-lg group-hover:translate-x-1 transition-transform duration-300">→</span>
          <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </motion.a>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 2 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-medium">Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-px h-10 bg-primary"
      />
    </motion.div>
  </section>
);

export default HeroSection;
