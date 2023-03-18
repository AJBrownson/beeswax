import styled from "styled-components"
import { Main } from "../../assets/GlobalStyles"

export const Wrapper = styled(Main)`
max-width: 100%;

${Main}
`

export const Bio = styled.div`
margin-bottom: 1rem;
padding-top: 1rem;
display: grid;
grid-template-columns: minmax(150px, 45%) 1fr;

@media screen and (max-width: 768px) {
    padding: 0;
    display: flex;
    flex-direction: column;
}
`

export const Image = styled.div`

img {
    width: 100%;
}
`

export const Info = styled.div`
padding: 1rem;
display: flex;
flex-direction: column;

h1 {
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    letter-spacing: 3px;
}

p {
    font-size: clamp(1rem, 2.5vw, 2rem);
    margin-bottom: 1rem;
}
`

export const Testimonial = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`

export const Card = styled.div`
padding: 1rem;
display: block;
`

export const ContactSection = styled.div`
margin-top: 2rem;

h1, p {
    text-align: center;
}
`