import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'kvd',
    description: 'Fate may be cruel, but a smile better suits a hero.',
    image: '/preview.png',
    siteUrl: 'https://kvd.design'
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Configure SASS to process TailwindCSS.
        postCssPlugins: [require('tailwindcss')],
      },
    }
  ],
}

export default config
