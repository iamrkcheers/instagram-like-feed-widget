import React from "react";
import ProductFeed from "./Components/ProductFeed";
import "./App.css";

const App = ({
  id,
  catalogue,
  height,
  isTitle,
  isPrice,
  isMedia,
  isDescription,
  isDarkMode,
}) => {
  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      <main>
        <ProductFeed
          productUrl={catalogue}
          fields={{
            isTitle,
            isPrice,
            isMedia,
            isDescription,
          }}
          isDarkMode={isDarkMode}
        />
      </main>
    </div>
  );
};

export default App;
