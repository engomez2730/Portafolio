import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageModal.css';

const LanguageModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setLanguage, t } = useLanguage();

  useEffect(() => {
    const hasSelected = localStorage.getItem('languageSelected');
    if (!hasSelected) {
      setIsOpen(true);
    }
  }, []);

  const handleLanguageSelect = (lang: 'es' | 'en') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="language-modal-overlay">
      <div className="language-modal">
        <h2 className="language-modal-title">{t('language.title')}</h2>
        <p className="language-modal-subtitle">{t('language.subtitle')}</p>
        
        <div className="language-options">
          <button 
            className="language-option spanish"
            onClick={() => handleLanguageSelect('es')}
          >
            <span className="language-flag">🇪🇸</span>
            <span className="language-name">Español</span>
          </button>
          
          <button 
            className="language-option english"
            onClick={() => handleLanguageSelect('en')}
          >
            <span className="language-flag">🇺🇸</span>
            <span className="language-name">English</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
