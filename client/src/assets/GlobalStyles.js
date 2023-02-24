import styled, {createGlobalStyle} from 'styled-components';



const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Kumbh Sans', sans-serif;
}
`; 

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1700px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;
@media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
}
`;

export const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding-top: 6rem;
min-height: 100vh;
`

export default GlobalStyle;