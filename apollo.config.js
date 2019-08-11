module.exports = {
  client: {
    service: {
      name: "school-finder",
      // URL to the GraphQL API
      url: "https://enrolldev.local/graphql"
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"]
  }
};