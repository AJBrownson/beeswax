import styled from "styled-components"

export const Wrapper = styled.div`
display: grid;
grid-template-columns: minmax(150px, 45%) 1fr;

@media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
}
`

export const Sidebar = styled.div`

p {
    text-align: center;
    padding: 1rem;
}
`

export const Main = styled.div`
`