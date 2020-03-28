import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Article from "../components/Article"
import useRandomArticle from "../utils/useRandomArticle"

export default ({ data }) => {
  const { allMarkdownRemark } = data
  return (
    <Layout title="All Posts">
      <h2>All Articles</h2>
      <p>
        Below you will find all the articles I have written listed in reverse
        chronological order. The articles are not written according to any
        overarching scheme, so if you need a place to start you can jump in to a{" "}
        <Link to={useRandomArticle()}>random article</Link>.
      </p>
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
