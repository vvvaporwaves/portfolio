import React, { useEffect, useRef } from 'react';
import { graphql, PageProps, type HeadFC } from 'gatsby';

import SEO from '../../components/seo';
import Project from '../../models/Project';
import ProjectItem from '../../components/portfolio/project-item';

type DataProps = {
  projects: {
    nodes: {
      frontmatter: Project;
    }[];
  };
};

const Portfolio = ({ data: { projects } }: PageProps<DataProps>) => {
  return (
    <div
      className="container grid m-auto grid px-6 lg:p-0 grid-cols-2 lg:grid-cols-3 gap-4"
      id="gallery"
    >
      {projects.nodes.map((node) => {
        return <ProjectItem project={node.frontmatter} />;
      })}
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
