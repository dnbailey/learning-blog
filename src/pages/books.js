import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

import Book from "../components/Book"
import Header from "../components/Header"

export default ({ data }) => {
  const { reading, read } = data
  return (
    <Layout>
      <h1>Books</h1>
      <p>
        The following are books that I am actively reading or have read in the
        past. While I certainly haven't cataloged all the books I have read,
        these are ones that I particularly like or learned something from.
      </p>
      <section>
        <Header>
          <h2>Reading</h2>
        </Header>
        {reading.edges.map(({ book }) => (
          <Book key={book.id} book={book} />
        ))}
      </section>
      <section>
        <Header>
          <h2>Read</h2>
        </Header>
        {read.edges.map(({ book }) => (
          <Book key={book.id} book={book} />
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    reading: allMarkdownRemark(
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
            link
            status
            cover {
              childImageSharp {
                fixed(height: 300) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
          html
        }
      }
    }
    read: allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { type: { eq: "book" }, status: { eq: "read" } } }
    ) {
      edges {
        book: node {
          frontmatter {
            title
            author
            link
            status
            cover {
              childImageSharp {
                fixed(height: 300) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
          html
        }
      }
    }
  }
`
