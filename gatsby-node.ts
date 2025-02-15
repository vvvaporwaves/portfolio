import type { GatsbyNode } from 'gatsby';
import path from 'path';

import { toKebabCase } from './src/utils';

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter
}) => {
  const { createPage } = actions;

  const q1 = graphql(`
    {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/data/ui-ux/" } }
      ) {
        nodes {
          id
          frontmatter {
            title
          }
        }
      }
    }
  `);

  const q2 = graphql(`
    {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/src/data/3d/" } }
      ) {
        nodes {
          id
          frontmatter {
            title
          }
        }
      }
    }
  `);

  const [qUiUx, q3d] = await Promise.all([q1, q2]);

  if (qUiUx.errors) {
    reporter.panicOnBuild(
      `There was an error loading the portfolio UI/UX projects.`,
      qUiUx.errors
    );
    return;
  }

  if (q3d.errors) {
    reporter.panicOnBuild(
      `There was an error loading the portfolio 3D projects.`,
      q3d.errors
    );
    return;
  }

  const pUiUx = qUiUx.data.projects.nodes;
  const p3d = q3d.data.projects.nodes;

  // Create a page dynamically for each portfolio project, i.e. markdown file.
  pUiUx.forEach((node: any) => {
    createPage({
      path: `portfolio/${toKebabCase(node.frontmatter.title)}`,
      component: path.resolve('src/templates/project-page.tsx'),
      context: {
        id: node.id
      }
    });
  });

  p3d.forEach((node: any) => {
    createPage({
      path: `3d/${toKebabCase(node.frontmatter.title)}`,
      component: path.resolve('src/templates/3d-page.tsx'),
      context: {
        id: node.id
      }
    });
  });
};
