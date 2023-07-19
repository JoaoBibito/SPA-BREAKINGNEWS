import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Newsreader:wght@200;300;400&family=Roboto:wght@300;700&display=swap');
* {
  margin: 0;
  padding: 0;
  font-family: Newsreader, Arial;
}

html {
  width: auto;
}

body {
  margin: 0;
  max-width: 100vw;
  min-height: 100vh;
  background-color: #e6e6e6;
}
`

