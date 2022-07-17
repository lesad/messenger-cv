import React from 'react';
import styled from 'styled-components';

import MenuInput from './MenuInput';
import MenuNavigation from './MenuNavigation';

const StyledMenu = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100vw;

  padding: 1rem;
  background: ${({ theme }) => theme.secondary};
  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};
`;

interface MenuProps {
  isRecent: boolean,
}

const Menu: React.FC<MenuProps> = ({ isRecent }) => (
  <StyledMenu>
    {isRecent ? '' : <MenuInput /> }
    <MenuNavigation isRecent={isRecent} />
  </StyledMenu>
);

export default Menu;
