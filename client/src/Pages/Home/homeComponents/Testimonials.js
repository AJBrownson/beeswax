import React from 'react'
import { TestimonialSection, HeadingDiv } from '../Home.styles'
import Avatar from '../../../assets/images/avatar-3.jpg'
import {Cards, Card, AvatarInfo, Info, Quote} from '../Home.styles'

const Testimonials = () => {
  return (
    <>
        <TestimonialSection>
            <HeadingDiv>
                <h1>TESTIMONIALS</h1>
                <h3>What our customers are saying...</h3>
            </HeadingDiv>
            <Cards>
                <Card>
                    <AvatarInfo>
                        <img src={Avatar} alt='' />
                        <Info>
                            <h1>John Doe</h1>
                            <p>CEO Kingsway</p>
                        </Info>
                    </AvatarInfo>
                    <Quote>
                        <p>"Your pizzas are top notch. I would like to personally thank you for your outstanding
                  service."</p>
                    </Quote>
                </Card>

                <Card>
                    <AvatarInfo>
                        <img src={Avatar} alt='' />
                        <Info>
                            <h1>John Doe</h1>
                            <p>CEO Kingsway</p>
                        </Info>
                    </AvatarInfo>
                    <Quote>
                        <p>"Your pizzas are top notch. I would like to personally thank you for your outstanding
                  service."</p>
                    </Quote>
                </Card>

                <Card>
                    <AvatarInfo>
                        <img src={Avatar} alt='' />
                        <Info>
                            <h1>John Doe</h1>
                            <p>CEO Kingsway</p>
                        </Info>
                    </AvatarInfo>
                    <Quote>
                        <p>"Your pizzas are top notch. I would like to personally thank you for your outstanding
                  service."</p>
                    </Quote>
                </Card>
            </Cards>
        </TestimonialSection>
    </>
  )
}

export default Testimonials