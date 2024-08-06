import React, { useRef, useState, useEffect } from "react";
import "./styles.css";

// A component to render individual product cards
const ProductCard = ({ product, fields, loading, isDarkMode }) => {
  const [isInView, setIsInView] = useState(false); // State to check if the card is in view
  const cardRef = useRef(); // Reference for the product card element

  useEffect(() => {
    // IntersectionObserver to check if the product card is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Disconnect observer once the card is in view
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the card is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`product-card ${isDarkMode ? "dark" : "light"}`}
      ref={cardRef}
    >
      {loading ? (
        <div className="skeleton-wrapper">
          <div className="skeleton-image" />
          <div className="skeleton-text" />
        </div>
      ) : (
        <>
          {fields.isMedia &&
            isInView && // Only render media if the card is in view
            (product.type === "image" ? (
              <img
                className={`media ${isDarkMode ? "dark" : "light"}`}
                src={product.src}
                alt={product.name}
              />
            ) : (
              <video
                className={`media ${isDarkMode ? "dark" : "light"}`}
                src={product.src}
                alt={product.name}
                autoPlay
                loop
                muted
                playsInline
              />
            ))}
          {fields.isTitle && <h2>{product.name}</h2>}
          {fields.isDescription && <p>{product.description}</p>}
          {fields.isPrice && <p>{product.price}</p>}
        </>
      )}
    </div>
  );
};

export default ProductCard;
