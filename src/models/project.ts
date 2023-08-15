import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface ImageProps {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
}

export default interface Project {
  title: string;
  subtitle: string;
  date: Date;
  preview_image: ImageProps;
  preview_url: string;
  tags: string[];
}
