import React from 'react';

const Image = ({ src, alt, className }) => {

  return (
<img src={src} alt={alt} className={className} />
  )
}
Image.defaultProps = {
  src: '',
  alt: 'image name',
  className: '',
}
export default Image;
