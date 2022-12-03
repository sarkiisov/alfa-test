import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<string, string>;
    fontSizes: Record<string, string>;
    durations: Record<string, number>;
    breakpoints: Record<string, string>;
  }
}
