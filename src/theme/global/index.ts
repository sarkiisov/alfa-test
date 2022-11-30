import { createGlobalStyle } from 'styled-components';

import fontsCss from '../../fonts/fonts.module.css';

export default createGlobalStyle`
  ${fontsCss}
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Helvetica Now Display", sans-serif;
  }
`;
