# Instagram Like Feed Widget

A customizable product widget built with React that can be embedded into any blog post or website. This widget displays a list of products with various features and supports light and dark themes.

## Project Structure

.
├── dist
│ ├── widget.js # Bundled and minified widget application. Has been deployed to [https://iamrkcheers.github.io/data/widget.js].
├── public
│ ├── index.html # Main HTML template for React app
├── src
│ ├── Components
│ │ ├── ProductFeed.js # Main component for displaying the product list
│ │ ├── ProductCard.js # Component for the individual product
│ │ ├── SearchFilter.js # Component for search and filtering
│ │ └── ToggleSwitch.js # Toggle switch component for dark/light mode (not utilised in the final working of the app)
│ ├── App.js # Main React application component
│ ├── entryPoint.js # Entry point for the widget bundle
│ ├── index.css # Global CSS styles
│ └── index.js # React entry point for the main app
├── .babelrc # Babel configuration file
├── webpack.config.js # Webpack configuration file
├── package.json # Project dependencies and scripts
├── index.html # Dummy file to test the working of the widget
└── README.md # Project documentation

## Tech Stack

- **React:** JavaScript library for building user interfaces
- **Webpack:** Module bundler for JavaScript applications
- **Babel:** JavaScript compiler to use next-generation JavaScript
- **CSS:** Styling the widget

## How the Widget Works

1. **Widget Structure:**

   - The `ProductFeed` component displays a list of products.
   - `SearchFilter` allows users to search and filter products.

2. **Widget Customization:**

   - **`catalogue`**: URL to fetch product data from.
   - **`isTitle`, `isPrice`, `isMedia`, `isDescription`**: Flags to display product title, price, media, and description.
   - **`isDarkMode`**: Enables dark mode if set.

3. **Embedding the Widget:**
   - Include the widget script in your HTML:
     ```html
     <script src="https://iamrkcheers.github.io/data/widget.js" defer></script>
     ```
   - Embed the widget in your HTML:
     ```html
     <product-list-widget
       id="widget1"
       catalogue="your-json-file.json"
       isTitle
       isPrice
       isMedia
       isDescription
       isDarkMode
     ></product-list-widget>
     ```

### How to Build the Widget

1. npm install
2. npx webpack (This will create a widget.js file in dist folder)
3. Create a dummy index.html file
4. Add <script src="path/to/widget.js" defer></script>
5. Add <product-list-widget id="widget1" catalogue="your-json-file.json" isTitle isPrice isMedia isDescription isDarkMode ></product-list-widget>
6. Run the file using a server
   ( Name: Live Server
   Id: ritwickdey.LiveServer
   Description: Launch a development local Server with live reload feature for static & dynamic pages
   Version: 5.7.9
   Publisher: Ritwick Dey
   VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer )

### Further Enhancements

1. Including 'view now' and 'buy now' functionalities.
2. Adding more themes than just light & dark.
3. Implementing configuration options via a settings panel.
4. Adding keyboard navigation support for better usability.
5. Adding analytics to track user interactions with the widget.
6. Implementing unit tests and integration tests for better code reliability.
7. Adding support for multiple product list json files.
8. Adding support for multiple images and videos for the same product.
9. Can be converted into an instagram like reels platform for product videos.
10. Adding swiping gestures.

### Note

1. Photos and videos have been taken from 'pexels.com'.
