const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div key={image.src} className="image-item">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
