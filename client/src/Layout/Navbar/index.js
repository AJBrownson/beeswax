import React, { useState } from "react";
import { FaTimes, FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, HamburgerIcon, NavMenu, NavItem, NavLinks } from './Navbar.styles';


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
                </NavLogo>
                <HamburgerIcon onClick = {handleClick}>
                  {click ? <FaTimes /> : <FaBars />}
                </HamburgerIcon>
                <NavMenu onClick='handleClick' click={click}>
                
                <NavItem>
                  <NavLinks to ='/'>Home</NavLinks>
                </NavItem>
                
                <NavItem>
                  <NavLinks to ='/menu'>Menu</NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks to ='/reservation'>Reservation</NavLinks>
                </NavItem>
               
                </NavMenu>
            </NavbarContainer>
        </Nav>  
    </>
  )
}

export default Navbar