import styled from "styled-components";
import {Link} from 'react-router-dom';
import { Container } from '../../assets/GlobalStyles'


export const Nav = styled.nav`
margin: 0;
height: 80px;
// position: fixed;
min-width: 100%;
background: #fff;
border-bottom: #0d0909;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 18px;
border-bottom: 1px solid hsl(55, 12%, 82%);
`;


export const NavbarContainer = styled(Container)`
height: 80px;
display: flex;
justify-content: space-between;
${Container}
`;


export const NavLogo = styled(Link)`
color: #000;
justify-self: flex-start;
text-decoration: none;
font-size: 2rem;
font-weight: 600;
display: flex;
align-items: center;
`;


export const HamburgerIcon = styled.div`
display: none;

@media screen and (max-width: 991px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 68%);
    font-size: 1.8rem;
    cursor: pointer;
    color: black;
}
`;



export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-111%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #ffc500;
}
`;

export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

&:hover {
    border-bottom: 2px solid #000016;
}

@media screen and (max-width: 991px) {
    width: 100%;
    &:hover {
        border: none;
    }
}
`;


export const NavLinks = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
list-style: none;
padding: 0.5rem 1rem;
height: 100%;
color: black;
cursor: pointer;

// &:active {
//         color: blue;
//     }
    
@media screen and (max-width: 991px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
        color: black;
        transition: all 0.3s ease;
    }
}
`;