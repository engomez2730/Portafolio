import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main/Main";
import Proyectos from "./Components/Proyectos/Proyectos";
import Contacto from "./Components/Contacto/Contacto";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
