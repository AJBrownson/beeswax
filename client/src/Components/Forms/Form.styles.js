import styled from 'styled-components'

export const Card = styled.div`
display: flex;
flex-direction: column;
padding: 5%;
align-items: center;
justify-content: center;
text-align: center;
background: #ff9d2e0e;
color: black;

h2 {
    font-size: 25px;
    margin-bottom: 5%;
}
`;

export const Formm = styled.form`
width: 100%;
display: flex;
flex-direction: column;

`;

export const Select = styled.select`
height: 70px;
margin-bottom: 20px;
border: 1px solid orange;
border-radius: 20px;

:active {
    border: 1px solid orange;
}
`;

export const Date = styled.input`
height: 70px;
margin-bottom: 20px;
border: 1px solid orange;
border-radius: 20px;
`;

export const Time = styled.input`
height: 70px;
margin-bottom: 20px;
border: 1px solid orange;
border-radius: 20px;

@media screen and (max-width: 991px) {
    margin-bottom: 30px;
}
`;

export const TextArea = styled.input`
height: 100px;
margin-bottom: 20px;
border: 1px solid orange;
border-radius: 20px;
`;