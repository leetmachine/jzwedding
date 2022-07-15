module.exports = {
  siteMetadata: {
    title: `jzwedding`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-head",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Albert Sans", "Birthstone Bounce"],
        },
      },
    },
  ],
};
