import React from 'react';
import styled from 'styled-components';

const StyledInputButton = styled.button`
  flex: 0 1 2.4rem;
  padding: 0;
  background: ${({ theme }) => theme.secondary};

  border: 0;
`;

interface StyledButtonProps {
  name: string,
  icon: string,
}

const InputButton: React.FC<StyledButtonProps> = ({ name, icon }) => (
  <StyledInputButton name={`attach-${name}`}>
    <img src={icon} alt={`Attach ${name}`} />
  </StyledInputButton>
);

export default InputButton;
