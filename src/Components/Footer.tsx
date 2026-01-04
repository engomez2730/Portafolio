import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import "./Footer.css";

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">{t('footer.about')}</h3>
            <p className="footer-text">
              {t('footer.aboutText')}
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">{t('footer.follow')}</h3>
            <div className="footer-social">
              <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:tu@email.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {t('footer.copyright')} <FaHeart className="heart-icon" /> {t('footer.copyrightBy')}
          </p>
        </div>

        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Volver arriba">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}
