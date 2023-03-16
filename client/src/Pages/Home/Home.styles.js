import styled from "styled-components";
import { Main } from "../../assets/GlobalStyles";

export const Wrapper = styled(Main)`
min-width: 100%;

${Main}
`

export const OutdoorSection = styled.section`
width: 100%;
position: relative;

img {
    max-width: 100%;
}
`

export const WeddingSection = styled.section`
width: 100%;
position: relative;

img {
    max-width: 100%;
}
`

export const FoodSection = styled.section`
width: 100%;
position: relative;

img {
    max-width: 100%;
}
`

export const LinkOnImage = styled.div`
position: absolute;
top: 70%;
left: 5%;
`