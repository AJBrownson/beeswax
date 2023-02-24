import { useState } from 'react'
import { HamburgerIcon, Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks } from './Navbar.styles'
import {FaTimes, FaBars} from 'react-icons/fa'


const Navbar = () => {
  const [click, setClick] = useState(false)
  const closeMobileMenu = () => setClick(false)
  const handleClick = () => setClick(!click)

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>BeesWax</NavLogo>
          <HamburgerIcon onClick = {handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </HamburgerIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/portfolio">Portfolio</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/guest">Guest</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar