import React, { useState } from "react";
import { FaTimes, FaBars } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Nav, NavbarContainer, NavLogo, HamburgerIcon, NavMenu, NavItem, NavLinks, CartDiv, CartButton, CartContent} from './Navbar.styles';
import Logo from '../../assets/images/Logo.png'
import { useShoppingCart } from "../../context/ShoppingCartContext";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);
  const { openCart, cartQuantity } = useShoppingCart()


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
                  <NavLinks to ='/menu'>Menu</NavLinks>
                </NavItem>

                <NavItem>
                  <NavLinks to ='/reservation'>Reservation</NavLinks>
                </NavItem>
                <CartDiv>
                  <Link to='/cart'>
                  {cartQuantity > 0 &&(
                  <CartButton onClick={openCart} > 
                    <FiShoppingCart color="white" size={25}/> 
                    <CartContent> {cartQuantity} </CartContent>
                    </CartButton>
                  )}
                  </Link>
                </CartDiv>
                </NavMenu>
            </NavbarContainer>
        </Nav>  
    </>
  )
}

export default Navbar