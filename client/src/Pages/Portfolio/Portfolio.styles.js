import styled from "styled-components"
import { Main } from "../../assets/GlobalStyles"

export const Wrapper = styled(Main)`
min-width: 100%;

${Main}
`

export const FirstSection = styled.section`
display: flex;
flex-direction: column;

h1 {
    font-size: clamp(2.5rem, 10vw, 3rem);
    margin-bottom: 1rem;
    letter-spacing: 3px;
}
`

export const GalleryRow = styled.div`
display: flex;
flex-wrap: wrap;
padding: 0 4px;
`

export const GalleryColumn = styled.div`
flex: 25%;
max-width: 25%;
padding: 0 4px;

img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
}

@media screen and (max-width: 880px) {
    flex: 50%;
    max-width: 50%;
}

@media screen and (max-width: 880px) {
    flex: 100%;
    max-width: 100%;
}
`