import React from 'react';
import styled from 'styled-components';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Hamburger = styled.div`
  width: 32px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  span {
    width: 100%;
    height: 3px;
    background-color: ${e => e.theme.colors.main};
    transform-origin: left;
    transition: all 2s ease;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  color: ${e => e.theme.colors.main};
  position: fixed;
  top: 0;
  z-index: 3;
  transition: all 1.5s;
  &.active {
    background-color: ${e => e.theme.colors.main};
    color: white;
    ${Hamburger} {
      span {
        &:first-child {
          background-color: white;
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:last-child {
          background-color: white;
          transform: rotate(-45deg);
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
`;

const Logo = styled.a`
  font-size: 40px;
  font-weight: 700;
  color: inherit;
  text-decoration: none;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  @media (max-width: 768px) {
    display: none;
  }
  .icons {
    font-size: 18px;
    margin-right: 5px;
  }
  span {
    font-size: 15px;
    font-weight: 500;
  }
`;

const Right = styled.div``;

const Topbar = ({menuOpen, setMenuOpen}) => {
  return (
    <Container className={menuOpen ? 'active' : ''}>
      <Wrapper>
        <Left>
          <Logo href="#intro">Jason H</Logo>
          <ItemContainer>
            <AccountCircleIcon className="icons" />
            <span>+1 469 493 9577</span>
          </ItemContainer>
          <ItemContainer>
            <MailOutlineIcon className="icons" />
            <span>JasonH5151@gmail.com</span>
          </ItemContainer>
        </Left>

        <Right>
          <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </Hamburger>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
