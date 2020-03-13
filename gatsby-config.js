module.exports = {
  siteMetadata: {
    title: "Never Stop Learning",
    author: "Nathan Bailey",
    description: "A learning journal...",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1100,
              withWebp: true,
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-head`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`],
          },
          {
            family: `Lato`,
            variants: [`300`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
  ],
}
