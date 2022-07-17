import React from 'react';
import styled from 'styled-components';

import { getRecents } from '../../core/api/swr';
import RecentMessage from './RecentMessage';

const StyledRecent = styled.ul`
  display: flex;
  flex-direction: column;

  height: calc(100vh - 15.5rem);
  margin: 0;
  padding: 0.8rem;
  overflow: auto;

  @media only screen and (min-width: 700px) {
    grid-area: recent;
    height: auto;
    margin-top: 3.5rem;
    padding: 0;
  }
`;

const Recent = () => {
  const { recents, isLoading, error } = getRecents();

  if (error) return <StyledRecent>There is an error.</StyledRecent>;
  if (isLoading) return <StyledRecent>Loading...</StyledRecent>;

  return (
    <StyledRecent>
      {recents.map((conversation) => (
        <RecentMessage
          key={conversation.id}
          id={+conversation.id}
          name={conversation.name}
          message={conversation.messages.length ? conversation.messages[0].message : 'Say hello!'}
          hoursAgo={1}
        />
      ))}
    </StyledRecent>
  );
};

export default Recent;
