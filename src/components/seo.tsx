import React from 'react';
import useSiteMetadata from '../hooks/use-site-metadata';

interface Props {
  title?: string;
  description?: string;
  pathname?: string;
  children?: any;
}

const SEO = ({ title, description, pathname, children }: Props) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername
  } = useSiteMetadata();

  const seo = {
    title: title ? `${defaultTitle} - ${title}` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="og:image" content={seo.image} />
      <meta name="og:image:width" content="1200" />
      <meta name="og:image:height" content="630" />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:site_name" content={seo.title} />
      <meta name="og:url" content={seo.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <link rel="icon" href="favicon.png" />
      
      {children}
    </>
  );
};

export default SEO;
