import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 20px;
  border: 1px solid lightgray;
  margin: 10px 20px;
  position: relative;
  cursor: pointer;
  /* transition: all 0.5s; */
  ${e => e.theme.df.centered}

  @media (max-width: 768px) {
    width: 130px;
    height: 100px;
    margin: auto;
  }

  h3 {
    position: absolute;
    font-size: 20px;
    color: white;
  }

  img {
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  &:hover {
    background-color: ${e => e.theme.colors.main};
    img {
      opacity: 0.2;
      z-index: 0;
    }
  }
`;

export default function PortfolioItem({id, title, img}) {
  return (
    <Item id={id}>
      <img src={img} alt="" />
      <h3>{title}</h3>
    </Item>
  );
}
