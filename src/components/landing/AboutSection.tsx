import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="section-padding bg-secondary/10" id="sobre">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            <div className="relative group">
              {/* Efeito 3D (offset block) e Sombra */}
              <div className="absolute inset-0 bg-primary/30 rounded-2xl -z-10 translate-x-6 translate-y-6 transition-transform duration-700 group-hover:translate-x-8 group-hover:translate-y-8" />
              <div className="absolute inset-0 bg-primary/10 rounded-2xl -z-10 blur-2xl translate-x-6 translate-y-6" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-2xl cursor-default">
                <img
                  src="/perfil-5.jpeg" 
                  alt="Renato Carlyle"
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 50 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4 font-medium">Sobre mim</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 leading-tight">
              Transformando visão em execução <span className="italic text-primary">impecável</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed md:text-lg font-light">
              <p>
                Comandando operações e diretorias comerciais de alto nível há mais de três décadas, estabeleço conexões genuínas entre o propósito corporativo e a execução mercadológica.
              </p>
              <p>
                Minha atuação como Conselheiro Corporativo e Mentor Executivo tem sido pautada no fortalecimento estrutural dos líderes e equipes. Eu não entrego apenas estratégias; desenho a trilha completa de expansão e capacitação para garantir a máxima excelência.
              </p>
              <p>
                Mais do que metodologias, trago uma visão pragmática forjada no calor das negociações empresariais e na liderança construtiva de mesas diretoras influentes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
