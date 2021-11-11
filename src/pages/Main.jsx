import {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Intro from '../components/intro/Intro';
import Menu from '../components/menu/Menu';
import Portfolio from '../components/portfolio/Portfolio';
import Topbar from '../components/topbar/Topbar';
import {theme} from '../themes';

const Container = styled.div`
  height: 100vh;
`;

const Wrapper = styled(Container)`
  width: 100%;
  height: calc(100vh - 70px);
  background-color: white;
  position: relative;
  top: 70px;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  scrollbar-width: none; //for firefox
  &::-webkit-scrollbar {
    display: none; //for other browsers
  }
  > * {
    width: 100vw;
    height: calc(100vh - 70px);
    scroll-snap-align: start;
   
  }
`;

function Main() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Wrapper>
          <Intro />
          <Portfolio />
          <About />

          <Contact />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default Main;
