import React from "react";
// import iconDemo from "../assets/icons/SvgIcon.png";

const ImageComponent = () => {
  const imageStyle = {
    width: "60px",
    height: "60px",
  };

  return (
    <div>
      {/* Your content */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/0/422.png"
        alt="My Image"
        style={imageStyle}
      />
      {/* Rest of your content */}
    </div>
  );
};

export default ImageComponent;
