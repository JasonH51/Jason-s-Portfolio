import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const Container = styled.div`
  background-color: ${e => e.theme.colors.secondary};
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
`;

const Input = styled.input`
  width: 60%;
  height: 30px;
  font-size: 14px;
  margin: 10px;
  /* @media (max-width: 768px) {
    width: 200px;
    height: 20px;
  } */
`;

const TextArea = styled.textarea`
  width: 60%;
  height: 200px;
  font-size: 14px;
  margin: 10px;
  @media (max-width: 768px) {
    /* width: 200px; */
    height: 100px;
  }
`;

const Button = styled.button`
  width: 150px;
  height: 30px;
  margin-top: 10px;
  color: white;
  background-color: crimson;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  &:focus {
    outline: none;
  }
  &:hover {
    color: black;
  }
`;

const Contact = () => {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    emailjs
      .sendForm('service_8wnxmyr', 'template_lo3lz6m', form.current, 'user_llOMddSOYeNhuY51dbx6d')
      .then(
        result => {
          console.log(result.text);
          setMessage(true);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Container id="contact">
      <Left>
        <img src="assets/shake.svg" alt="" />
      </Left>
      <Right>
        <h2>Contact</h2>
        <Form ref={form} onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <TextArea name="message" placeholder="Message" required></TextArea>
          <Button type="submit">Send</Button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </Form>
      </Right>
    </Container>
  );
};

export default Contact;
