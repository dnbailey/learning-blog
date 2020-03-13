import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

export default ({ frontmatter }) => (
  <Article>
    <h3>
      <Link to={`/${frontmatter.path}`}>{frontmatter.title}</Link>
    </h3>
    <p>{frontmatter.date}</p>
  </Article>
)

const Article = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  & p {
    margin: 0;
  }
`
