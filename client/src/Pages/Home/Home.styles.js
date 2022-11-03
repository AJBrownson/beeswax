import styled from 'styled-components';
import BG from '../../assets/images/pizza-3.jpg'



//      STYLING FOR THE HERO SECTION
export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${BG});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;



// STYLING FOR THE MENU SECTION
export const MenuSection = styled.section`
text-align: center;
height: 80vh;
padding: 0 20px;

h1 {
  font-size: clamp(2.5rem, 10vw, 5rem);
}

p {
  font-size: clamp(1rem, 2.5vw, 3rem);
  margin-bottom: 1rem;
}
`

// export const MenuSectionContainer = styled.div`
// display: flex;
// flex-direction: row;
// margin-top: 25px;
// `


// export const MenuSectionCard = styled.div`
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
// `

// export const MenuCardContent = styled.div`
// padding: 20px;
// `



//    STYLING FOR CTA SECTION

export const CTAContainer = styled.div`
// background: linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
background: white;
height: 100vh;
background-position: center;
background-size: cover;
`;

export const CTASection = styled.section`
display: flex;
flex-direction: row;

@media screen and (max-width: 768px) {
  flex-direction: column;
}
`

export const CTAContent = styled.div`
display: flex;
color: black;
flex-direction: column;
width: 40%;
padding: 2rem;
margin-top: 5%;

h1 {
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  // box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
}

p {
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
}

@media screen and (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    margin-top: 0;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 30px;
        margin-bottom: 5%;
    }

    p {
        font-size: 15px;
    }
}
`

export const ImageDiv = styled.div`
width: 60%;
position: relative;

@media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 15%;
    img {
        width: 90%;
        
    }
}
`


//      STYLING FOR DELIVERY SECTION 


export const DeliverySection = styled.section`
position: relative;
display: flex;
width: 100%;
height: 100vh;
margin-bottom: 5%;

@media screen and (max-width: 768px) {
    flex-direction: column;
    height: 80vh;
    margin-bottom: 0;
}
`


export const DeliveryContent = styled.div`
display: flex;
color: black;
flex-direction: column;
width: 40%;
padding: 2rem;
margin-top: 10%;

h1 {
    font-size: 50px;
}

span {
    color: yellow;
}

p {
    font-size: 20px;
}

@media screen and (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    margin-top: 0;

    h1 {
        font-size: 30px;
        margin-bottom: 5%;
    }

    p {
        font-size: 15px;
    }
}
`


export const BtnDiv = styled.div`
margin: 5% 0;
`


export const DeliveryImage = styled.div`
width: 60%;
position: relative;

@media screen and (max-width: 768px) {
    width: 100%;
    // margin-top: 15%;

    img {
        width: 60%;
        
    }
}
`

export const Cloud = styled.img`
width: 80%;
position: absolute;
top: 15%;
left: 20%;
`

export const Boy = styled.img`
width: 80%;
position: absolute;
top: 15%;
left: 10%;
`




//        STYLING FOR TESTIMONIALS
export const TestimonialSection = styled.section`
height: 80vh;
background: hsl(38, 44%, 96%);

@media screen and (max-width: 768px) {
  height: 100vh;
  margin-bottom: 3rem;
}
`

export const HeadingDiv = styled.div`
display: flex;
flex-direction: column;
text-align: center;
padding: 2rem;

h1 {
  margin-bottom: 0.5rem;
}

h3 {
  font-size: 3rem;
}

@media screen and (max-width: 768px) {
  padding: 0;

  h3 {
    font-size: 1rem;
  }
}
`

export const Cards = styled.div`
display: flex;
padding: 40px;
justify-content: space-between;
align-items: center;


@media screen and (max-width: 768px) {
  flex-direction: column;
}
`

export const Card = styled.div`
background: white;
display: flex;
flex-direction: column;
width: 50%;
height: 100%;
padding-bottom: 5rem;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
transition: 0.3s;


@media screen and (max-width: 768px) {
  width: 100%;
  margin-bottom: 1.5rem;
  padding-bottom: 0;
}
`

export const AvatarInfo = styled.div`
display: flex;
padding: 10px;

img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 3%;
}
`

export const Info = styled.div`
display: flex;
flex-direction: column;

h1 {
  font-size: 15px;
}
`

export const Quote = styled.div`
display: flex;
padding: 1rem;
`


