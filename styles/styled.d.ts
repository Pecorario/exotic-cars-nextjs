import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background_primary: string;
      background_secondary: string;
      background_card: string;
      background_input: string;
      text_primary: string;
      text_secondary: string;
      text_button: string;
      options: string;
      icon: string;
    };
  }
}
