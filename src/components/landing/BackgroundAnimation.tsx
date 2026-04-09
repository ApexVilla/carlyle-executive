import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BackgroundAnimation = ({ className = "fixed inset-0 pointer-events-none -z-10" }: { className?: string }) => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const nodes = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 20,
  }));

  return (
    <div className={`overflow-hidden opacity-30 ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map((node) => (
          <motion.circle
            key={`node-${node.id}`}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.size / 10}
            fill="currentColor"
            className="text-primary/10"
            animate={{
              cx: [`${node.x}%`, `${(node.x + 10) % 100}%`, `${node.x}%`],
              cy: [`${node.y}%`, `${(node.y + 10) % 100}%`, `${node.y}%`],
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Dynamic connection lines - creating some static-looking but floating connections */}
        {nodes.slice(0, 10).map((node, i) => {
          const target = nodes[(i + 1) % nodes.length];
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${target.x}%`}
              y2={`${target.y}%`}
              stroke="currentColor"
              strokeWidth="0.05"
              className="text-primary/5"
              animate={{
                x1: [`${node.x}%`, `${(node.x + 10) % 100}%`, `${node.x}%`],
                y1: [`${node.y}%`, `${(node.y + 10) % 100}%`, `${node.y}%`],
                x2: [`${target.x}%`, `${(target.x + 10) % 100}%`, `${target.x}%`],
                y2: [`${target.y}%`, `${(target.y + 10) % 100}%`, `${target.y}%`],
              }}
              transition={{
                duration: node.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}
      </svg>
      
      {/* Subtle Gradient Spotlights */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
};

export default BackgroundAnimation;
