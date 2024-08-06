import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const WidgetElement = ({
  id,
  catalogue,
  isTitle,
  isPrice,
  isMedia,
  isDescription,
  isDarkMode,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      const root = ReactDOM.createRoot(element);
      root.render(
        <App
          id={id}
          catalogue={catalogue}
          isTitle={isTitle}
          isPrice={isPrice}
          isMedia={isMedia}
          isDescription={isDescription}
          isDarkMode={isDarkMode}
        />
      );
    }
  }, []);

  return <div ref={ref}></div>;
};

class WidgetCustomElement extends HTMLElement {
  connectedCallback() {
    const element = this;
    const id = element.getAttribute("id") || "";
    const isTitle = element.hasAttribute("isTitle");
    const isPrice = element.hasAttribute("isPrice");
    const isMedia = element.hasAttribute("isMedia");
    const isDescription = element.hasAttribute("isDescription");
    const isDarkMode = element.hasAttribute("isDarkMode");
    const catalogue = element.getAttribute("catalogue") || "";

    const root = ReactDOM.createRoot(element);
    root.render(
      <WidgetElement
        id={id}
        catalogue={catalogue}
        isTitle={isTitle}
        isPrice={isPrice}
        isMedia={isMedia}
        isDescription={isDescription}
        isDarkMode={isDarkMode}
      />
    );
  }
}

customElements.define("product-list-widget", WidgetCustomElement);
