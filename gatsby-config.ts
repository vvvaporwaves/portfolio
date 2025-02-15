import type { GatsbyConfig } from 'gatsby';

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
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-SDH67ECXBW'],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'ui-ux-pages',
        path: './src/data/ui-ux'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: '3d-pages',
        path: './src/data/3d'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: '3d-assets',
        path: './src/assets/3d'
      }
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Configure SASS to process TailwindCSS.
        postCssPlugins: [require('tailwindcss')]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {}
    },
    'gatsby-plugin-htaccess',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/'
      },
      __key: 'images'
    }
  ]
};

export default config;
