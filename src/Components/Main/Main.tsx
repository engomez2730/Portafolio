import "./Main.css";
import "./PhotoSection";
import PhotoSection from "./PhotoSection";
import DescriptionSection from "./DescriptionSection";
import { Image } from "antd";
const Main = () => {
  return (
    <div className="main">
      <Image width={100} src="/main.png" alt="computer" className="computer" />
      <div className="main-contect">
        <PhotoSection />
        <DescriptionSection />
      </div>
    </div>
  );
};

export default Main;
