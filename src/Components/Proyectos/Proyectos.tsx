import "./Proyectos.css";
import { FaFolderOpen } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";

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
  const { t } = useLanguage();

  const proyectos: Proyecto[] = [
    {
      id: 1,
      titulo: t('Vendify'),
      descripcion: t('Punto de venta desarrollado para facilitar las transacciones comerciales y la gestión de inventarios en tiendas físicas.'),
      tecnologias: ["React", "TypeScript", "CSS"],
      imagen: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      enlace: "#",
      github: "#"
    },
    {
      id: 2,
      titulo: t('projects.project2.title'),
      descripcion: t('Assesment de Seguridad para evaluar y mejorar la protección de sistemas y datos en las empresas, y asi garantizar la seguridad.'),
      tecnologias: ["Node.js", "SQL", "React"],
      imagen: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      enlace: "#",
      github: "#"
    },
    {
      id: 3,
      titulo: t('projects.project3.title'),
      descripcion: t('Aplicacion para capturar estadisticas de partidos de baloncesto en tiempo real para reportes de efectividad de jugadores.'),
      tecnologias: ["SQL", "Node", "React"],
      imagen: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      enlace: "#",
      github: "#"
    }
  ];

  return (
    <div id="proyectos" className="proyectos">
      <div className="proyectos-container">
        <h2 className="proyectos-title">
          <FaFolderOpen className="title-icon" /> {t('projects.title')}
        </h2>
        <div className="proyectos-grid">
          {proyectos.map((proyecto) => (
            <div 
              key={proyecto.id} 
              className="proyecto-card"
            >
              {proyecto.imagen && (
                <div className="proyecto-imagen-container">
                  <img src={proyecto.imagen} alt={proyecto.titulo} className="proyecto-imagen" />
                </div>
              )}
              <div className="proyecto-card-header">
                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
              </div>
              <div className="proyecto-card-body">
                <p className="proyecto-descripcion">{proyecto.descripcion}</p>
                <div className="proyecto-tecnologias">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span 
                      key={index} 
                      className={`tech-tag ${tech.toLowerCase().replace(/\s+/g, '').replace('.js', '').replace('js', '')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="proyecto-card-footer">
                {proyecto.enlace && (
                  <a href={proyecto.enlace} className="proyecto-link" target="_blank" rel="noopener noreferrer">
                    {t('projects.viewProject')}
                  </a>
                )}
                {proyecto.github && (
                  <a href={proyecto.github} className="proyecto-link" target="_blank" rel="noopener noreferrer">
                    {t('projects.github')}
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
