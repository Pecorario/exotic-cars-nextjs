import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Segoe UI';
    src: url("/fonts/SegoeUI.ttf");
    font-display: swap;
  }
  @font-face {
    font-family: 'Segoe UI Bold';
    src: url("/fonts/SegoeUI-Bold.ttf");
    font-display: swap;
  }
  @font-face {
    font-family: 'Segoe UI Semi Bold';
    src: url("/fonts/SegoeUI-SemiBold.ttf");
    font-display: swap;
  }
  @font-face {
    font-family: 'Segoe UI Light';
    src: url("/fonts/SegoeUI-Light.ttf");
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
  }

  input {
    border: none;
  }

  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }

  input[type="date"], input[type="time"] {
     font-family: sans-serif;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 767px) {
    :root {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    :root {
      font-size: 14px;
    }
  }
`;
