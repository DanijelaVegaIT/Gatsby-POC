require("dotenv").config()

module.exports = {
  siteMetadata: {
    siteTitle: "Naduvi",
    siteTitleDefault: "Naduvi",
    siteUrl: "http://localhost:8000/",
    hrefLang: "en",
    siteDescription:
      "Naduvi, online-shop",
    siteImage: "data:image/png;base64,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",
    twitter: "",
  },
  flags: {
    FAST_DEV: true,
  },

  plugins: [
    'gatsby-transformer-remark',
    // {
    //   resolve: 'gatsby-source-google-sheets',
    //   options: {
    //       spreadsheetId: '1GI_IgdmymxRCWoFT49eafFWgf21roVMIcG6Iy9j9wvY',
    //       worksheetTitle: 'cover',
    //       credentials: require('./client_secret.json')
    //   }
    // },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {
          base64: true
        },
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `jpg`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown/`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: 'I90VV32WX6',
        // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
        // Tip: use Search API key with GATSBY_ prefix to access the service from within components
        apiKey: 'bb4e439e171d68b6b10e47f25d95efc4',
        queries: require("./src/utils/algolia-queries")
      },
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        apiKey: process.env.SHOPIFY_API_KEY,
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    // Add your Google Analytics ID to the .env file to enable
    // Otherwise, this plugin can be removed
    process.env.GOOGLE_ANALYTICS_ID && {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
  ].filter(Boolean),
}
