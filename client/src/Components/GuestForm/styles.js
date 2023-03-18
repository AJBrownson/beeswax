import styled from "styled-components";

export const Formm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 100vw;
  margin: 2em auto;
`;

export const Label = styled.label`
  padding-bottom: 1rem;
`;

export const Input = styled.input`
  border: 1px solid #e9ecef;
  padding: 0.9em 1em;
  margin-bottom: 1rem;
`;

export const Textbox = styled.textarea`
  border: 1px solid #e9ecef;
  padding: 0.9em 1em;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
width: 8rem;
padding: 1rem;
background-color: darkorange;
color: black;
border: transparent;
border-radius: 5px;
cursor: pointer;
`