import styled from "styled-components";


export const Section = styled.footer`
  margin: 0;
  background: #0d0909;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;

  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }

  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;

    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: black;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        // color: #ffc500;
        color: white;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  img {
    filter: brightness(0) invert(1);
    width: 10vw;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;

export const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 0.5rem;
  
  h4 {
    span {
      color: #ffc500;
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 260px) and (max-width: 450px) {
    h4 {
      span {
        display: block;
      }
    }
  }
`;