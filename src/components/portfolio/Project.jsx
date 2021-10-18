import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  height: 100%;
  overflow: hidden;
  @media (max-width: 768px) {
    flex: 0.8;
  }
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Right = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.5;
  padding: 5px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin: 1em;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  margin: 2em;
  border-top: 1px solid;
  p {
    margin: 0 2em;
    margin-bottom: 2em;
  }
  @media (max-width: 768px) {
    flex: 3;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-wrap: wrap;
  border-top: 1px solid;
  @media (max-width: 768px) {
    flex: 3;
  }
`;

const Item = styled.div`
  border: 1px solid;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex: 3;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ItemBottom = styled.div`
  border-top: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Project = ({data}) => {
  return (
    <Wrapper>
      <Left>
        <ImageContainer>
          <img src={data[0]?.img} alt="" />
        </ImageContainer>
      </Left>
      <Right>
        <Top>
          <h1>{data[0]?.title}</h1>
        </Top>
        <Center>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vitae deleniti
            mollitia assumenda facere perferendis atque saepe voluptas explicabo voluptatem!
          </p>
          <Links>
            <span>Links</span>
            <span>Links</span>
            <span>Links</span>
          </Links>
        </Center>
        <Bottom>
          {data.map((item, idx) => (
            <Item key={idx}>
              <ProjectImage>
                <h4>title</h4>
                <img src={item.img} alt="" />
              </ProjectImage>
              <ItemBottom>
                <span>tech</span>
              </ItemBottom>
            </Item>
          ))}
        </Bottom>
      </Right>
    </Wrapper>
  );
};

export default Project;
