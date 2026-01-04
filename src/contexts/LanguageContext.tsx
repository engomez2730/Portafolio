import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    
    // Main/Hero - Description Section
    'hero.name': 'Enderson Gómez',
    'hero.title': 'Desarrollador Web y Programador SQL',
    'hero.description': 'Soy un Desarrollador Web y Programador SQL apasionado por crear aplicaciones modernas y responsivas, y descubrir información valiosa a partir de datos. Tengo experiencia en desarrollo frontend con React.js, TypeScript y JavaScript, y desarrollo backend con Node.js, Express.js, y bases de datos como MongoDB, SQL Server y PostgreSQL.',
    'hero.greeting': '¡Hola! Soy',
    'hero.role': 'Desarrollador Full Stack',
    'hero.descriptionShort': 'Apasionado por crear experiencias digitales únicas',
    'hero.cta': 'Ver Proyectos',
    
    // Projects
    'projects.title': 'Mis Proyectos',
    'projects.project1.title': 'Vendify',
    'projects.project1.description': 'Descripción del proyecto 1. Una aplicación web moderna y responsive.',
    'projects.project2.title': 'QuizApp',
    'projects.project2.description': 'Descripción del proyecto 2. Sistema completo de gestión.',
    'projects.project3.title': 'Score Basketball',
    'projects.project3.description': 'Descripción del proyecto 3. Aplicación móvil innovadora.',
    'projects.viewProject': 'Ver Proyecto',
    'projects.github': 'GitHub',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Tienes un proyecto en mente? ¡Hablemos!',
    'contact.infoTitle': 'Información de Contacto',
    'contact.availability': 'Disponibilidad',
    'contact.freelancer': 'Freelancer',
    'contact.fullTime': 'Tiempo Completo',
    'contact.form.name': 'Nombre',
    'contact.form.namePlaceholder': 'Tu nombre',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'tu@email.com',
    'contact.form.subject': 'Asunto',
    'contact.form.subjectPlaceholder': 'Asunto del mensaje',
    'contact.form.message': 'Mensaje',
    'contact.form.messagePlaceholder': 'Tu mensaje...',
    'contact.form.submit': 'Enviar Mensaje',
    
    // Footer
    'footer.about': 'Sobre Mí',
    'footer.aboutText': 'Desarrollador apasionado por crear experiencias digitales increíbles.',
    'footer.follow': 'Sígueme',
    'footer.copyright': 'Portafolio. Hecho con',
    'footer.copyrightBy': 'por Ti',
    
    // Language Modal
    'language.title': 'Selecciona tu idioma',
    'language.subtitle': 'Choose your language',
    'language.spanish': 'Español',
    'language.english': 'English',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Main/Hero - Description Section
    'hero.name': 'Enderson Gómez',
    'hero.title': 'Web Developer and SQL Programmer',
    'hero.description': 'I\'m a Web Developer and SQL Programmer passionate about building modern, responsive applications and uncovering insights from data. I have experience in frontend development with React.js, TypeScript, and JavaScript, and backend development with Node.js, Express.js, and databases like MongoDB, SQL Server, and PostgreSQL.',
    'hero.greeting': 'Hello! I\'m',
    'hero.role': 'Full Stack Developer',
    'hero.descriptionShort': 'Passionate about creating unique digital experiences',
    'hero.cta': 'View Projects',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.project1.title': 'Vendify',
    'projects.project1.description': 'Project 1 description. A modern and responsive web application.',
    'projects.project2.title': 'QuizApp',
    'projects.project2.description': 'Project 2 description. Complete management system.',
    'projects.project3.title': 'Score Basketball',
    'projects.project3.description': 'Project 3 description. Innovative mobile application.',
    'projects.viewProject': 'View Project',
    'projects.github': 'GitHub',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Have a project in mind? Let\'s talk!',
    'contact.infoTitle': 'Contact Information',
    'contact.availability': 'Availability',
    'contact.freelancer': 'Freelancer',
    'contact.fullTime': 'Full Time',
    'contact.form.name': 'Name',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.subject': 'Subject',
    'contact.form.subjectPlaceholder': 'Message subject',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Your message...',
    'contact.form.submit': 'Send Message',
    
    // Footer
    'footer.about': 'About Me',
    'footer.aboutText': 'Developer passionate about creating amazing digital experiences.',
    'footer.follow': 'Follow Me',
    'footer.copyright': ' Made with',
    'footer.copyrightBy': 'by Enderson',
    
    // Language Modal
    'language.title': 'Select your language',
    'language.subtitle': 'Selecciona tu idioma',
    'language.spanish': 'Español',
    'language.english': 'English',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'es';
  });

  const [hasSelectedLanguage, setHasSelectedLanguage] = useState(() => {
    return localStorage.getItem('languageSelected') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    if (hasSelectedLanguage) {
      localStorage.setItem('languageSelected', 'true');
    }
  }, [language, hasSelectedLanguage]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setHasSelectedLanguage(true);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
