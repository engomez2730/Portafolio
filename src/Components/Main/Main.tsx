import "./Main.css";
import "./PhotoSection";
import PhotoSection from "./PhotoSection";
import DescriptionSection from "./DescriptionSection";
const Main = () => {
  return (
    <div className="main">
      <div className="main-contect">
        <PhotoSection />
        <DescriptionSection />
      </div>
    </div>
  );
};

export default Main;
