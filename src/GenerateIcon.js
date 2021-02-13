import React from 'react';
import Pencile from './icon/Pencile';
import Delete from './icon/Delete';

const components = {
  Pencile,
  Delete,
};

const IconGenerator = ({tagName, ...props}) => {
  const TagName = components[tagName];

  if (TagName) {
    return <TagName {...props} />;
  } else {
    return null;
  }
};

export default IconGenerator;
