import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import ProjectList from './ProjectList';

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
  overflow: hidden;
  justify-content: center;

  img {
    object-fit: contain;
    height: 100%;
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
  @media (max-width: 768px) {
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;

  button {
    color: ${e => e.theme.colors.dark};
    margin: 10px;
    padding: 4px;
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
  border-top: 1px solid;
  border-bottom: 1px solid;

  p {
    margin: 0 2em;
    margin-bottom: 2em;
    font-size: clamp(12px, 2vw, 16px);
  }
  @media (max-width: 768px) {
    flex: 3;
    margin: 0;

    ${Tech} {
      display: none;
    }
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

const Project = ({data}) => {
  const [current, setCurrent] = useState({});
  const [active, setActive] = useState(1);

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
              {current?.tech?.map((tech, idx) => (
                <span key={idx}>
                  <b>{tech}</b>
                </span>
              ))}
            </Tech>
            <Links>
              {current?.website ? (
                <button
                  onClick={e => {
                    e.preventDefault();
                    window.open(`${current?.website}`, '_blank');
                  }}
                >
                  Website
                </button>
              ) : (
                ''
              )}

              <button
                onClick={e => {
                  e.preventDefault();
                  window.open(`${current?.git}`, '_blank');
                }}
              >
                Github
              </button>
            </Links>
          </CenterContainer>
        </Center>
        {data.length > 1 && (
          <Bottom>
            {data.map(item => (
              <ProjectList
                key={item.id}
                item={item}
                active={active === item.id}
                setCurrent={setCurrent}
                setActive={setActive}
              />
            ))}
          </Bottom>
        )}
      </Right>
    </Wrapper>
  );
};

export default Project;
