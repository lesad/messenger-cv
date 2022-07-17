import React from 'react';
import styled from 'styled-components';

interface StyledChatMessageProps {
  readonly align: boolean;
}

const StyledChatMessage = styled.p<StyledChatMessageProps>`
  flex: 0 1 auto;
  align-self: ${({ align }) => (align ? 'flex-end' : 'flex-start')};
  box-sizing: border-box;
  max-width: 50%;

  margin: 0;
  margin-bottom: 0.1rem;
  padding: 0.5em 1em;
  background: ${({ theme }) => theme.message};

  border-radius: ${({ theme }) => theme.borderRadius};

  @media only screen and (min-width: 700px) {
    max-width: calc(50% - ${({ align }) => (align ? '0rem' : '3.2rem')});
    margin-left: ${({ align }) => (align ? '0' : '3.2rem')};
  }
`;

interface IChatMessageProps {
  message: string;
  isMine: boolean;
}

const ChatMessage: React.FC<IChatMessageProps> = ({ message, isMine }) => (
  <StyledChatMessage align={isMine}>{message}</StyledChatMessage>
);

export default ChatMessage;
