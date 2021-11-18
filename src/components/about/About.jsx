import React, {useEffect, useRef, useState} from 'react';
import styled, {css, keyframes} from 'styled-components';

const opa = keyframes`
from {
opacity: 0;
}
to{
opacity:1;
}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${e => e.theme.colors.dark};
  background-color: ${e => e.theme.colors.secondary};
`;

const Top = styled.div`
  display: flex;
  flex: 1;
`;

const Center = styled.div`
  display: flex;
  flex: 1;
`;

const Bottom = styled.div`
  display: flex;
  flex: 1;
  padding: 0;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66.5%;
  overflow: hidden;

  .middle {
    transform: ${props => (props.isVisable ? 'translateX(0px)' : 'translateX(100vw)')};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  overflow: hidden;
  height: 100%;
  padding: 0;
  transition: all ${props => props.seconds}s ease;
  transform: ${props => (props.isVisable ? 'translateX(0px)' : 'translateX(-100vw)')};
  .text {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 120px;
    margin: 0px 10px;
  }

  /* .tech-items {
    border: 1px solid;
    margin-bottom: 5px;
    padding: 5px 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px ${e => e.theme.colors.dark};
  } */
  .contentText {
    display: flex;
    width: 100%;
    h2 {
      text-decoration: underline;
    }
  }
  .item {
    margin-top: 5px;
    width: 130px;
    border: 1px solid;
    border-radius: 10px;
    background-color: white;
  }
  .eduText {
    padding: 10px;
    margin: 10px;
    flex: 1;
    border: 1px solid;
    border-radius: 10px;
    box-shadow: 0px 0px 10px ${e => e.theme.colors.dark};
    background-color: white;
  }

  .edu-spans {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
  }
  .p {
    width: 90%;
    min-width: 300px;
    padding: 5px;
    border: 1px solid;
    margin-top: 5px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px ${e => e.theme.colors.dark};
    overflow: hidden;
    background-color: white;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      /* flex-direction: column; */
      width: 100%;
    }

    h1 {
      overflow: hidden;
    }
    @media (max-width: 768px) {
      span {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    font-size: 13px;
    .tech-items {
      padding: 0px;
      border: none;
      box-shadow: none;
      border-radius: 0px;
    }
    .item {
      width: 100px;
    }
    .text {
      margin: 0;
    }
    .eduText {
      padding: 5px;
      margin: 5px;
    }
    .edu-spans {
      span {
        overflow: hidden;
      }
    }
  }
`;

const animation = props => css`
  animation: ${opa} ${props.seconds}s;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.5%;
  border-radius: 50%;
  overflow: hidden;
  ${props => (props.isVisable ? animation : '')}
  @media (max-width:  670px) {
    display: none;
  }
`;

const About = () => {
  const ref = useRef(null);
  const [isVisable, setisVisable] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(entry => {
          setisVisable(entry.isIntersecting);
        });
      },
      {threshold: 0.25}
    );
    observer.observe(ref.current);
  }, [isVisable]);

  return (
    <Container id="about" ref={ref}>
      <Top>
        <Content>
          <Wrapper seconds={1} isVisable={isVisable}>
            <div className="top">
              <h1>A little about me..</h1>
              <div className="p">
                <p>
                  {/* Hi, thanks for checking out my website! 
                  I spend most my days practicing, learning and writting notes on something new I'm
                  learning about. I hope that one day I can be apart of this industry in a bigger
                  and meaningful way. */}
                  Hey, thanks for stopping by! I'd like to tell you about my journey so far as a
                  developer. I started on some free content from freecodecamp.org and moved onto a
                  Udemy course on JavaScript which taught me syntax, how the DOM works, and many
                  other things like OOP.. It was great and I really enjoyed building websites. So
                  after that I decided to join a bootcamp to help guide me in the right direction
                  and we dived into frameworks, libraries, and best practices. After bootcamp I
                  continued on my own to build a few projects. I'm currently continuing my education
                  through Udemy and documentation.
                  {/* I absolutely love science and technology. My whole life I've had an interest in
                  nature and learning how things work. I love to learn all kinds of things and
                  imagine the possibilities and opportunities new technologies introduce in our
                  world. The world of programming opened my eyes to what was hidden in plain sight
                  and I want to be apart of that world. To build something that will change the face
                  of our world and help solve problems people may not have even known they had. */}
                </p>
              </div>
            </div>
          </Wrapper>
        </Content>
        <ImageContainer seconds={3} isVisable={isVisable}>
          <img src="assets/passion.jpg" alt="" />
        </ImageContainer>
      </Top>
      <Center>
        <ImageContainer seconds={3} isVisable={isVisable}>
          <img src="assets/education.jpg" alt="" />
        </ImageContainer>
        <Content isVisable={isVisable}>
          <Wrapper seconds={2} className="middle">
            <div className="content">
              <h2>Education</h2>
              <div className="contentText">
                <div className="eduText">
                  <div className="title">
                    <h3>Udemy - 2021</h3>
                  </div>
                  <div className="edu-spans">
                    <span>The Complete JavaScript Course</span>
                    <span>The Complete 2021 Web Developement</span>
                    <span>Modern React with Redux</span>
                  </div>
                </div>
                <div className="eduText">
                  <div className="title">
                    <h3>Bootcamp</h3>
                  </div>
                  <div className="edu-spans">
                    <span>NuCamp Full Stack Bootcamp</span>
                    <span>- Mar 22nd - Aug 14th 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </Content>
      </Center>
      <Bottom>
        <Content>
          <Wrapper seconds={2.5} isVisable={isVisable} className="bottom">
            <div className="content">
              <h2>Skills</h2>
              <div className="contentText">
                <div className="text">
                  <div className="tech-title">
                    <h3>Front</h3>
                  </div>
                  <div className="tech-items">
                    <div className="item">HTML</div>
                    <div className="item">CSS</div>
                    <div className="item">Sass</div>
                    <div className="item">Reactjs</div>
                  </div>
                </div>
                <div className="text">
                  <div className="tech-title">
                    <h3>Back</h3>
                  </div>
                  <div className="tech-items">
                    <div className="item">Nodejs</div>
                    <div className="item">Mongodb</div>
                    <div className="item">Express</div>
                    <div className="item">Mongoose</div>
                  </div>
                </div>
                <div className="text">
                  <div className="tech-title">
                    <h3>Libraries</h3>
                  </div>
                  <div className="tech-items">
                    <div className="item">Styled-Components</div>
                    <div className="item">Material-ui</div>
                    <div className="item">Axios</div>
                    <div className="item">Redux</div>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </Content>
        <ImageContainer seconds={3} isVisable={isVisable}>
          <img src="assets/technology.jpg" alt="" />
        </ImageContainer>
      </Bottom>
    </Container>
  );
};

export default About;
