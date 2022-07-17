import React from 'react';
import styled from 'styled-components';

interface StyledSidebarItemProps {
  readonly end: number;
}

const StyledSidebarItem = styled.button<StyledSidebarItemProps>`
  margin-top: ${({ end }) => (end ? 'auto' : '1.5rem')};
  margin-bottom: ${({ end }) => (end ? '0.5rem' : '0')};

  padding: 0;
  background-color: transparent;
  border: 0;
`;

const AnimatedImg = styled.img`
  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.3);
    filter: drop-shadow(0 0 0.3rem ${({ theme }) => theme.secondary});
  }
`;

interface SidebarItemProps {
  name: string;
  icon: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ name, icon }) => (
  <StyledSidebarItem end={name === 'darkmode' ? 1 : 0}>
    <AnimatedImg src={icon} alt={`${name} button`} />
  </StyledSidebarItem>
);

export default SidebarItem;
