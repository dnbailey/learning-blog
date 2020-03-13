import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css, jsx } from "@emotion/core"

import Layout from "../components/Layout"

export default ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { frontmatter, timeToRead, html } = markdownRemark
  const { prev, next } = pageContext

  return (
    <Layout title={frontmatter.title}>
      <h2>{frontmatter.title}</h2>
      <p style={{ textAlign: "center" }}>
        {frontmatter.date} — {timeToRead} min read
      </p>

      <Content dangerouslySetInnerHTML={{ __html: html }} />

      <PostNav>
        {prev && (
          <Link
            className={css`
              grid-column: 1/2;
            `}
            to={`/${prev.frontmatter.path}`}
          >
            &#8678; {prev.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link
            css={css`
              grid-column: 2/3;
              justify-self: end;
            `}
            to={`/${next.frontmatter.path}`}
          >
            {next.frontmatter.title} &#8680;
          </Link>
        )}
      </PostNav>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MM.DD.YYYY")
        title
      }
    }
  }
`

const Content = styled.div`
  margin-bottom: 5em;
`

const PostNav = styled.div`
  clear: both;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  padding-top: 1em;
  & a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
