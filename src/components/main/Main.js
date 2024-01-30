import React, { useState, useEffect } from 'react';
import '../../styles/Main.css';
import Form from './Form';
// import Services from './Services';
// import WhyUs from './WhyUs';
import img1 from '../../assets/myGallery/img1.jpg';
import img2 from '../../assets/myGallery/img2.jpg';
import img3 from '../../assets/myGallery/img3.jpg';
import img4 from '../../assets/myGallery/img4.jpg';
import img5 from '../../assets/myGallery/img5.jpg';
import img6 from '../../assets/myGallery/img6.jpg';

const images = [img1, img2, img3, img4, img5, img6];

const Main = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageClicked, setIsImageClicked] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openImage = () => {
    setIsImageClicked(true);
  };

  const closeImage = () => {
    setIsImageClicked(false);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <div className="upperMain">
        <section className="heroSection">
          {/* Display the current image */}
          <button className='btn' onClick={prevImage} >&gt;</button>
          <img
            src={images[currentImageIndex]}
            alt="images"
            className="image"
            onClick={openImage}
            style={{ cursor: 'pointer' }}
          />
          <button className='btn' onClick={nextImage}>&lt;</button>
        </section>
      </div>
      <div className="midMain">
        {/* <Services/> */}
        {/* <hr />
        <WhyUs/> */}
      </div>
      <div className="lowerMain">
        <Form />
      </div>
      {isImageClicked && (
        <div className="lightbox" onClick={closeImage}>
          <img
            src={images[currentImageIndex]}
            alt="images"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
};

export default Main;
