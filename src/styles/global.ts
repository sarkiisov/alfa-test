import { createGlobalStyle } from 'styled-components';

import fontsCss from '../fonts/fonts.module.css';

export const GlobalStyles = createGlobalStyle`
  ${fontsCss}
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Helvetica Now Display", sans-serif;
  }
`;
