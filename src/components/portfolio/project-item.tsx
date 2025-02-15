import React from 'react';
import Project from '../../models/project';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { toKebabCase } from '../../utils';

export enum ProjectSize {
  Small,
  Large
}

export enum ProjectType {
  UI_UX,
  THREE_D
}

interface Props {
  project: Project;
  size: ProjectSize;
  type: ProjectType;
}

const ProjectItem = ({ project, size, type }: Props) => {
  const baseUrls: Record<ProjectType, string> = {
    [ProjectType.UI_UX]: 'portfolio',
    [ProjectType.THREE_D]: '3d'
  };

  return (
    <div className="project-item-container">
      <Link to={`/${baseUrls[type]}/${toKebabCase(project.title)}`}>
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
