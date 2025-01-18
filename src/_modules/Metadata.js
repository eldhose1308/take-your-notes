import React from "react";
import { Helmet } from "react-helmet";

import { useMetadata } from "_contexts/MetadataProvider";


const Metadata = ({ title='', description='', author, publishedTime }) => {
    const defaultMetadata = useMetadata();

    return (
      <Helmet>
        <title>{title || defaultMetadata.title}</title>
        <meta name="description" content={description || defaultMetadata.description} />
        <meta property="og:title" content={title || defaultMetadata.title} />
        <meta property="og:description" content={description || defaultMetadata.description} />
        <meta property="og:type" content="article" />
        
        {author && <meta property="article:author" content={author} />}
        {publishedTime && <meta property="article:published_time" content={publishedTime} />}

        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Make My Blog" />
        <meta property="og:locale" content="en_US" />

      </Helmet>
    );
  };
  
  export default Metadata;
  