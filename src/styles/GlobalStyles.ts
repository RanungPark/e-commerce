import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import base from './base';
import { box } from './box';

const GlobalStyles = createGlobalStyle`
${reset}
${base}
${box()}
`;

export default GlobalStyles;
