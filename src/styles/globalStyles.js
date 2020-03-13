import css from "@emotion/css"

import colors from "./colors"
import dimensions from "./dimensions"

export default css`
  html,
  body,
  #root {
    margin: 0;
    min-height: 100%;
  }

  html {
    font-family: "Monserrat", sans-serif;
  }

  body {
    background: ${colors.light};
    width: 100%;
    margin: 0 auto;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 300;

    @media (max-width: ${dimensions.maxwidthMobile}) {
      font-size: 14px;
    }

    * {
      box-sizing: border-box;

      &::selection {
        background: ${colors.primary};
        color: ${colors.light};
      }
    }

    figure {
      margin: 1em 0;
      & figcaption {
        font-size: 0.5em;
        text-align: right;
        margin-top: 1em;
      }
    }
    twitter-widget {
      margin: 0 auto;
    }
  }
`
