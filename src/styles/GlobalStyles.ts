import { createGlobalStyle } from 'styled-components';

import base from './base';
import { box } from './box';
import reset from './reset';

const GlobalStyles = createGlobalStyle`
${reset}
${base}
${box()}
`;

export default GlobalStyles;
