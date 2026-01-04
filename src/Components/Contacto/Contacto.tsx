import "./Contacto.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaCheckCircle, FaTimesCircle, FaPhone } from "react-icons/fa";
import { useState, useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Contacto = () => {
  const { t } = useLanguage();
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  const [disponibilidad, setDisponibilidad] = useState({
    freelancer: true,
    tiempoCompleto: false
  });

  const toggleDisponibilidad = (tipo: 'freelancer' | 'tiempoCompleto') => {
    setDisponibilidad(prev => ({
      ...prev,
      [tipo]: !prev[tipo]
    }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    if (form.current) {
      const formData = new FormData(form.current);
      
      try {
        const response = await fetch('https://formspree.io/f/mlgdokvq', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          setMessage({ 
            type: 'success', 
            text: t('contact.form.success') || 'Message sent successfully!' 
          });
          form.current.reset();
        } else {
          setMessage({ 
            type: 'error', 
            text: t('contact.form.error') || 'Failed to send message. Please try again.' 
          });
        }
      } catch (error) {
        setMessage({ 
          type: 'error', 
          text: t('contact.form.error') || 'Failed to send message. Please try again.' 
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div id="contacto" className="contacto">
      <div className="contacto-container">
        <h2 className="contacto-title">
          <FaPhone className="title-icon" /> {t('contact.title')}
        </h2>
        <p className="contacto-subtitle">{t('contact.subtitle')}</p>
        
        <div className="contacto-content">
          <div className="contacto-info">
            <h3 className="info-title">{t('contact.infoTitle')}</h3>
            
            <div className="disponibilidad-section">
              <h4 className="disponibilidad-title">{t('contact.availability')}</h4>
              <div className="disponibilidad-items">
                <div 
                  className={`disponibilidad-item ${disponibilidad.freelancer ? 'disponible' : 'no-disponible'}`}
                  onClick={() => toggleDisponibilidad('freelancer')}
                >
                  {disponibilidad.freelancer ? (
                    <FaCheckCircle className="disponibilidad-icon check" />
                  ) : (
                    <FaTimesCircle className="disponibilidad-icon times" />
                  )}
                  <span>{t('contact.freelancer')}</span>
                </div>
                
                <div 
                  className={`disponibilidad-item ${disponibilidad.tiempoCompleto ? 'disponible' : 'no-disponible'}`}
                  onClick={() => toggleDisponibilidad('tiempoCompleto')}
                >
                  {disponibilidad.tiempoCompleto ? (
                    <FaCheckCircle className="disponibilidad-icon check" />
                  ) : (
                    <FaTimesCircle className="disponibilidad-icon times" />
                  )}
                  <span>{t('contact.fullTime')}</span>
                </div>
              </div>
            </div>
            
            <div className="contacto-links">
              <a href="engomezdev@gmail.com" className="contacto-link" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="contacto-icon" />
                <span>tu@email.com</span>
              </a>
              
              <a href="https://github.com/engomez2730" className="contacto-link" target="_blank" rel="noopener noreferrer">
                <FaGithub className="contacto-icon" />
                <span>GitHub</span>
              </a>
              
              <a href="https://www.linkedin.com/in/engomez2730/" className="contacto-link" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="contacto-icon" />
                <span>LinkedIn</span>
              </a>
              
              <a href="https://wa.me/18293959249" className="contacto-link" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="contacto-icon" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="contacto-form-wrapper">
            {message.text && (
              <div className={`form-message ${message.type}`}>
                {message.text}
              </div>
            )}
            <form ref={form} onSubmit={sendEmail} className="contacto-form">
              <div className="form-group">
                <label htmlFor="nombre">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="name" 
                  placeholder={t('contact.form.namePlaceholder')}
                  required 
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.form.email')}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder={t('contact.form.emailPlaceholder')}
                  required 
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="asunto">{t('contact.form.subject')}</label>
                <input 
                  type="text" 
                  id="asunto" 
                  name="subject" 
                  placeholder={t('contact.form.subjectPlaceholder')}
                  required 
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">{t('contact.form.message')}</label>
                <textarea 
                  id="mensaje" 
                  name="message" 
                  rows={6}
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                  disabled={isLoading}
                />
              </div>

              <button type="submit" className="form-submit" disabled={isLoading}>
                {isLoading ? (t('contact.form.sending') || 'Sending...') : t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
