import React from 'react';
import styled from 'styled-components';
import TitleIndicator from './TitleIndicator';

const StyledTitle = styled.div`
  display: flex;
  grid-area: title;

  padding: 2rem 0 0 1.2rem;
`;

const Heading = styled.h3`
  margin: 0;
  margin-right: 0.5rem;
  padding: 0;
  font-weight: 700;
  font-size: 22px;
`;

const Title = () => (
  <StyledTitle>
    <Heading>Messages</Heading>
    <TitleIndicator unreadCount={3} />
  </StyledTitle>
);

export default Title;
