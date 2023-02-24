# Mouthpiece Cafe


import React, { useState } from "react";
import { FaTimes, FaBars } from 'react-icons/fa';
// import { Link } from 'react-router-dom'
import { Nav, NavbarContainer, NavLogo, HamburgerIcon, NavMenu, NavItem, NavLinks} from './Navbar.styles';
// import Logo from '../../assets/images/Logo.png'


const Navbar = () => {

  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);


  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to ='/' onClick={closeMobileMenu}>
                  {/* <NavIcon /> */}
                  Mouthpiece
                    {/* <img src={Logo} alt="Mouthpiece Cafe's Logo" /> */}
                </NavLogo>
                <HamburgerIcon onClick = {handleClick}>
                  {click ? <FaTimes /> : <FaBars />}
                </HamburgerIcon>
                <NavMenu onClick='handleClick' click={click}>
                
                <NavItem>
                  <NavLinks to ='/'>Home</NavLinks>
                </NavItem>
                
                <NavItem>
                  <NavLinks to ='/portfolio'>Portfolio</NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks to ='/about'>About</NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks to ='/guest'>Guest</NavLinks>
                </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>  
    </>
  )
}

export default Navbar