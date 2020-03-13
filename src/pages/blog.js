import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import Article from "../components/Article"

export default ({ data }) => {
  const { allMarkdownRemark } = data
  return (
    <Layout>
      <h2>All Posts</h2>
      {allMarkdownRemark.edges.map(({ node }) => (
        <Article key={node.id} frontmatter={node.frontmatter} />
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
