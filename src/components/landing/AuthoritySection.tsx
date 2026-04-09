// Removed useScrollReveal
import { motion } from "framer-motion";

const stats = [
  { number: "30+", label: "Anos de experiência" },
  { number: "C-Level", label: "Atuação executiva" },
  { number: "Certificado", label: "Conselheiro corporativo" },
  { number: "MBA", label: "Mentoria Empresarial" },
];

const AuthoritySection = () => {
  return (
    <section className="section-padding relative z-20 pt-8 pb-20 md:pt-12 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring",
                stiffness: 80,
                damping: 20,
                delay: i * 0.1 
              }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="group relative bg-white/40 backdrop-blur-3xl border border-white/40 p-10 md:p-12 rounded-[3.5rem] text-center flex flex-col justify-center items-center shadow-[0_20px_50px_rgba(0,0,0,0.05)] cursor-default overflow-hidden"
            >
              {/* Internal glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              
              <div className="relative z-10 flex flex-col justify-center items-center">
                <div className="font-display text-4xl md:text-5xl lg:text-5xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-500 ease-out">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm tracking-[0.15em] uppercase text-muted-foreground font-body font-medium leading-relaxed group-hover:text-foreground transition-colors duration-500">
                  {stat.label}
                </div>
              </div>

              {/* Shine highlight */}
              <div className="absolute -inset-full top-0 block w-1/2 h-full z-20 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-shine" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
