import React, {useState} from 'react';
import styled from 'styled-components';
import {data} from '../../data/worksData';
import SliderComponent from './Slider';

const Container = styled.div`
  background-color: crimson;
  ${e => e.theme.df.centered};
  position: relative;

  .arrow {
    height: 50px;
    position: absolute;
    cursor: pointer;
    @media (max-width: 768px) {
      display: none;
    }

    &.left {
      left: 100px;
      transform: rotate(180deg);
    }
    &.right {
      right: 100px;
    }
  }
`;

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = way => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <Container id="works">
      <SliderComponent data={data} currentSlide={currentSlide} />
      <img
        src="assets/arrow.png"
        className="arrow left"
        onClick={() => handleClick('left')}
        alt=""
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick('right')}
      />
    </Container>
  );
};

export default Works;
