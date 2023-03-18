import React from "react";
import {
  Wrapper,
  OutdoorSection,
  LinkOnImage,
  WeddingSection,
  FoodSection,
} from "./Home.styles";
import Fast from "../../assets/images/fastfood.jpg";
import { Link } from "react-router-dom";
import { GButton } from "../../Components/Button";

const Home = () => {
  return (
    <>
      <Wrapper>
        <OutdoorSection>
          <img src={Fast} alt="" />
          <LinkOnImage>
            <Link to="/my-portfolio">
              <GButton />
            </Link>
          </LinkOnImage>
        </OutdoorSection>

        <WeddingSection>
          <img src={Fast} alt="" />
          <LinkOnImage>
            <Link to="/my-portfolio">
              <GButton />
            </Link>
          </LinkOnImage>
        </WeddingSection>

        <FoodSection>
          <img src={Fast} alt="" />
          <LinkOnImage>
            <Link to="/my-portfolio">
              <GButton />
            </Link>
          </LinkOnImage>
        </FoodSection>

        {/* <div className='vintage foodporn wedding bells'>
                    <img src={} alt='' />
                    <div className='link'>
                        <Link to='/' />
                    </div>
                </div> */}
      </Wrapper>
    </>
  );
};

export default Home;
