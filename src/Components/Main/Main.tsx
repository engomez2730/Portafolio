import "./Main.css";
import "./PhotoSection";
import PhotoSection from "./PhotoSection";
import DescriptionSection from "./DescriptionSection";
const Main = () => {
  return (
    <div id="inicio" className="main">
      <div className="main-contect">
            <DescriptionSection />
        <PhotoSection />
    
      </div>
    </div>
  );
};

export default Main;
