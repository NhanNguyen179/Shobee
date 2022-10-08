import * as React from "react";
import logo from "../../assets/new_images/Logo.png";

const Logo = () => {
  return (
    <div style={{height: '42px'}}>
      <img
        src={logo}
        style={{  objectFit: 'contain', cursor: "pointer" }}
        alt="alt_icon"
      />
    </div>
  );
};
export default Logo;
