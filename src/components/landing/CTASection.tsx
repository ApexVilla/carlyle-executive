// Removed useScrollReveal
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.671.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const CTASection = () => {
  const contactInfo = [
    { icon: Phone, label: "(62) 99998-4422", href: "https://wa.me/5562999984422" },
    { icon: MapPin, label: "Goiânia - GO", href: "#" },
    { icon: Mail, label: "renatocarlyle@gmail.com", href: "mailto:renatocarlyle@gmail.com" },
  ];

  return (
    <section id="contato" className="section-padding relative z-10">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-8 font-medium">Próximo passo</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-8">
              Cresça com <span className="italic text-primary">estrutura e estratégia.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="group relative bg-white/10 backdrop-blur-3xl border border-white/20 p-10 rounded-[2.5rem] flex flex-col items-center gap-4 transition-all duration-500 hover:bg-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.03)] cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                <info.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-500 stroke-[1.5]" />
                <span className="text-sm text-foreground font-body font-medium tracking-wide">
                  {info.label}
                </span>
                
                {/* Shine effect */}
                <div className="absolute -inset-full top-0 block w-1/2 h-full z-20 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 group-hover:animate-shine" />
              </motion.a>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <a
              href="https://wa.me/5562999984422"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-primary text-white border border-primary px-12 py-6 text-sm tracking-[0.2em] uppercase font-body font-semibold hover:bg-transparent hover:text-primary transition-all duration-500 rounded-full shadow-lg shadow-primary/20"
            >
              <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
              Falar com Renato Carlyle
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
