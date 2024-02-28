import React from 'react';
import Project from '../../models/project';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { toKebabCase } from '../../utils';

export enum ProjectSize {
  Small = 'Small',
  Large = 'Large'
}

interface Props {
  project: Project;
  size: ProjectSize;
}

const ProjectItem = ({ project, size }: Props) => {
  return (
    <div className="project-item-container">
      <Link to={`/portfolio/${toKebabCase(project.title)}`}>
        <span
          className={
            size === ProjectSize.Large ? 'project-title' : 'project-title-small'
          }
        >
          {project.title}
        </span>

        <GatsbyImage
          className="w-full rounded-full aspect-square"
          alt={project.title}
          image={project.preview_image.childImageSharp.gatsbyImageData}
        />
      </Link>
    </div>
  );
};

export default ProjectItem;
