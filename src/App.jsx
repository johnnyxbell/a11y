import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Profile from './components/Profile';
import Form from './components/Form';
import Social from './components/Social';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'arial'
  }`;

const Container = styled.div`
  position: relative;
  max-width: 1240px;
  margin: 0 auto;
`;

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <Profile />
      <Social />
      <Form />
    </Container>
  </>
);

export default App;
