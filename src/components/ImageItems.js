import React from 'react';
import './SearchBar.css';
import ImageCard from './ImageCard';
export default function ImageItems(props) {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
}
