import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { Section, LowerFooter } from './Footer.styles'

const Footer = () =>{
  return (
    <div className="footer">
      <Section>
        <div className="brand container">
            MouthPiece
          {/* <img src={logo} alt="" /> */}
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
            repudiandae.
          </p>

          <ul>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebookF />
            </li>
            {/* <li>
              <GrLinkedinOption />
            </li> */}
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>Contact Us</h3>
          </div>
          <p>+234 12345678</p>
          <p>mouthpiece@gmail.com</p>
          <p>1, Ikpokpan Avenue off Sapele Road G.R.A, Benin City.</p>
        </div>
        <div className="about container">
          <div className="title">
            <h3>Opening Hours</h3>
          </div>
          <p>Monday - Friday: 07:00AM - 11:00PM</p>
          <p>Saturday: 07:00AM - 12:00PM</p>
          <p>Sunday: 07:00 AM - 12:00PM</p>
        </div>
      </Section>
      <LowerFooter className="lower__footer">
        <h4>
         &copy; 2022 <span>Mouthpiece</span>
        </h4>
      </LowerFooter>
    </div>
  );
}

export default Footer