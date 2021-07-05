import colors from './colors';
import fonts from './fonts';
import general from './general';

const theme = {
  colors,
  fonts,
  general,
};

export type Theme = typeof theme;

export default theme;
