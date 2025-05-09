import { useState } from "react";

export function MouseHovering(props: {
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const { style, children } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseLeave}
      style={{
        // width: "100px",
        // height: "100px",
        color: isHovered ? "white" : "black",
        transition: "color 0.1s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
