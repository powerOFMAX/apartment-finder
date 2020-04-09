import { createGlobalStyle, css } from 'styled-components'

const GlobalFonts = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
`

const DefaultStyles = css`
  body {
    background-color: #f0f0f0;
    font-family: Roboto,Arial,Helvetica,"sans-serif";
  }
`

export default createGlobalStyle`
  ${GlobalFonts};
  ${DefaultStyles};
`
