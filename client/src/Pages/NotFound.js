import React from 'react'
import styled from 'styled-components'
import BG from '../assets/images/image404b.png'

export const Wrapper = styled.section`
background-image: url(${BG});
display: flex;
text-align: center;
height: 80vh;
justify-content: center;
align-items: center;
`

export const HeroH1 = styled.h1`
font-size: 7rem;
`
export const P = styled.p`
font-size: 1rem;
`

export const BottomDiv = styled.div`

`


const NotFound = () => {
  return (
    <>
      <Wrapper>
        <div>
        <HeroH1>404</HeroH1>
        <P>whoops...this page doesn't exist</P>
        </div>
        <div>
          {/* <img src={BG} alt='' /> */}
        </div>
      </Wrapper>
    </>
  )
}

export default NotFound