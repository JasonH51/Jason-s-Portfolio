import React, {useEffect, useState} from 'react';
import {list} from '../../data/portfolioListData';
import styled from 'styled-components';
import PortfolioList from './PortfolioList';
import PortfolioItem from './PortfolioItem';
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
    @media (max-width: 768px) {
      font-size: 30px;
      overflow: hidden;
    }
  }
`;

const List = styled.ul`
  margin: 10px;
  padding: 0;
  list-style: none;
  display: flex;
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 0;
    
  }
`;

const ProjectContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
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
            active={selected === i.id}
            setSelected={setSelected}
          />
        ))}
      </List>

      <ProjectContainer>
        {data.map(i => (
          <PortfolioItem id={i.id} title={i.title} img={i.img} />
        ))}
      </ProjectContainer>
    </Container>
  );
};

export default Portfolio;
