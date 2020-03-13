import React from "react"
import { Link } from "gatsby"
import { Global } from "@emotion/core"
import styled from "@emotion/styled"

import globalStyles from "../styles/globalStyles"
import typography from "../styles/typography"
import dimensions from "../styles/dimensions"
import colors from "../styles/colors"

import useSiteMetadata from "../utils/useSiteMetadata"
import Seo from "./Seo"

export default ({ title, children }) => {
  const { title: siteTitle } = useSiteMetadata()

  return (
    <Container>
      <Seo title={title} />
      <Global styles={[globalStyles, typography]} />
      <Header>
        <h1>
          <Link to="/">{siteTitle.split(" ").join("")}</Link>
          <span>withMe</span>
        </h1>
      </Header>
      <main>{children}</main>
      <Footer>
        <p>&copy; {new Date().getFullYear()} Nathan Bailey </p>
      </Footer>
    </Container>
  )
}

const Container = styled.div`
  max-width: ${dimensions.maxwidthDesktop};
  margin: 0 auto;
  padding: 0 ${dimensions.paddingHorizontalDesktop};

  @media (max-width: ${dimensions.maxwidthMobile}) {
    padding: 0 ${dimensions.paddingHorizontalMobile};
  }
`

const Header = styled.header`
  border-bottom: 1px solid ${colors.dark};
  margin-bottom: 2em;
  & h1 {
    margin-bottom: 0.5em;
    text-align: center;
    & a {
      color: ${colors.primary};
      text-decoration: none;
    }
    & span {
      display: inline-block;
    }
  }
`

const Footer = styled.footer`
  margin: 5em 0 3em;
  font-size: 0.65em;
  color: ${colors.secondary};
  text-align: center;
`
