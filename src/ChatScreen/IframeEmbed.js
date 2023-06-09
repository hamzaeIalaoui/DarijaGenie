import React from 'react';

const IframeEmbed = ({ iframe }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: iframe ? iframe : "" }}
    />
  );
};

export default IframeEmbed; 