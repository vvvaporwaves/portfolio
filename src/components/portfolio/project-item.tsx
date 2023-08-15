import React from 'react';
import Project from '../../models/Project';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { toKebabCase } from '../../utils';

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <div className="project-item-container">
      <Link to={`/portfolio/${toKebabCase(project.title)}`}>
        <span className="project-title">{project.title}</span>

        <GatsbyImage
          className="w-full rounded-full"
          alt={project.title}
          image={project.preview_image.childImageSharp.gatsbyImageData}
        />
      </Link>
    </div>
  );
};

export default ProjectItem;
