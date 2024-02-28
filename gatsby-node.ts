import type { GatsbyNode } from 'gatsby';
import path from 'path';

import { toKebabCase } from './src/utils';

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter
}) => {
  const { createPage } = actions;

  const res = await graphql(`
    {
      projects: allMarkdownRemark {
        nodes {
          id
          frontmatter {
            title
          }
        }
      }
    }
  `);

  if (res.errors) {
    reporter.panicOnBuild(
      `There was an error loading the portfolio projects.`,
      res.errors
    );
    return;
  }

  const projects = res.data.projects.nodes;

  // Create a page dynamically for each portfolio project, i.e. markdown file.
  projects.forEach((node: any) => {
    createPage({
      path: `portfolio/${toKebabCase(node.frontmatter.title)}`,
      component: path.resolve('src/templates/project-page.tsx'),
      context: {
        id: node.id
      }
    });
  });
};
