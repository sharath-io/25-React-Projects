import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./imageStyles.css";

export const ImageSlider = ({ url, path = 1, limit = 5 }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  const getImages = async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const response = await fetch(`${url}?page=${path}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setLoading(false);
        setImages(data);
        console.log(data);
      }
    } catch (error) {
      setLoading(false);
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    if (url !== "") getImages();
  }, [url]);

  if (loading) {
    return <div>Loaing data....</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occurred {errorMsg}</div>;
  }

  const handlePrevious = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <div>
      <h1 className="text-2xl mb-2 ">Project-4 : Image Slider</h1>
      <div className="container">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={handlePrevious}
        />
        {images && images.length
          ? images.map((image, index) => (
              <img
                className={
                  currentImage === index
                    ? "current-image"
                    : "current-image hide-image"
                }
                key={index}
                src={image.download_url}
                alt={image.download_url}
              />
            ))
          : null}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
        />
        <span className="circle-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={
                currentImage === index
                  ? "current-indicator"
                  : "current-indicator inactive-indicator"
              }
            ></button>
          ))}
        </span>
      </div>
    </div>
  );
};
