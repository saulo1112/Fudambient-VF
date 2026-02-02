import { motion } from 'motion/react';
import { Search, Pencil, Hammer, TrendingUp } from 'lucide-react';

const methods = [
  {
    id: 1,
    icon: Search,
    label: 'Diagnóstico del territorio'
  },
  {
    id: 2,
    icon: Pencil,
    label: 'Diseño técnico integral'
  },
  {
    id: 3,
    icon: Hammer,
    label: 'Implementación responsable'
  },
  {
    id: 4,
    icon: TrendingUp,
    label: 'Seguimiento y sostenibilidad'
  }
];

export function ClosingSection() {
  return (
    <section className="relative w-full min-h-[420px] lg:min-h-[480px] overflow-hidden bg-gradient-to-br from-[#F5F9F3] via-[#FAFBFA] to-[#F0F5F0]">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.04, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-gradient-to-tr from-[#7CB342] to-[#4A90A4] rounded-[50%] blur-3xl -translate-x-1/3 translate-y-1/3"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 0.03, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-[600px] h-[500px] bg-gradient-to-bl from-[#4A90A4] to-[#7CB342] rounded-[50%] blur-3xl translate-x-1/3 -translate-y-1/3"
        />
      </div>

      {/* Content */}
      <div className="relative px-6 py-20 md:py-24 lg:py-28 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="uppercase tracking-[0.2em] text-xs text-[#7CB342]">
              Nuestro enfoque
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#1A1A1A] mb-8 max-w-4xl mx-auto px-4"
          >
            La ingeniería cobra sentido cuando entiende el territorio
          </motion.h2>

          {/* Supporting paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#4A4A4A] leading-relaxed max-w-[520px] mx-auto mb-12 px-4"
          >
            Integramos análisis técnico, visión ambiental y acompañamiento institucional para desarrollar soluciones sostenibles, adaptadas a cada contexto y comunidad.
          </motion.p>

          {/* Method overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-12 max-w-4xl mx-auto"
          >
            {methods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex flex-col items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow duration-300">
                    <Icon className="w-6 h-6 text-[#7CB342]" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm text-[#4A4A4A] max-w-[140px] leading-snug">
                    {method.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button className="inline-flex items-center justify-center px-8 py-4 bg-[#7CB342] hover:bg-[#6A9C37] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              <span className="tracking-wide">Conversemos sobre tu proyecto</span>
              <svg 
                className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
