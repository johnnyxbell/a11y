import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 450px;
  margin: 0 auto;
  label {
    margin: 10px 0;
  }
  input {
    height: 30px;
    padding: 0 0 0 10px;
    font-size: 15px;
  }
  textarea {
    height: 150px;
    font-size: 15px;
  }
  button {
    margin: 10px 0;
    color: white;
    background: black;
    border: none;
    font-size: 15px;
    padding: 10px 0;
    cursor: pointer;
  }
`;

const Form = () => (
  <Container>
    <h2>Contact Me 🤯</h2>
    <FormStyles>
      <label>Name</label>
      <input />
      <label>Email</label>
      <input />
      <label>Comments</label>
      <textarea />
      <button>Send</button>
    </FormStyles>
  </Container>
);

export default Form;
