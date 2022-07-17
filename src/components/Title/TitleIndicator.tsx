import React from 'react';
import styled from 'styled-components';

const StyledTitleIndicator = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ theme }) => theme.indicatorSize};
  height: ${({ theme }) => theme.indicatorSize};
  color: ${({ theme }) => theme.secondary};

  font-weight: 700;
  background-color: ${({ theme }) => theme.indicator};
  border-radius: 50%;
`;

interface TitleIndicatorProps {
  unreadCount: number,
}

const TitleIndicator: React.FC<TitleIndicatorProps> = ({ unreadCount }) => (
  <StyledTitleIndicator>{unreadCount}</StyledTitleIndicator>
);

export default TitleIndicator;
