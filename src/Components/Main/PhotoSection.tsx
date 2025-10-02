import { Image } from "antd";

const PhotoSection = () => (
  <div className="main-photo">
    <Image
      src="me.jpg"
      alt="Imagen"
      style={{
        width: "100%",
        maxWidth: "500px",
        height: "auto",
        objectFit: "cover",
      }}
      preview={false}
    />
  </div>
);

export default PhotoSection;
