import React, { useState } from 'react';
import { graphql, HeadFC, HeadProps, Link, PageProps } from 'gatsby';

import SEO from '../components/seo';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ImageProps } from '../models/project';

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
      banner_image: ImageProps;
    };
  };
};

const ProjectPage = ({
  data: { project },
  pageContext
}: PageProps<DataProps, ContextProps>) => {
  return (
    <div className="flex flex-col w-full mt-10 items-center">
      <div className="p-5 lg:p-0 max-w-full lg:max-w-1000 flex w-full items-center flex-wrap">
        <h2 className="heading">{`${project.frontmatter.title},`}</h2>
        <span>{project.frontmatter.subtitle}</span>
      </div>

      <div className="mockup-window border bg-[#EC77A8] my-4 mx-auto box-border lg:mx-auto self-start w-fit lg:w-full lg:max-w-1000">
        <div className="bg-[#141315] border-t">
          {project.frontmatter.banner_image ? (
            <GatsbyImage
              className="w-fit"
              alt={project.frontmatter.title}
              image={
                project.frontmatter.banner_image.childImageSharp.gatsbyImageData
              }
            />
          ) : (
            <iframe
              className="w-full h-[500px] lg:h-auto lg:aspect-video"
              src={project.frontmatter.preview_url}
              title={project.frontmatter.title}
              allowFullScreen={true}
            ></iframe>
          )}
        </div>
      </div>

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
        preview_url
        banner_image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;

export default ProjectPage;
export const Head: HeadFC<DataProps> = (props: HeadProps<DataProps>) => (
  <SEO title={props.data.project.frontmatter.title} />
);
