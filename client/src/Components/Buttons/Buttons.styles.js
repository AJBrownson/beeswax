import styled, { css } from "styled-components";

export const Button = styled.button`
// display: inline-block;
// padding: 1rem 0;
// // margin: 0.5rem 1rem;
// width: 11rem;
// background: transparent;
// color: black;
// border: 1px solid hsl(32, 100%, 59%);
// border-radius: 15px;
// cursor: pointer;

font-size: 1.4rem;
padding: 1rem 4rem;
// border-radius: 15px;
border: none;
background: #ffc500;
color: #000;
transition: 0.2s ease-out;
cursor: pointer;

${props => props.primary && css`
    // background: hsl(32, 100%, 59%);
    // color: black;
    border: transparent;

    &:hover {
        background: #0d0909;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #fff;
    }
    
`}

${props => props.reserve && css`
    background: #ffc500;
    color: black;
    border: transparent;

    :hover {
        background: black;
        color: hsl(0, 0%, 100%);
        transition: 0.5s ease-out;
    }
    
`}

${props => props.cart && css`
    width: 100%;
    position: relative;
    padding: 0 1rem;
    background: #0d0909;
    background: brown;
    // color: black;
    border: transparent;
    border-radius: 50%;
    font-size: 1rem;
    cursor: pointer;

    // :hover {
    //     background: black;
    //     color: hsl(0, 0%, 100%);
    //     transition: 0.5s ease-out;
    // }
    
`}



${props => props.menu && css`
    padding: 1rem;
    background: #ffc500;
    color: black;
    border: transparent;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;

    :hover {
        background: black;
        color: hsl(0, 0%, 100%);
        transition: 0.5s ease-out;
    }
    
`}



// @media screen and (max-width: 768px) {
//   width: 8rem;
// }
`;

