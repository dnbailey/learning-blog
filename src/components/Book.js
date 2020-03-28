import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import dimensions from "../styles/dimensions"

export default ({ book }) => {
  const { title, author, cover, link } = book.frontmatter
  return (
    <Book>
      <div>
        <h3>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <h4>{author}</h4>
        <div dangerouslySetInnerHTML={{ __html: book.html }} />
      </div>

      <Thumbnail
        fixed={cover.childImageSharp.fixed}
        alt={`${title} by ${author}`}
      />
    </Book>
  )
}

const Book = styled.article`
  display: grid;
  grid-template-columns: 3fr 1fr;
  margin: 4em 0 0;
  padding: 0 0 4em 0;
  border-bottom: 1px solid #ccc;
  column-gap: 1em;
  row-gap: 1em;
  &:last-child {
    border-bottom: none;
  }
  & h3 {
    font-size: 1.5em;
    margin-bottom: 0;
    line-height: 0;
  }
  @media (max-width: ${dimensions.maxwidthMobile}) {
    grid-template-columns: 1fr;
  }
`

const Thumbnail = styled(Img)`
  justify-self: flex-end;
  @media (max-width: ${dimensions.maxwidthMobile}) {
    justify-self: center;
    order: -1;
  }
`
