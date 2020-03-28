const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___date }
        filter: { frontmatter: { type: { eq: "article" } } }
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              type
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ node }, index) => {
    if (node.frontmatter.type === "article") {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/postTemplate.js`),
        context: {
          slug: node.frontmatter.path,
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node,
        },
      })
    }
  })
}
