import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid;
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid;
`;

const Bottom = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  width: 66.5%;
  overflow: hidden;
  .middle {
    transform: ${props => (props.isVisable ? 'translateX(0px)' : 'translateX(100vw)')};
  }
`;

const Wrapper = styled.div`
  padding: 5em;
  overflow: hidden;
  transition: all ${props => props.seconds}s ease;
  transform: ${props => (props.isVisable ? 'translateX(0px)' : 'translateX(-100vw)')};
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  width: 33.5%;
  overflow: hidden;
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
    <Container ref={ref}>
      <Top>
        <Content>
          <Wrapper seconds={0.6} isVisable={isVisable}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iusto perspiciatis
              possimus. Ad sequi vero et, quam obcaecati necessitatibus nobis? Rem distinctio
              provident est, ullam ipsa at dignissimos deserunt ipsum, blanditiis, id facere.
              Recusandae ex distinctio commodi maiores minus iste modi id aut, eum molestias nemo
              amet aperiam veritatis dicta exercitationem? Minus delectus possimus a asperiores
              nihil, veniam repellat alias illo nam aliquam quaerat, consequatur similique sed?
              Voluptates doloribus expedita harum, numquam maiores iusto molestiae nemo facere,
              aliquam, obcaecati aliquid.
            </p>
          </Wrapper>
        </Content>
        <ImageContainer isVisable={isVisable}>
          <img src="assets/computerScreen.jpg" alt="" />
        </ImageContainer>
      </Top>
      <Center>
        <ImageContainer isVisable={isVisable}>
          <img src="assets/computerScreen.jpg" alt="" />
        </ImageContainer>
        <Content isVisable={isVisable}>
          <Wrapper seconds={1} className="middle">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iusto perspiciatis
              possimus. Ad sequi vero et, quam obcaecati necessitatibus nobis? Rem distinctio
              provident est, ullam ipsa at dignissimos deserunt ipsum, blanditiis, id facere.
              Recusandae ex distinctio commodi maiores minus iste modi id aut, eum molestias nemo
              amet aperiam veritatis dicta exercitationem? Minus delectus possimus a asperiores
              nihil, veniam repellat alias illo nam aliquam quaerat, consequatur similique sed?
              Voluptates doloribus expedita harum, numquam maiores iusto molestiae nemo facere,
              aliquam, obcaecati aliquid.
            </p>
          </Wrapper>
        </Content>
      </Center>
      <Bottom>
        <Content>
          <Wrapper seconds={1.2} isVisable={isVisable}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iusto perspiciatis
              possimus. Ad sequi vero et, quam obcaecati necessitatibus nobis? Rem distinctio
              provident est, ullam ipsa at dignissimos deserunt ipsum, blanditiis, id facere.
              Recusandae ex distinctio commodi maiores minus iste modi id aut, eum molestias nemo
              amet aperiam veritatis dicta exercitationem? Minus delectus possimus a asperiores
              nihil, veniam repellat alias illo nam aliquam quaerat, consequatur similique sed?
              Voluptates doloribus expedita harum, numquam maiores iusto molestiae nemo facere,
              aliquam, obcaecati aliquid.
            </p>
          </Wrapper>
        </Content>
        <ImageContainer isVisable={isVisable}>
          <img src="assets/computerScreen.jpg" alt="" />
        </ImageContainer>
      </Bottom>
    </Container>
  );
};

export default About;
