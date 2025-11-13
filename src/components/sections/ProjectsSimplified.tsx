import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

type MiniProject = {
  id: string;
  title: string;
  short: string;
};

const projects: MiniProject[] = [
  {
    id: "project-vr",
    title: "Videojuego VR - Warren House",
    short:
      "Experiencia inmersiva de realidad virtual donde el jugador usa voz y gestos para debilitar y expulsar entidades.",
  },
  {
    id: "project-blandy",
    title: "Blandy",
    short:
      "Entrenamiento de habilidades blandas para estudiantes de tecnología mediante simulaciones interactivas.",
  },
];

const ProjectsSimplified = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="py-20">
      <div className="space-y-8">
        <div
          ref={headerRef}
          className={cn(
            "transition-all duration-700 transform",
            headerInView ? "animate-fade-in" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-4xl font-bold text-text-primary mb-4">Proyectos</h2>
          <p className="text-text-secondary text-lg mb-8">
            Vista general de nuestro proyectos. Selecciona un proyecto en el submenú radial para ver su detalle.
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((p) => (
            <div key={p.id} className="bg-surface border border-purple-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-2">{p.title}</h3>
              <p className="text-text-secondary">{p.short}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSimplified;

