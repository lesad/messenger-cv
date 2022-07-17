import React, { useState } from 'react';
import styled from 'styled-components';
import submitMessage from '../../core/api/submit';

import CloseIcon from '../../assets/mobile/close.svg';
import SubmitIcon from '../../assets/mobile/submit.svg';

const StyledMenuInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  margin-bottom: 1.3rem;
`;

const Form = styled.form`
  display: flex;
  flex: 1 1 auto;

  margin-left: 0.8rem;
  padding: 0.2rem 0.8rem;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const Button = styled.button`
  margin-left: auto;
  padding: 0;
  background: ${({ theme }) => theme.secondary};
  border: 0;
`;

const MenuInput = () => {
  const [message, setMessage] = useState('');
  const handleSubmit = submitMessage(message, setMessage);

  return (
    <StyledMenuInput>
      <img src={CloseIcon} alt="Close message" />
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          id="message"
          name="message"
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="button" name="submit">
          <img src={SubmitIcon} alt="Submit your message" />
        </Button>
      </Form>
    </StyledMenuInput>
  );
};

export default MenuInput;
