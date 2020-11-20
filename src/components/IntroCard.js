import React from 'react';
import './IntroCard.css';
import Navigation from "./Navigation";
import styled from 'styled-components';
// import profilePicSrc from "./images/profile-pic.jpg";
import ProfileCarousel from "./ProfileCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // border: 2px dotted black;
  height: auto;
`;

const Welcome = styled.div`
  display: flex;
  justify-content: center;
  // border: 2px solid blue;
  height: auto;
  font-size: 40px;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 700;
  // padding: 20px 0px 20px 20px;
  text-align: center;
  line-height: 110%;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  // border: 2px solid red;

  @media only screen and (max-width: 790px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProfilePic = styled.div`
  width: 60%;
  height: 100%;
  // margin-left: 25px;
  // border: 2px solid blue;

  @media only screen and (max-width: 790px) {
    width: 40%;
    height: 100%;
    margin: 0px 0px 12px 0px;
    display: flex;
    justify-content: center;
  }
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  max-width: 100%;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-style: italic;

  padding: 10px 0px;
  line-height: 120%;
  margin-bottom: 20px;

  // border: 2px solid blue;

  @media only screen and (max-width: 790px) {
    max-width: 400px;
    width: 90%;
  }
`;

function IntroCard() {
  return (
    <Intro>
      <Welcome>
        Hello, I'm Max Jung
      </Welcome>
      <Profile>
        <ProfilePic>
          <ProfileCarousel width="140px"/>
          {/* <img src={profilePicSrc} alt="profile-pic" style={{ 'height': '100px' }} /> */}
        </ProfilePic>
        <AboutMe>
          I've worn a lot of hats
        </AboutMe>
      </Profile>
      <Navigation />
    </Intro>
  );
}

export default IntroCard;