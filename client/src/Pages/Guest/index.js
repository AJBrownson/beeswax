import React from 'react'
import { Wrapper, Sidebar, Main } from "./Guest.styles"
import GuestForm from "../../Components/GuestForm"

const Guest = () => {
  return (
    <>
      <Wrapper>
        <Sidebar>
          <p>Please take a moment to leave a nice comment
             in my guest book to share your experience 
             with other visitors!</p>
          <GuestForm />
        </Sidebar>
        <Main></Main>
      </Wrapper>
    </>
  )
}

export default Guest