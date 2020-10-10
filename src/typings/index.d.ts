import {} from 'styled-components';
import theme from '@common/themes/Theme';

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.svg' {
  const value: any;
  export = value;
}
