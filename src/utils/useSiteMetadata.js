import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            author
            description
          }
        }
      }
    `
  )
  return site.siteMetadata
}
