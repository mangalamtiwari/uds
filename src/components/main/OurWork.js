import img1 from '../../assets/myGallery/img1.jpg';
import img2 from '../../assets/myGallery/img2.jpg';
import img3 from '../../assets/myGallery/img3.jpg';
import img4 from '../../assets/myGallery/img4.jpg';
import img5 from '../../assets/myGallery/img5.jpg';
import img6 from '../../assets/myGallery/img6.jpg';
import ImageGallery from './ImageGallery';

function OurWork() {
    // Array of img paths
    const imgPaths = [img1, img2, img3,img4,img5,img6,img1, img2, img3,img4,img5,img6, img1, img2, img3,img4,img5,img6];
  
    return (
      <div>
        <ImageGallery imagePaths={imgPaths} />
      </div>
    );
  }
  
  export default OurWork;
  