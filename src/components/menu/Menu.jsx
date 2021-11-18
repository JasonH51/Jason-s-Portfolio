import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  height: 100vh;
  background-color: ${e => e.theme.colors.dark};
  position: fixed;
  top: 0;
  right: ${props => (props.menuOpen ? '0' : '-300px')};
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 30px;
  font-weight: 300;
  color: ${e => e.theme.colors.text};
  width: 60%;
`;

const Item = styled.li`
  margin-bottom: 20px;

  a {
    font-size: inherit;
    color: inherit;
    text-decoration: none;
  }
  &:hover {
    font-weight: 500;
  }
`;

const Menu = ({menuOpen, setMenuOpen}) => {
  return (
    <Container menuOpen={menuOpen}>
      <List>
        <Item onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#intro">Home</a>
        </Item>
        <Item onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#portfolio">Portfolio</a>
        </Item>
        {/* <Item onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#about">About</a>
        </Item> */}
        <Item onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#contact">Contact</a>
        </Item>
      </List>
    </Container>
  );
};

export default Menu;
