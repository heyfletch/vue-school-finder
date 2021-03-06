
export default `query getSchools($language: LanguageCodeFilterEnum!) {
  schools(where: { language: $language }, first: 100) {
    nodes {
      id
      title
      link
      featuredImage {
        sourceUrl(size: MEDIUM_LARGE)
      }
      language {
        id
        name
      }
      acf {
        schoolAddress
        schoolAfterHours
        schoolBeforeHours
        schoolCity
        schoolEnrollment
        schoolNeighborhood
        schoolPrincipal
        schoolUniforms
        schoolUrl
        schoolZip
        schoolGrades
        schoolTransportation
        schoolHours
        schoolIntro
        schoolMap {
          latitude
          longitude
          streetAddress
        }
      }
    }
  }
}`
