import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  font-size: 14px;
  margin-right: 10px;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;

  &.active {
    background-color: ${e => e.theme.colors.dark};
    color: white;
  }
`;

export default function PortfolioList({title, id, active, setSelected}) {
  return (
    <ListItem className={active ? 'active' : ''} onClick={() => setSelected(id)} id={id}>
      {title}
    </ListItem>
  );
}
