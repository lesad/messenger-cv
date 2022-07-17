import React, { useState } from 'react';
import styled from 'styled-components';

import submitMessage from '../../core/api/submit';
import InputButton from './InputButton';
import IconSubmit from '../../assets/desktop/submit.svg';
import IconFile from '../../assets/desktop/file.svg';
import IconImage from '../../assets/desktop/image.svg';

const StyledInput = styled.div`
  display: flex;
  grid-area: input;
  align-items: center;

  padding: 0 1rem 1rem 1rem;
  background: ${({ theme }) => theme.secondary};
`;

const Form = styled.form`
  display: flex;
  flex: 1 1 auto;
  align-items: center;

  padding: 0.2rem 0.8rem;
  border: 2px solid ${({ theme }) => theme.background};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const SubmitButton = styled.button`
  margin-left: auto;
  padding: 0;
  background: ${({ theme }) => theme.secondary};
  border: 0;
`;

const Label = styled.label`
  width: 95%;
`;

const Input = () => {
  const [message, setMessage] = useState('');
  const handleSubmit = submitMessage(message, setMessage);

  return (
    <StyledInput>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="message">
          <input
            type="text"
            autoComplete="off"
            id="message"
            name="message"
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Label>
        <SubmitButton name="submit">
          <img src={IconSubmit} alt="Submit button" />
        </SubmitButton>
      </Form>
      <InputButton name="file" icon={IconFile} />
      <InputButton name="image" icon={IconImage} />
    </StyledInput>
  );
};

export default Input;
