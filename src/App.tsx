import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main/Main";
import Proyectos from "./Components/Proyectos/Proyectos";
import Contacto from "./Components/Contacto/Contacto";
import LanguageModal from "./Components/LanguageModal";
import { LanguageProvider } from "./contexts/LanguageContext";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <LanguageModal />
        <Header />
        <Main />
        <Proyectos />
        <Contacto />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
