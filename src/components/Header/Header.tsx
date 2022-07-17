import React from 'react';
import styled from 'styled-components';
import switchIcon from '../../assets/mobile/switch.svg';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0.4rem 0.7rem 0.3rem 0.9rem;
  background: ${({ theme }) => theme.secondary};
`;

const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.primary};
  font-weight: 900;
  font-size: 42px;
`;

const Button = styled.button`
  margin-left: auto;
  padding: 0;
  background-color: ${({ theme }) => theme.secondary};
  border: 0;
`;

interface IHeaderProps {
  isRecent: boolean,
  setIsRecent: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header: React.FC<IHeaderProps> = ({ isRecent, setIsRecent }) => (
  <StyledHeader>
    <Title>Messenger</Title>
    <Button type="button" name="switch" onClick={() => setIsRecent(!isRecent)}>
      <img src={switchIcon} alt="Switch between messages and recent" />
    </Button>
  </StyledHeader>
);

export default Header;
