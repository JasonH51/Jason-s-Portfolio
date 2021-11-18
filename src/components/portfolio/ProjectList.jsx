import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  border: 1px solid;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  font-size: 14px;
  padding: 5px;
  background-color: white;

  &.active {
    background-color: ${e => e.theme.colors.dark};
    color: white;
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
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectList = ({active, setActive, item, setCurrent}) => {
  const handleClick = e => {
    setCurrent(e);
    setActive(e.id);
  };
  return (
    <Item className={active ? 'active' : ''} onClick={() => handleClick(item)} key={item.id}>
      <ProjectImage>
        <h4>{item.name}</h4>
        <img src={item.img} alt="" />
      </ProjectImage>
    </Item>
  );
};

export default ProjectList;
