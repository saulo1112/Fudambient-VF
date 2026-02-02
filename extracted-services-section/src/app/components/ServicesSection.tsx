import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

const services = [
  {
    id: 1,
    title: 'Estudios Hidrológicos',
    description: 'Análisis integral de sistemas hídricos para la gestión sostenible del agua y la predicción de comportamientos fluviales.',
    image: 'https://images.unsplash.com/photo-1666547786844-8139d53003d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaXZlciUyMGVuZ2luZWVyaW5nJTIwd2F0ZXJ8ZW58MXx8fHwxNzY1OTEyODI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: 'Ver más'
  },
  {
    id: 2,
    title: 'Infraestructura Hidráulica',
    description: 'Diseño y desarrollo de obras hidráulicas que garantizan eficiencia y seguridad en la gestión del recurso hídrico.',
    image: 'https://images.unsplash.com/photo-1695453200535-9ad62d6b7f21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWRyYXVsaWMlMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NjU5MTI4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    link: 'Ver más'
  },
  {
    id: 3,
    title: 'Gestión de Flujo',
    description: 'Soluciones avanzadas para el control y optimización de flujos hídricos en sistemas naturales y construidos.',
    image: 'https://images.unsplash.com/photo-1765622863897-52708ff655c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGZsb3clMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc2NTkxMjgzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    link: 'Ver más'
  },
  {
    id: 4,
    title: 'Conservación Ambiental',
    description: 'Estrategias integrales para la protección de ecosistemas acuáticos y el desarrollo territorial sostenible.',
    image: 'https://images.unsplash.com/photo-1759929549150-630ef273d747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwY29uc2VydmF0aW9uJTIwcml2ZXJ8ZW58MXx8fHwxNzY1OTEyODMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: 'Explorar proyectos'
  },
  {
    id: 5,
    title: 'Tecnología Sostenible',
    description: 'Implementación de tecnologías innovadoras para una gestión hídrica eficiente y responsable con el medio ambiente.',
    image: 'https://images.unsplash.com/photo-1759899343930-7a443e2cbf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHdhdGVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjU5MTI4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    link: 'Ver más'
  }
];

export function ServicesSection() {
  return (
    <section className="relative w-full bg-[#FAFBFA] overflow-hidden">
      {/* Header with water flow background */}
      <div className="relative px-6 pt-32 pb-20 md:px-12 lg:px-20">
        {/* Abstract water flow shapes - decorative only */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Top left wave */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 0.06, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute -top-20 -left-40 w-[600px] h-[400px] bg-gradient-to-br from-[#7CB342] to-[#4A90A4] rounded-[50%] blur-3xl"
          />
          
          {/* Top right wave */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 0.04, x: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute top-0 right-0 w-[500px] h-[350px] bg-gradient-to-bl from-[#4A90A4] to-[#7CB342] rounded-[50%] blur-3xl"
          />
          
          {/* Center wave */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#7CB342]/30 via-[#4A90A4]/40 to-[#7CB342]/30 rounded-[50%] blur-3xl"
          />
        </div>
        
        {/* Header content */}
        <div className="relative max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#1A1A1A] max-w-3xl"
          >
            Soluciones para el Territorio
          </motion.h1>
        </div>
      </div>

      {/* Timeline content */}
      <div className="relative px-6 pb-32 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Vertical timeline line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#7CB342]/20 via-[#7CB342]/40 to-[#7CB342]/20 -translate-x-1/2" />
          
          {/* Mobile timeline line */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#7CB342]/20 via-[#7CB342]/40 to-[#7CB342]/20" />

          {/* Services */}
          <div className="space-y-24 md:space-y-32">
            {services.map((service, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div key={service.id} className="relative">
                  {/* Timeline node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#7CB342] ring-4 ring-[#FAFBFA] shadow-lg z-10"
                  />
                  
                  {/* Mobile timeline node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="lg:hidden absolute left-8 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-[#7CB342] ring-4 ring-[#FAFBFA] shadow-md z-10"
                  />

                  {/* Service content */}
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    isLeft ? '' : 'lg:direction-rtl'
                  }`}>
                    {/* Text content */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      className={`${
                        isLeft ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12 lg:direction-ltr'
                      } pl-16 lg:pl-0`}
                    >
                      <h3 className="text-2xl md:text-3xl tracking-tight text-[#1A1A1A] mb-4">
                        {service.title}
                      </h3>
                      <p className="text-[#4A4A4A] leading-relaxed mb-6 max-w-md">
                        {service.description}
                      </p>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-[#7CB342] hover:text-[#6A9C37] transition-colors group"
                      >
                        <span className="text-sm tracking-wide">{service.link}</span>
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
                      </a>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className={`${isLeft ? '' : 'lg:direction-ltr'} pl-16 lg:pl-0`}
                    >
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500 group">
                        <ImageWithFallback
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
