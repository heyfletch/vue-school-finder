module.exports = {
  client: {
    service: {
      name: "School Finder",
      // URL to the GraphQL API
      url: "https://enrollwcc.kinsta.cloud/graphql"
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"]
  }
};