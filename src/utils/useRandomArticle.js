import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          totalCount
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges[getRandomInt(allMarkdownRemark.totalCount)]
    .node.frontmatter.path
}

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))
