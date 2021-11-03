import React, {useEffect, useRef, useState} from 'react';
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
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex: 0.5;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  img {
    object-fit: cover;
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (min-width: 768px) {
    align-items: center;
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
  overflow: hidden;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;

  span {
  }
`;

const Tech = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.8rem;
  flex: 1;
  padding: 0 0.3em;
  span {
    margin: 0.3em;
    padding: 0.2em;
    border: 1px solid;
    border-radius: 5px;
    background-color: white;
  }
`;

const CenterContainer = styled.div`
  display: flex;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  margin: 2em;
  border-top: 1px solid;
  border-bottom: 1px solid;

  p {
    margin: 0 2em;
    margin-bottom: 2em;
  }
  @media (max-width: 768px) {
    flex: 3;
    margin: 0;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  @media (max-width: 768px) {
    flex: 3;
    flex-wrap: wrap;
  }
`;

const Item = styled.div`
  border: 1px solid;
  max-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  font-size: 14px;
  padding: 5px;
  @media (max-width: 768px) {
    background-color: white;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    h4 {
      overflow: hidden;
    }
    img {
      display: none;
    }
  }
`;

const Project = ({data}) => {
  const [current, setCurrent] = useState({});

  useEffect(() => {
    setCurrent(data[0]);
  }, [data]);

  return (
    <Wrapper>
      <Left>
        <ImageContainer>
          <img src={current?.img} alt="" />
        </ImageContainer>
      </Left>
      <Right>
        <Top>
          <h1>{current?.name}</h1>
        </Top>
        <Center>
          <p>{current?.desc}</p>
          <CenterContainer>
            <Tech>
              {current?.tech?.map(tech => (
                <span key={tech?.id}>
                  <b>{tech}</b>
                </span>
              ))}
            </Tech>
            <Links>
              <span>Links</span>
              <span>Links</span>
            </Links>
          </CenterContainer>
        </Center>
        {data.length > 1 && (
          <Bottom>
            {data.map((item, idx) => (
              <Item onClick={() => setCurrent(item)} key={idx}>
                <ProjectImage>
                  <h4>{item.name}</h4>
                  <img src={item.img} alt="" />
                </ProjectImage>
              </Item>
            ))}
          </Bottom>
        )}
      </Right>
    </Wrapper>
  );
};

export default Project;
