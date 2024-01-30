// ImageGallery.js
import React from 'react';
import '../../styles/Main.css';
const ImageGallery = ({ imagePaths }) => {
  // Calculate the number of images per column
  const imagesPerColumn = Math.ceil(imagePaths.length / 3);

  // Distribute the images into three columns
  const columns = Array.from({ length: 3 }, (v, columnIndex) =>
    imagePaths.slice(columnIndex * imagesPerColumn, (columnIndex + 1) * imagesPerColumn)
  );

  return (
    <div className="imageContainer">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="column">
          {column.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Images"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
