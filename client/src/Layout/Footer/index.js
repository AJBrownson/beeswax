import React from "react";
import { Wrapper, Socials, Copyright } from "./Footer.styles";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Socials>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </Socials>
        <Copyright>&#169; All Rights Reserved 2023</Copyright>
        <div>Made with &#9829; by Anni</div>
      </Wrapper>
    </>
  );
};

export default Footer;
