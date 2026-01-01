import React from "react";


type ImagenProps = {
  name: string; // nombre del archivo en src/assets, ej. "JS.png"
  maxWidth?: string | number; // ej. "200px" o 200
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
};

const Imagen: React.FC<ImagenProps> = ({
  name,
  maxWidth,
  alt,
  className,
  style,
}) => {
  const finalMaxWidth = typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth;

  return (
    <img
      src={name}
     
      alt={alt ?? name}
      className={className}
      style={{
        width: "100%",
        maxWidth: finalMaxWidth,
        height: "auto",
        objectFit: "cover",
        ...style,
      }}
    />
  );
};

export default Imagen;