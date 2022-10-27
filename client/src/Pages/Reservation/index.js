import React from 'react'
import Form from '../../Components/Forms'
import { 
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP
} from './Reservation.styles';


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
    </>
  )
}

export default Reservation