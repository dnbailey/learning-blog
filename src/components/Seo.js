import React from "react"
import { Title, Meta } from "react-head"

import useSiteMetadata from "../utils/useSiteMetadata"

export default ({ title, url, description }) => {
  const {
    title: siteTitle,
    description: siteDescription,
    author,
  } = useSiteMetadata()
  return (
    <>
      <Title>
        {title && `${title} | `}
        {siteTitle}
      </Title>
      <Meta name="author" content={author} />
      <Meta
        name="description"
        content={description ? description : siteDescription}
      />
      <Meta property="og:title" content={siteTitle} />
      <Meta property="og:description" content={description} />
      <Meta property="og:url" content="https://neverstoplearningwith.me" />
      <Meta
        name="twitter:title"
        content={title ? `${title} | ${siteTitle}` : siteTitle}
      />
      <Meta name="twitter:description" content={description} />
      <Meta name="twitter:card" content="summary" />
    </>
  )
}
