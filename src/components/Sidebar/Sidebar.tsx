import React from 'react';
import styled from 'styled-components';

import SidebarItem from './SidebarItem';
import IconMessage from '../../assets/desktop/message.svg';
import IconContacts from '../../assets/desktop/contacts.svg';
import IconDarkmode from '../../assets/desktop/darkmode.svg';

const StyledSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  grid-area: menu;
  align-items: center;
  box-sizing: border-box;

  margin: 1.2rem;
  margin-right: 0;
  padding: 0.8rem;
  background: ${({ theme }) => theme.primary};

  border-radius: ${({ theme }) => theme.borderRadius};
`;

const Brand = styled.div`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.background};
  font-weight: 900;
  font-size: 42px;
`;

const Sidebar = () => (
  <StyledSidebar>
    <Brand>M</Brand>
    <SidebarItem name="message" icon={IconMessage} />
    <SidebarItem name="contacts" icon={IconContacts} />
    <SidebarItem name="darkmode" icon={IconDarkmode} />
  </StyledSidebar>
);

export default Sidebar;
