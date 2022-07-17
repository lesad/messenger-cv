import React from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';
import * as SVG from './icons';

interface StyledMenuNavigationProps {
  justify: boolean
}

const StyledMenuNavigation = styled.nav<StyledMenuNavigationProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.justify ? 'space-evenly' : 'space-between')};
  ${(props) => (props.justify ? 'padding: 0 15%' : '')};
  font-size: 16px;
`;

interface MenuNavigationProps {
  isRecent: boolean,
}

const MenuNavigation: React.FC<MenuNavigationProps> = ({ isRecent }) => {
  if (!isRecent) {
    return (
      <StyledMenuNavigation justify={isRecent}>
        <MenuItem name="Image" icon={SVG.IconImage} />
        <MenuItem name="File" icon={SVG.IconFile} />
        <MenuItem name="Contacts" icon={SVG.IconContacts} />
        <MenuItem name="Dark Mode" icon={SVG.IconDarkMode} />
      </StyledMenuNavigation>
    );
  } return (
    <StyledMenuNavigation justify={isRecent}>
      <MenuItem name="Message" icon={SVG.IconMessage} />
      <MenuItem name="Dark Mode" icon={SVG.IconDarkMode} />
    </StyledMenuNavigation>
  );
};

export default MenuNavigation;
