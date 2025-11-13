const ProjectDetailBlandy = () => {
  return (
    <section className="py-20">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-text-primary">Blandy</h2>
        <p className="text-text-secondary text-lg">
          Desarrollamos una solución que aborda el déficit de habilidades blandas en estudiantes 
          de tecnología mediante simulaciones interactivas de situaciones académicas.
        </p>
        <div className="bg-surface border border-purple-border rounded-xl p-6">
          <ul className="list-disc pl-5 space-y-2 text-text-secondary">
            <li>Reconocimiento de voz</li>
            <li>Inteligencia artificial para ofrecer retroalimentación personalizada.</li>
            <li>Fomentamos la comunicación efectiva, la empatía y el trabajo colaborativo.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailBlandy;

