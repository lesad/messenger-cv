import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import IconAvatar from '../../assets/desktop/avatar.svg';
import ChatMessage from './ChatMessage';
import IMessage from '../../core/models/message.model';
import IConversation from '../../core/models/conversation.model';
import { getConversation } from '../../core/api/swr';
import { userState } from '../../core/store/atoms';

const StyledChat = styled.div`
  display: flex;
  flex-direction: column-reverse;

  height: calc(100vh - 19rem);
  padding: 0.5rem;
  overflow: auto;

  @media only screen and (min-width: 700px) {
    grid-area: chat;
    height: auto;
    background: ${({ theme }) => theme.secondary};
  }
`;

const Empty = styled.p`
  flex: 0 1 auto;
  align-self: center;
  box-sizing: border-box;

  margin-bottom: 0.1rem;
  padding: 0.5em 1em;
  background: ${({ theme }) => theme.message};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const PictureWrapper = styled.div`
  @media only screen and (min-width: 700px) {
    display: flex;
    flex: 0 1 auto;
    box-sizing: border-box;

    padding-left: 0.5rem;

    & > p {
      max-width: 100%;
      margin-left: 0.2rem;
    }
  }
`;

const Picture = styled.img`
  flex: 0 0 auto;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const Chat = () => {
  const userId = useRecoilValue(userState);
  const { conversation, error, isLoading } = getConversation();

  if (error) return <StyledChat><Empty>Error loading data</Empty></StyledChat>;
  if (isLoading) return <StyledChat><Empty>Say hi to your friend!</Empty></StyledChat>;

  const isMine = (message: IMessage) => message.senderId === userId;

  const messages = (conversation as IConversation).messages
    .reverse()
    .map((message, index, array) => {
      const isThisMine = isMine(message);
      const isLastMine = array[index - 1]
        ? isMine(array[index - 1])
        : true;

      const element = (
        <ChatMessage
          key={message.id}
          message={message.message}
          isMine={isThisMine}
        />
      );

      if (!isThisMine && isLastMine) {
        return (
          <PictureWrapper key={message.id}>
            <Picture src={IconAvatar} alt="Profile picture" />
            {element}
          </PictureWrapper>
        );
      }
      return element;
    });

  return <StyledChat>{messages}</StyledChat>;
};

export default Chat;
