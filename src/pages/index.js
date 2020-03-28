import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import Article from "../components/Article"
import Book from "../components/Book"
import Header from "../components/Header"
import colors from "../styles/colors"
import dimensions from "../styles/dimensions"

export default ({ data }) => {
  const { articles, books } = data
  return (
    <Layout>
      <Hero>
        <h1>Hi I'm Nathan Bailey.</h1>
        <h2>
          I'm a learner. From pedagogy to programming, I have an insatiable
          desire to learn. This journal is a place for me to record what I am
          learning and share it with you. I hope you can find some value in my
          journey, and that my learning can inpire your own. You can also follow
          me on <a href="https://twitter.com/dnbailey">Twitter</a>.
        </h2>
      </Hero>
      <Section>
        <Header>
          <h2>Latest Articles</h2>
          <Link to="/articles">View all articles</Link>
        </Header>

        {articles.edges.map(({ article }) => (
          <Article key={article.id} frontmatter={article.frontmatter} />
        ))}
      </Section>
      <Section>
        <Header>
          <h2>What I'm Reading</h2>
          <Link to="/books">View all books</Link>
        </Header>
        {books.edges.map(({ book }) => (
          <Book key={book.id} book={book} />
        ))}
      </Section>
    </Layout>
  )
}

export const postQuery = graphql`
  {
    articles: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
      filter: { frontmatter: { type: { eq: "article" } } }
    ) {
      edges {
        article: node {
          id
          frontmatter {
            title
            date(fromNow: true)
            path
          }
        }
      }
    }
    books: allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: {
        frontmatter: { type: { eq: "book" }, status: { eq: "reading" } }
      }
    ) {
      edges {
        book: node {
          frontmatter {
            title
            author
            cover {
              childImageSharp {
                fixed(height: 300) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
            link
            status
          }
          html
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
  h1 {
    font-size: 2.5em;
    color: ${colors.primary};
    @media (max-width: ${dimensions.maxwidthMobile}) {
      font-size: 2em;
    }
  }
`

const Section = styled.section`
  margin-bottom: 4em;
`
