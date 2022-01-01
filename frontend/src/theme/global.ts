import { createGlobalStyle } from "styled-components";
import { media, colors, typography } from "theme";

const GlobalStyles = createGlobalStyle`
  :global() {
    /* Todo add your font's here */
  }

  html,
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${typography.fontFamily.default};
    color: ${colors.brand.black};
    background-color: ${colors.brand.white};
    font-size: ${typography.fontSize.body};
    font-weight: 400;
      font-feature-settings: 'liga', 'kern';
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      ${media.md.up} {
        min-height: 100vh;
      }
  }

  p ,
  h4{
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }

`;

export default GlobalStyles;
