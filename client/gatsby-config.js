/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: `/hotel-api/client`,
  siteMetadata: {
    title: `Holidaze`,
    siteUrl: `http://www.sleekdesign.no`,
    description: `Holidaze - For your hotel needs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`, `400`, "800"],
          },
          {
            family: `Open Sans`,
            subsets: [`latin`],
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    "styled-components",
    "reactstrap",
    "google-map-react",
    "jquery",
    "availity-reactstrap-validation",
    "react-autosuggest",
    "gatsby-plugin-htaccess",
  ],
}
