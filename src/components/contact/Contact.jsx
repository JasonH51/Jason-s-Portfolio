import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  display: flex;
  @media (max-width: 768px) {
   flex-direction: column; 
  }
`;

const Left = styled.div`
  overflow: hidden;
  flex: 1;
  img {
    height: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 30px;
  }
`;

const Form = styled.form`
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  font-size: 14px;
  @media (max-width: 768px) {
   width: 200px;
   height: 20px; 
  }
`;

const TextArea = styled.textarea`
  width: 300px;
  height: 200px;
  font-size: 14px;
  @media (max-width: 768px) {
   width: 200px;
   height: 100px; 
  }
`;

const Button = styled.button`
  width: 150px;
  height: 30px;
  color: white;
  background-color: crimson;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  &:focus {
    outline: none;
  }
`;

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <Container id="contact">
      <Left>
        <img src="assets/shake.svg" alt="" />
      </Left>
      <Right>
        <h2>Contact</h2>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Email" />
          <TextArea placeholder="Message"></TextArea>
          <Button type="submit">Send</Button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </Form>
      </Right>
    </Container>
  );
};

export default Contact;
