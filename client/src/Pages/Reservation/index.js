import React from 'react'
import Form from '../../Components/Forms'
// import { Section, Div } from './Reservation.styles'
import { 
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP
} from './Reservation.styles';
// import BG from '../../Assets/images/reservation4.png'

const Reservation = () => {
  return (
    <>
      <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>Wanna eat out later?</HeroH1>
          <HeroP>Make a reservation </HeroP>
        </HeroItems>
      </HeroContent>
      </HeroContainer>
      <Form />
      
      {/* <Section>
        <Div>
          <img src={BG} alt='' />
          <h1>RESERVATION</h1>
        </Div>
      <Form />
      </Section> */}
    </>
  )
}

export default Reservation