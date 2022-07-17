import React from 'react';
import styled from 'styled-components';

import IconSearch from '../../assets/desktop/search.svg';

const StyledSearch = styled.div`
  display: flex;
  grid-area: search;
  align-items: center;
  width: 52%;
  
  margin-left: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  width: 100%;

  padding: 0.15rem 0.8rem;
  background: ${({ theme }) => theme.secondary};

  border: 2px solid ${({ theme }) => theme.secondary};
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

const Search = () => (
  <StyledSearch>
    <Form>
      <Label htmlFor="search">
        <input type="text" id="search" name="search" placeholder="Search messages..." />
      </Label>
      <SubmitButton name="submit">
        <img src={IconSearch} alt="Submit button" />
      </SubmitButton>
    </Form>
  </StyledSearch>
);

export default Search;
