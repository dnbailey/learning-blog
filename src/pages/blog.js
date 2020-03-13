import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"

export default ({ data }) => {
  const { allMarkdownRemark } = data
  return (
    <Layout>
      <h2>All Posts</h2>
      {allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.id}>
          <h3>
            <Link to={`/${node.frontmatter.path}`}>
              {node.frontmatter.title}
            </Link>
          </h3>
          <p>{node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  )
}

export const postQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
