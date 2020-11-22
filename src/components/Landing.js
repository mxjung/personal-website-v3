import React from 'react';
import styled, { keyframes } from 'styled-components';

// We don't want margin top to be 20px (as it is in Container)
const Container = styled.div`
  border: 1px dotted white;
  width: 100%;
  height: 99vh;
  `;

const Float = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Intro = styled.div`
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  border: 1px dotted red;

  > span {
    transform: translateY(30px);
    opacity: 0;

    // https://css-tricks.com/almanac/properties/a/animation/
    animation-name: ${Float};
    animation-duration: 1s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
  }

  > span:nth-child(1) {
    animation-delay: 0s;
  }
  > span:nth-child(2) {
      animation-delay: 0.8s;
  }
  > span:nth-child(3) {
      animation-delay: 0.8s;
  }
  > span:nth-child(4) {
      animation-delay: 1.5s;
  }
`;


function Landing() {
  return (
    <Container>
      <div id="landing" >
        <Intro >
          <span>Hello, </span>
          <span>I'm </span>
          <span style={{ 'color': '#b4e0e8' }}>Max Jung<br /></span>
          <span>I'm a full-stack web developer.</span>
        </Intro>
      </div>
    </Container>
  );
}

export default Landing;