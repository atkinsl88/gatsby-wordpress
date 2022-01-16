const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/liam/Documents/Sites/gatsbywordpress/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/liam/Documents/Sites/gatsbywordpress/src/pages/404.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/liam/Documents/Sites/gatsbywordpress/src/pages/using-typescript.tsx"))),
  "component---src-templates-page-js": hot(preferDefault(require("/Users/liam/Documents/Sites/gatsbywordpress/src/templates/page.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/Users/liam/Documents/Sites/gatsbywordpress/src/templates/post.js")))
}

