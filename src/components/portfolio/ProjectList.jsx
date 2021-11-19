import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  border: 1px solid;
  /* width: 30%; */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex: 1;
  border-radius: 10px;
  padding: 2px;
  margin: 5px;
  background-color: white;
  max-width: 189px;

  h4 {
    font-size: 1.4vmin;
  }

  &.active {
    background-color: ${e => e.theme.colors.dark};
    color: white;
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 2vw;
    }
    max-width: 166px;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
  }
`;

const ProjectList = ({active, setActive, item, setCurrent}) => {
  const handleClick = e => {
    setCurrent(e);
    setActive(e.id);
  };
  return (
    <Item className={active ? 'active' : ''} onClick={() => handleClick(item)}>
      <ProjectImage>
        <h4>{item.name}</h4>
        <img src={item.img} alt="" />
      </ProjectImage>
    </Item>
  );
};

export default ProjectList;
