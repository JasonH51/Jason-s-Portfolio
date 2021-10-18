import React, {useEffect, useState} from 'react';
import {list} from '../../data/portfolioListData';
import styled from 'styled-components';
import PortfolioList from './PortfolioList';
import Project from './Project';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio
} from '../../data/dummy';

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 50px;
    overflow: hidden;
    @media (max-width: 768px) {
      font-size: 30px;
      overflow: hidden;
    }
  }
`;

const List = styled.ul`
  margin: 10px;
  padding: 5px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 0;
  }
`;

const ProjectContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Portfolio = () => {
  const [selected, setSelected] = useState('1');
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case '1':
        setData(featuredPortfolio);
        break;
      case '2':
        setData(webPortfolio);
        break;
      case '3':
        setData(mobilePortfolio);
        break;
      case '4':
        setData(designPortfolio);
        break;
      case '5':
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <Container id="portfolio">
      <h1>Portfolio</h1>
      <List>
        {list.map(i => (
          <PortfolioList
            title={i.title}
            id={i.id}
            key={i.id}
            active={selected === i.id}
            setSelected={setSelected}
          />
        ))}
      </List>

      <ProjectContainer>
        <Project data={data} />
      </ProjectContainer>
    </Container>
  );
};

export default Portfolio;
