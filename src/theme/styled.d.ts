import colors from './colors';
import fonts from './fonts';
import general from './general';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;

    fonts: typeof fonts;

    general: typeof general;
  }
}
