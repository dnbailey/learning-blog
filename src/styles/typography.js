import css from "@emotion/css"

import colors from "./colors"
import dimensions from "./dimensions"

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
      overflow-wrap: break-word;
    }
    blockquote {
      background: #f9f9f9;
      border-left: 10px solid ${colors.primary};
      margin: 1.5em auto;
      padding: 0.5em 3em;
      font-size: 1.25em;
      @media (max-width: ${dimensions.maxwidthMobile}) {
        font-size: 1em;
      }
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
