import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"

import colors from "../styles/colors"
import Layout from "../components/Layout"
import Article from "../components/Article"

export default ({ data }) => {
  const { allMarkdownRemark } = data
  return (
    <Layout>
      <Hero>
        <h2>
          Hi I'm Nathan, and I'm a learner. From pedagogy to programming, I have
          an insatiable desire to learn. This journal is a place for me to
          record what I am learning and share it with you. I hope you can find
          some value in my journey, and that my learning can inpire your own.
          You can also follow me on{" "}
          <a href="https://twitter.com/dnbailey">Twitter</a> and{" "}
          <a href="https://github.com/dnbailey">GitHub</a>.
        </h2>
      </Hero>
      <section>
        <Header>
          <h2>Latest Posts</h2>
          <Link to="/blog">View all posts</Link>
        </Header>

        {allMarkdownRemark.edges.map(({ node }) => (
          <Article key={node.id} frontmatter={node.frontmatter} />
        ))}
      </section>
    </Layout>
  )
}

export const postQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
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

const Hero = styled.section`
  margin: 4em auto;
  & a {
    text-decoration: none;
    font-variant: small-caps;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid ${colors.secondary};
  & h2 {
    margin-bottom: 0.5em;
  }
  & a {
    text-decoration: none;
  }
`
