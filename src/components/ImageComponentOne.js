import React from "react";
// import iconDemo from "../assets/icons/SvgIcon.png";

const ImageComponentOne = () => {
  const imageStyle = {
    width: "60px",
    height: "60px",
  };

  return (
    <div>
      {/* Your content */}
      <img
        src="https://www.shutterstock.com/image-vector/user-group-icon-logo-260nw-796864096.jpg"
        alt="My Image"
        style={imageStyle}
      />
      {/* Rest of your content */}
    </div>
  );
};

export default ImageComponentOne;
