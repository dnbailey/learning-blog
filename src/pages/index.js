import React from "react"
import { Link, graphql } from "gatsby"

export default ({ data }) => {
  const { allMarkdownRemark } = data
  return (
    <div>
      <h2>Latest Posts</h2>
      <Link to="/blog">Read all posts</Link>
      {allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.id}>
          <Link to={`/${node.frontmatter.path}`}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
          <p>{node.frontmatter.date}</p>
        </article>
      ))}
    </div>
  )
}

export const postQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(fromNow: true)
            path
          }
        }
      }
    }
  }
`
