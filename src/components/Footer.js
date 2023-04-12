import React from "react";
import FooterImage from "../assets/Vector.png";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={FooterImage} alt="Footer" className="footer-image" />
    </footer>
  );
};

export default Footer;
