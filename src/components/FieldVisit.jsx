import React, { useState } from "react";

export const FieldVisit = () => {
  const images = [
 "/img/FieldVisit/1.jpg",
    "/img/FieldVisit/2.jpg",
    "/img/FieldVisit/3.jpg",
    "/img/FieldVisit/4.jpg",
    "/img/FieldVisit/5.jpg",
    "/img/FieldVisit/6.jpg",
    "/img/FieldVisit/7.jpg",
    "/img/FieldVisit/8.jpg",
    "/img/FieldVisit/9.jpg",
    "/img/FieldVisit/10.jpg",
    "/img/FieldVisit/11.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="field-visit" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Field Visit</h2>
        </div>
        <div
          style={{
            position: "relative",
            width: "600px",
            height: "400px", // Fixed height for consistency
            margin: "auto",
            overflow: "hidden",
            borderRadius: "10px",
          }}
        >
          <img
            src={images[currentIndex]}
            alt={`Field Visit ${currentIndex + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // keeps image aspect ratio and fills container
              borderRadius: "10px",
            }}
          />

          <button
            onClick={prevImage}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "green",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            }}
          >
            &#8592;
          </button>

          <button
            onClick={nextImage}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "green",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            }}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};
