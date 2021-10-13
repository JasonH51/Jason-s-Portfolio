import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {init} from 'ityped';

const Container = styled.div`
  background-color: white;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 0.5;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 700px;
  height: 700px;
  background-color: crimson;
  border-radius: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  float: right;
  @media (max-width: 768px) {
    height: 300px;
    align-items: flex-end;
  }
`;

const Image = styled.img`
  width: 100%;
  @media (max-width: 768px) {
  }
`;

const Right = styled.div`
  flex: 0.5;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }

  a {
    position: absolute;
    bottom: 10px;
    left: 40%;

    svg {
      width: 30px;
      animation: arrowBlink 2s infinite;
    }
    @keyframes arrowBlink {
      100% {
        opacity: 0;
      }
    }
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding-left: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
    padding-left: 0px;
  }

  h1 {
    font-size: 60px;
    margin: 10px 0;
    @media (max-width: 768px) {
      font-size: 40px;
    }
  }
  h2 {
    font-size: 35px;
  }
  h3 {
    font-size: 30px;
    width: 500px;
    @media (max-width: 768px) {
      width: 213px;
      font-size: 22px;
    
    }
    span {
      font-size: inherit;
      color: red;
    }
    .ityped-cursor {
      font-size: 2.2rem;
      opacity: 1;
      -webkit-animation: blink 1s infinite;
      -moz-animation: blink 1s infinite;
      animation: blink 1s infinite;
      animation-direction: alternate;
    }

    @keyframes blink {
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    @-webkit-keyframes blink {
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    @-moz-keyframes blink {
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 20,
      showCursor: true,
      strings: [' Software Engineer', '  Full Stack Developer']
    });
  }, []);

  return (
    <Container id="intro">
      <Left>
        <ImageContainer>
          <Image src="https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg"></Image>
        </ImageContainer>
      </Left>
      <Right>
        <Wrapper>
          <h2>Hi There, I'm</h2>
          <h1>Jason Horton</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </Wrapper>
        <a href="#portfolio">
          <KeyboardArrowDownIcon fontSize="large" />
        </a>
      </Right>
    </Container>
  );
};

export default Intro;
