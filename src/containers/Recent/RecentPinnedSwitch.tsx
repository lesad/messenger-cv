import React from 'react';
import styled from 'styled-components';

const StyledSwich = styled.div`
  display: flex;
  grid-area: recent;

  height: fit-content;
  padding: 1.2rem;
  color: ${({ theme }) => theme.inactive};
  font-weight: 700;
`;

const SwichActive = styled.span`
  margin-right: 1.5rem;
  color: ${({ theme }) => theme.primary};
  border-bottom: 2px solid currentColor;
`;

const RecentPinnedSwitch = () => (
  <StyledSwich>
    <SwichActive>Recent</SwichActive>
    <span>Pinned</span>
  </StyledSwich>
);

export default RecentPinnedSwitch;
