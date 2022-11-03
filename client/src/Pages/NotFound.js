import React from 'react'
import styled from 'styled-components'


export const Wrapper = styled.section`
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



const NotFound = () => {
  return (
    <>
      <Wrapper>
        <div>
        <HeroH1>404</HeroH1>
        <P>whoops...this page doesn't exist</P>
        </div>
      </Wrapper>
    </>
  )
}

export default NotFound