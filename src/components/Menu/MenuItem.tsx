import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${({ theme }) => theme.buttonSize};
  white-space: nowrap;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  width: ${({ theme }) => theme.buttonSize};
  height: ${({ theme }) => theme.buttonSize};

  margin-bottom: 0.2rem;
  padding: 0;
  background: ${({ theme }) => theme.secondary};

  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: ${({ theme }) => theme.buttonRadius};
`;

interface IMenuIconProps {
  name: string;
  icon: string;
}

const MenuItem: React.FC<IMenuIconProps> = ({ name, icon }) => (
  <Wrapper>
    <Button name={name}>
      <img src={icon} alt={`${name} button`} />
    </Button>
    <span>{name}</span>
  </Wrapper>
);

export default MenuItem;
