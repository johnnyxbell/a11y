import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialPanel = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  a svg {
    transition: all 0.2s ease;
    color: #000;
    padding-right: 10px;
    fill: #000;
  }
  a:hover svg {
    color: #ccc;
    fill: #ccc;
  }
`;

const Social = () => (
  <SocialPanel>
    <a href="#" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
    </a>
    <a href="#" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
    <a href="#" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
  </SocialPanel>
);

export default Social;
