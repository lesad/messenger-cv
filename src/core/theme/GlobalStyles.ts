import { createGlobalStyle } from 'styled-components';
import { ThemeType, font } from './themes';

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  body {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.text};
    font-weight: ${font.weight};
    font-size: ${font.size};
    font-family: ${font.family};
    background: ${({ theme }) => theme.background};
    border: 0;
    /* transition: all 0.50s linear, */
  }

  ::placeholder {
    color: ${({ theme }) => theme.text};
    font-weight: ${font.weight};
    font-size: ${font.size};
    font-family: ${font.family};
  }

  input[type=text] {
    width: 95%;
    border: 0;
    outline: none;
  }

  button:focus {
    outline: 0;
  }
`;

export default GlobalStyles;
