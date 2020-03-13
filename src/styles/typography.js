import css from "@emotion/css"

import colors from "./colors"

export default css`
  body {
    color: ${colors.dark};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Montserrat", sans-serif;
  }

  main {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-align: center;
    }
    p {
      max-width: 700px;
      margin: 1em auto;
    }
  }

  a {
    color: ${colors.primary};
    transition: 0.5s ease color;
    &:hover {
      color: ${colors.secondary};
      cursor: pointer;
    }
  }

  hr {
    margin: 3em 0;
  }
`
