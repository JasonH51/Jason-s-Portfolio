import React from 'react';
import styled from 'styled-components';
import {data} from '../../data/testi';

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 50px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

const CardContainer = styled.div`
  ${e => e.theme.df.centered}

  width: 100%;
  height: 80%;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: ${props => (props.featured ? '300px' : '250px')};
  height: ${props => (props.featured ? '75%' : '70%')};
  margin: ${props => (props.featured ? '0 30px' : '')};
  border-radius: 10px;
  box-shadow: 0 0 15px -8px black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  transition: all 1s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    height: 180px;
  }
  ${props =>
    props.featured ? '@media (max-width: 768px) { width: 250px;height:180px; margin:1;}' : ''}
`;

const Top = styled.div`
  ${e => e.theme.df.centered};
`;

const LeftImg = styled.img`
  height: 25px;
`;
const CenterImg = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 30px;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
const RightImg = styled.img`
  height: 25px;
`;

const Center = styled.div`
  padding: 10px;
  background-color: #e2d0d4;
  border-radius: 10px;
`;

const Bottom = styled.div`
  ${e => e.theme.df.centered};
  flex-direction: column;
  h3 {
    margin-bottom: 5px;
  }
  h4 {
    color: gray;
  }
`;

const Testimonials = () => {
  return (
    <Container id="testimonials">
      <h1>Testimonials</h1>
      <CardContainer>
        {data.map(i => (
          <Card id={i.id} featured={i.featured}>
            <Top>
              <LeftImg src="assets/right-arrow.png" alt="" />
              <CenterImg src={i.img} alt="" />
              <RightImg src={i.icon} alt="" />
            </Top>
            <Center>{i.desc}</Center>
            <Bottom>
              <h3>{i.name}</h3>
              <h4>{i.title}</h4>
            </Bottom>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default Testimonials;
