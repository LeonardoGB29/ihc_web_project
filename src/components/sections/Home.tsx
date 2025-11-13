import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center bg-background px-6"
    >
      {/* Fondo decorativo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-translucent/30 to-background" />

      {/* Patrón sutil en el fondo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-24 left-12 w-24 h-24 rotate-45 border border-purple-border"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rotate-45 border border-cyan/20"></div>
      </div>

      {/* Contenido */}
  <motion.div
    className="relative z-10 text-center max-w-3xl md:-ml-8 lg:-ml-16"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {/* Contenedor logo y el titulo */}
    <div className="flex items-center justify-center gap-6 mb-6">
      {/* Logo */}
      <img 
        src="/home/logo.png" 
        alt="Logo" 
        className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 object-contain"
      />


      {/* titulo */}
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight text-left">
        <span className="block">Interacción</span>
        <span className="block">Humano</span>
        <span className="block text-purple">Computador</span>
      </h2>
    </div>

    {/* subtitulo */}
    <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-10">
      Tecnología | Experiencia de Usuario
    </p>
  </motion.div>
    </section>
  );
};

export default Home;
