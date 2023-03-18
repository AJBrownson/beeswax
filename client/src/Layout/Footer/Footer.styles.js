import styled from "styled-components";

export const Wrapper = styled.footer`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 0px;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Socials = styled.div`
  padding: 1rem;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
`;
