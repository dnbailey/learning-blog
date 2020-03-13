import React from "react"
import { Title, Meta } from "react-head"

import useSiteMetadata from "../utils/useSiteMetadata"

export default ({ title, description }) => {
  const {
    title: siteTitle,
    description: siteDescription,
    author,
  } = useSiteMetadata()
  return (
    <>
      <Title>
        {title && `${title} |`} {siteTitle}
      </Title>
      <Meta name="author" content={author} />
      <Meta
        name="description"
        content={description ? description : siteDescription}
      />
      {/* <Link rel="canonical" content="https://learningjournal.io/" /> */}
    </>
  )
}
