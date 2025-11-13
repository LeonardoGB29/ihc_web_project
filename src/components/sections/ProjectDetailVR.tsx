const ProjectDetailVR = () => {
  return (
    <section className="py-20">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-text-primary">Videojuego VR - Warren House</h2>
        <p className="text-text-secondary text-lg">
          Experiencia inmersiva de realidad virtual donde el jugador interpreta pistas del ambiente y usa voz y gestos
          para debilitar y expulsar entidades. Esta vista es el detalle del proyecto seleccionado desde el submenú radial.
        </p>
        <div className="bg-surface border border-purple-border rounded-xl p-6">
          <ul className="list-disc pl-5 space-y-2 text-text-secondary">
            <li>Diseño centrado en la persona y pruebas de usabilidad.</li>
            <li>Interacción multimodal: voz + manos (XR Hands).</li>
            <li>Desarrollado en Unity, compatible con Meta/Oculus.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailVR;

