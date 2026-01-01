import "./Proyectos.css";

interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  imagen?: string;
  enlace?: string;
  github?: string;
}

const Proyectos = () => {
  const proyectos: Proyecto[] = [
    {
      id: 1,
      titulo: "Proyecto 1",
      descripcion: "Descripción del proyecto 1. Una aplicación web moderna y responsive.",
      tecnologias: ["React", "TypeScript", "CSS"],
      enlace: "#",
      github: "#"
    },
    {
      id: 2,
      titulo: "Proyecto 2",
      descripcion: "Descripción del proyecto 2. Sistema completo de gestión.",
      tecnologias: ["Node.js", "Express", "MongoDB"],
      enlace: "#",
      github: "#"
    },
    {
      id: 3,
      titulo: "Proyecto 3",
      descripcion: "Descripción del proyecto 3. Aplicación móvil innovadora.",
      tecnologias: ["React Native", "Firebase", "Redux"],
      enlace: "#",
      github: "#"
    }
  ];

  return (
    <div id="proyectos" className="proyectos">
      <div className="proyectos-container">
        <h2 className="proyectos-title">Mis Proyectos</h2>
        <div className="proyectos-grid">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="proyecto-card">
              <div className="proyecto-card-header">
                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
              </div>
              <div className="proyecto-card-body">
                <p className="proyecto-descripcion">{proyecto.descripcion}</p>
                <div className="proyecto-tecnologias">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="proyecto-card-footer">
                {proyecto.enlace && (
                  <a href={proyecto.enlace} className="proyecto-link" target="_blank" rel="noopener noreferrer">
                    Ver Proyecto
                  </a>
                )}
                {proyecto.github && (
                  <a href={proyecto.github} className="proyecto-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
