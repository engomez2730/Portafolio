import "./Contacto.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contacto = () => {
  return (
    <div id="contacto" className="contacto">
      <div className="contacto-container">
        <h2 className="contacto-title">Contacto</h2>
        <p className="contacto-subtitle">¿Tienes un proyecto en mente? ¡Hablemos!</p>
        
        <div className="contacto-content">
          <div className="contacto-info">
            <h3 className="info-title">Información de Contacto</h3>
            <p className="info-text">
              Estoy disponible para trabajar en proyectos freelance o a tiempo completo.
              No dudes en contactarme.
            </p>
            
            <div className="contacto-links">
              <a href="mailto:tu@email.com" className="contacto-link" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="contacto-icon" />
                <span>tu@email.com</span>
              </a>
              
              <a href="https://github.com/tuusuario" className="contacto-link" target="_blank" rel="noopener noreferrer">
                <FaGithub className="contacto-icon" />
                <span>GitHub</span>
              </a>
              
              <a href="https://linkedin.com/in/tuusuario" className="contacto-link" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="contacto-icon" />
                <span>LinkedIn</span>
              </a>
              
              <a href="https://wa.me/1234567890" className="contacto-link" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="contacto-icon" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="contacto-form-wrapper">
            <form className="contacto-form">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  placeholder="Tu nombre"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="tu@email.com"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="asunto">Asunto</label>
                <input 
                  type="text" 
                  id="asunto" 
                  name="asunto" 
                  placeholder="Asunto del mensaje"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  rows={6}
                  placeholder="Tu mensaje..."
                  required
                />
              </div>

              <button type="submit" className="form-submit">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
