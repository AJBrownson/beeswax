import React from 'react'
import { Wrapper, Bio, Image, Info, Testimonial, Card, ContactSection } from "./About.styles"
import Hoodie from "../../assets/images/Hoodie.png"
import { ContactButton } from "../../Components/Button"
import ContactForm from '../../Components/ContactForm'

const About = () => {
  return (
    <>
      <Wrapper>
        <Bio>
          <Image>
            <img src={Hoodie} alt="" />
          </Image>
          <Info>
            <h1>Hi, I'm Beverly Watson</h1>
            <p>I'm an accomplished photographer known for capturing the beauty of the world around me.
               I capture the raw beauty of nature and the intimate moments of human connection, always telling a story. 
               Through my lens, I invite the viewer to appreciate the beauty that surrounds us and see the world in a new light.</p>
               <a href='#contact'>
                <ContactButton />
               </a>
          </Info>
        </Bio>
        <Testimonial>
          <h1>Testimonials</h1>
          <Card>
            <h3>Johannes Berger</h3>
            <p>
            "Beverly has a keen eye for detail and was able to capture our special day perfectly - we couldn't be happier with the results!"
            </p>
          </Card>

          <Card>
            <h3>Stigg Larson</h3>
            <p>
            "Working with Beverly was an absolute pleasure, they put us at ease and made the entire photoshoot fun and enjoyable - the final images were beyond our expectations."
            </p>
          </Card>

          <Card>
            <h3>Keila Parker</h3>
            <p>
            "I am blown away by the results of my business's branding photos - Beverly really listened to my vision and brought it to life through their high-quality and professional images."
            </p>
          </Card>
        </Testimonial>
        <div id='contact'>
          <ContactSection>
          <h1>Contact Me</h1>
          <p>I typically reply within 30 minutes</p>
          <ContactForm />
          </ContactSection>
        </div>
      </Wrapper>
    </>
  )
}

export default About