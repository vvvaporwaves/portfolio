import React, { useState } from 'react';
import { graphql, HeadFC, HeadProps, Link, PageProps } from 'gatsby';

import SEO from '../components/seo';
import '@google/model-viewer';

type ContextProps = {
  id: string;
};

type DataProps = {
  project: {
    html: string;
    frontmatter: {
      title: string;
      subtitle: string;
      preview_3d: {
        publicURL: string;
      };
    };
  };
};

const ProjectPage = ({
  data: { project },
  pageContext
}: PageProps<DataProps, ContextProps>) => {
  console.log(project);
  return (
    <div className="flex flex-col w-full mt-10 items-center">
      <div className="p-5 lg:p-0 max-w-full lg:max-w-1000 flex w-full items-center flex-wrap">
        <h2 className="heading">{`${project.frontmatter.title},`}</h2>
        <span>{project.frontmatter.subtitle}</span>
      </div>

      <model-viewer
        src={project.frontmatter.preview_3d.publicURL}
        alt={project.frontmatter.title}
        auto-rotate
        camera-controls
        style={{ width: '100%', height: '500px' }}
      />

      <article
        className="flex w-full flex-col project-post text-white gap-3 my-5"
        //style={{ maxWidth: 1000 }}
        dangerouslySetInnerHTML={{ __html: project.html }}
      />
    </div>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    project: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        preview_3d {
          publicURL
        }
      }
    }
  }
`;

export default ProjectPage;
export const Head: HeadFC<DataProps> = (props: HeadProps<DataProps>) => (
  <SEO title={props.data.project.frontmatter.title} />
);
