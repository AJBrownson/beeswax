import React from 'react'
import { Wrapper, FirstSection, GalleryRow, GalleryColumn } from "./Portfolio.styles"
import Pizza from "../../assets/images/pizza slice.png"
import Soda from "../../assets/images/soda.png"
import Wine from "../../assets/images/wine.png"

const Portfolio = () => {
  return (
    <>
      <Wrapper>

        <FirstSection>
          <h1>Outdoor</h1>
          <GalleryRow>
            <GalleryColumn>
              <img src={Pizza} alt="" />
            </GalleryColumn>

            <GalleryColumn>
              <img src={Soda} alt="" />
            </GalleryColumn>

             <GalleryColumn>
              <img src={Wine} alt="" />
            </GalleryColumn>

            <GalleryColumn>
              <img src={Wine} alt="" />
            </GalleryColumn>
          </GalleryRow>
        </FirstSection>

        <FirstSection>
          <h1>Vintage</h1>
          <GalleryRow>
            <GalleryColumn>
              <img src={Pizza} alt="" />
            </GalleryColumn>

            <GalleryColumn>
              <img src={Soda} alt="" />
            </GalleryColumn>

             <GalleryColumn>
              <img src={Wine} alt="" />
            </GalleryColumn>

            <GalleryColumn>
              <img src={Wine} alt="" />
            </GalleryColumn>
          </GalleryRow>
        </FirstSection>

      </Wrapper>
    </>
  )
}

export default Portfolio