import React, { useEffect, useRef } from 'react';
import { graphql, PageProps, type HeadFC } from 'gatsby';

import SEO from '../components/seo';
import Project from '../models/project';
import ProjectItem, { ProjectSize } from '../components/portfolio/project-item';

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
    <div className="container max-w-1000 mx-auto flex content-center flex-wrap px-6 lg:p-0">
      <div className="py-5 flex flex-wrap lg:flex-nowrap items-center">
        <div className="text-pink text-6xl font-serif uppercase w-1/2 leading-normal">
          I'm Kat,
        </div>
        <div className="text-xl w-fit lg:-mt-4">
          {' '}
          a designer who enjoys fashioning fulfilling journeys for users on the
          web, and beyond.
        </div>
      </div>
      <div className="pb-2">
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

      <div>
        <div
          className="grid grid-cols-2 lg:grid-cols-5 gap-4 my-6"
          id="gallery"
        >
          {prevProjects.map((node) => {
            return (
              <ProjectItem
                project={node.frontmatter}
                size={ProjectSize.Small}
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
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
`;

export default Portfolio;
export const Head: HeadFC = () => <SEO title="portfolio" />;
