import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import IconAvatar from '../../assets/mobile/avatar.svg';
import { currentConversationIdState } from '../../core/store/atoms';

const StyledRecentMessage = styled.li`
  display: grid;
  flex: 0 0 3.8rem;

  grid-template-areas:
    'picture name activity'
    'picture text text';
  grid-template-columns: 4.3rem auto 3rem;

  box-sizing: border-box;
  margin-bottom: 0.6rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme.message};
  border-radius: ${({ theme }) => theme.borderRadius};

  @media only screen and (min-width: 700px) {
        margin-bottom: 0.1rem;
        border-radius: 0;
  }
`;

const Picture = styled.img`
  grid-area: picture;
  place-self: center;
`;

const Name = styled.span`
  grid-area: name;
  font-weight: 500;
  line-height: 1.2rem;
`;

const Message = styled.span`
  grid-area: text;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Activity = styled.span`
  grid-area: activity;
  font-weight: 300;
  white-space: nowrap;
`;

interface RecentMessageProps {
  id: number;
  name: string;
  message: string;
  hoursAgo: number;
}

const RecentMessage: React.FC<RecentMessageProps> = ({
  id, name, hoursAgo, message,
}) => {
  const [conversationId, setConvserationId] = useRecoilState(currentConversationIdState);

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    if (id !== conversationId) setConvserationId(id);
  };

  return (
    <StyledRecentMessage onClick={handleClick}>
      <Picture src={IconAvatar} alt="Profile picture" />
      <Name>{name}</Name>
      <Message>{message}</Message>
      <Activity>{`${hoursAgo}h ago`}</Activity>
    </StyledRecentMessage>
  );
};

export default RecentMessage;
