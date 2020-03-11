import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, timeToRead, html } = markdownRemark

  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <p>
        {frontmatter.date} — {timeToRead} min read
      </p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
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
