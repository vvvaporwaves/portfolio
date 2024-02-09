import React, { useEffect, useRef } from 'react';
import { graphql, PageProps, type HeadFC } from 'gatsby';

import SEO from '../../components/seo';
import Project from '../../models/project';
import ProjectItem, {
  ProjectSize
} from '../../components/portfolio/project-item';

const RECENT_WORK_SIZE = 3;

type DataProps = {
  projects: {
    nodes: {
      frontmatter: Project;
    }[];
  };
};

const Portfolio = ({ data: { projects } }: PageProps<DataProps>) => {
  const [newProjects, prevProjects] = [
    projects.nodes.slice(0, RECENT_WORK_SIZE),
    projects.nodes.slice(RECENT_WORK_SIZE)
  ];

  return (
    <div className="container px-6 lg:p-0">
      <div className="pb-6">
        <h2 className="text-3xl lg:text-4xl font-semibold">Recent Projects</h2>
        <div
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 my-6"
          id="gallery"
        >
          {newProjects.map((node) => {
            return (
              <ProjectItem
                project={node.frontmatter}
                size={ProjectSize.Large}
              />
            );
          })}
        </div>
      </div>

      <div className="pt-6">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          Previous Projects
        </h2>
        <div
          className="grid grid-cols-2 lg:grid-cols-5 gap-4 my-6"
          id="gallery"
        >
          {prevProjects.map((node) => {
            return (
              <ProjectItem
                project={node.frontmatter}
                size={ProjectSize.Small}
                key={node.frontmatter.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      nodes {
        frontmatter {
          title
          subtitle
          tags
          date(formatString: "MMMM DD, YYYY")
          preview_url
          preview_image {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                aspectRatio: 1
              )
            }
          }
        }
      }
    }
  }
`;

export default Portfolio;
export const Head: HeadFC = () => <SEO title="portfolio" />;
