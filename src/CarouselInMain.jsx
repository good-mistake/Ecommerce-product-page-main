import React from "react";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imageProduct1 from "./images/image-product-1.jpg";
import imageProduct2 from "./images/image-product-2.jpg";
import imageProduct3 from "./images/image-product-3.jpg";
import imageProduct4 from "./images/image-product-4.jpg";
const CarouselInMain = () => {
  const [showModal, setShowModal] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="cursor">
        <Carousel
          infiniteLoop
          showIndicators={false}
          showArrows={true}
          width={`100%`}
        >
          <div onClick={openModal}>
            <img src={imageProduct1} alt="" />
          </div>
          <div onClick={openModal}>
            <img src={imageProduct2} alt="" />
          </div>
          <div onClick={openModal}>
            <img src={imageProduct3} alt="" />
          </div>
          <div onClick={openModal}>
            <img src={imageProduct4} alt="" />
          </div>
        </Carousel>
      </div>

      {screenSize < 768
        ? ""
        : showModal && (
            <div className="modal" onClick={closeModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <Carousel
                  infiniteLoop
                  showIndicators={false}
                  showArrows={true}
                  width={`80%`}
                >
                  <div>
                    <img src={imageProduct1} alt="" />
                  </div>
                  <div>
                    <img src={imageProduct2} alt="" />
                  </div>
                  <div>
                    <img src={imageProduct3} alt="" />
                  </div>
                  <div>
                    <img src={imageProduct4} alt="" />
                  </div>
                </Carousel>
              </div>
            </div>
          )}
    </>
  );
};
export default CarouselInMain;
