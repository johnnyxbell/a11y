import React from 'react';
import styled from 'styled-components';
import ProfilePhoto from '../assets/images/profile.jpg';

const Container = styled.div`
  text-align: center;
  margin: 100px 0 0 0;
  img {
    border-radius: 150px;
    border: 5px solid black;
    width: 150px;
    margin: 25px auto;
  }
`;

const H2 = styled.h2`
  font-size: 35px;
  margin: 50px auto;
`;

const ContentContainer = styled.div`
  max-width: 450px;
  margin: 25px auto;
`;

const P = styled.p`
  font-size: 25px;
  text-align: center;
`;

const Profile = () => (
  <Container>
    <H2>Johnny Bell 👨‍💻</H2>
    <img src={ProfilePhoto} />
    <ContentContainer>
      <P>
        G’day mates, I’m Johnny 👋🏻 a frontend engineer from Australia. Working with the awesome team at StackShare in
        San Francisco.
      </P>
    </ContentContainer>
  </Container>
);

export default Profile;
