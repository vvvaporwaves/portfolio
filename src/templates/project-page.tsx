import React, { useState } from 'react';
import { graphql, HeadFC, HeadProps, Link, PageProps } from 'gatsby';

import SEO from '../components/seo';
import CommentModal from '../components/blog/comment-modal';

type ContextProps = {
  id: string;
};

type DataProps = {
  project: {
    html: string;
    frontmatter: {
      title: string;
      subtitle: string;
      preview_url: string;
    };
  };
};

const ProjectPage = ({
  data: { project },
  pageContext
}: PageProps<DataProps, ContextProps>) => {
  return (
    <div className="flex flex-col w-full my-10 mx-6 sm:mx-0 items-center">
      <div className="flex w-full items-center">
        <h2 className="text-4xl font-semibold uppercase text-pink text-center font-serif">
          {`${project.frontmatter.title},`}
        </h2>
        <span className="ml-3">{project.frontmatter.subtitle}</span>
      </div>

      <div class="mockup-window border bg-[#EC77A8] mt-4 self-start">
        <div class="bg-[#141315] border-t">
          <iframe
            src={project.frontmatter.preview_url}
            title="fireflower"
          ></iframe>
        </div>
      </div>

      <article
        className="flex w-full flex-col blog-post text-white gap-3 my-10"
        style={{ maxWidth: 1000 }}
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
        preview_url
      }
    }
  }
`;

export default ProjectPage;
export const Head: HeadFC<DataProps> = (props: HeadProps<DataProps>) => (
  <SEO title={props.data.project.frontmatter.title} />
);
