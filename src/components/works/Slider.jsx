import React from 'react';
import styled from 'styled-components';

const Slider = styled.div`
  height: 350px;
  display: flex;
  position: absolute;
  left: 0;
  transform: translate(${e => -e.currentSlide * 100}vw);
  transition: all 1s ease-in-out;

  @media (max-width: 768px) {
    height: 100vh;
    flex-direction: column;
    justify-content: center;
  }
`;
const SliderContainer = styled.div`
  width: 100vw;
  ${e => e.theme.df.centered};
`;
const SliderItem = styled.div`
  width: 700px;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  ${e => e.theme.df.centered};

  @media (max-width: 768px) {
    width: 90%;
    height: 150px;
    margin: 15px 0;
  }
`;
const Left = styled.div`
  flex: 6;
  height: 80%;
  ${e => e.theme.df.centered};

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const LeftContainer = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-size: 20px;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
  p {
    font-size: 13px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  span {
    font-size: 12px;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
  }
`;
const ImgContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(245, 179, 155);
  ${e => e.theme.df.centered};
  img {
    width: 25px;
    @media (max-width: 768px) {
      width: 15px;
    }
  }
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
const Right = styled.div`
  flex: 6;
  height: 100%;
  ${e => e.theme.df.centered};
  position: relative;
  overflow: hidden;

  img {
    transform: rotate(-10deg);
    height: 100%;
    position: relative;
    z-index: 2;
  }
`;

export default function SliderComponent({data, currentSlide}) {
  return (
    <Slider currentSlide={currentSlide}>
      {data.map(i => (
        <SliderContainer id={i.id}>
          <SliderItem>
            <Left>
              <LeftContainer>
                <ImgContainer>
                  <img src={i.icon} alt="" />
                </ImgContainer>
                <h2>{i.title}</h2>
                <p>{i.desc}</p>
                <span>Projects</span>
              </LeftContainer>
            </Left>
            <Right>
              <img src={i.img} alt="" />
            </Right>
          </SliderItem>
        </SliderContainer>
      ))}
    </Slider>
  );
}
