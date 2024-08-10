# Instagram Like Feed Widget

A customizable product widget built with React that can be embedded into any blog post or website. This widget displays a list of products with various features and supports light and dark themes.

## Project Structure

```
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
```

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

## How to Build the Widget

1. npm install
2. npx webpack (This will create a widget.js file in dist folder)
3. Create a dummy index.html file
4. Add `html<script src="path/to/widget.js" defer></script>`
5. Add `html<product-list-widget id="widget1" catalogue="your-json-file.json" isTitle isPrice isMedia isDescription isDarkMode ></product-list-widget>`
6. Run the file using a server
   ( Name: Live Server
   Id: ritwickdey.LiveServer
   Description: Launch a development local Server with live reload feature for static & dynamic pages
   Version: 5.7.9
   Publisher: Ritwick Dey
   VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer )

## Further Enhancements

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

## Notes

1. Photos and videos have been taken from 'pexels.com'.
2. Have used ChatGPT to clean up the code and help me write comments.

## FAQs

1. **Instrumentation seems to be missing in your design - how would you instrument for usage of the widget?**

Instrumentation is crucial for monitoring how the widget is being used, understanding user behavior, and identifying potential issues. Here’s how I would approach adding instrumentation to the widget:

- Analytics Integration: I would integrate an analytics tool such as Google Analytics, Mixpanel, or Segment to track user interactions with the widget. This could include tracking events like widget load times, user clicks on specific product elements, interactions with filters or search, and toggling between light and dark modes.

- Custom Event Logging: I would add custom event logging for specific actions within the widget. For example, I could log events when users view a product, add a product to the cart, or switch themes. These events can be sent to a backend server or third-party analytics service for further analysis.

- Error Reporting: I would implement error tracking using tools like Sentry or LogRocket to capture any JavaScript errors or exceptions that occur while users interact with the widget. This helps in quickly identifying and addressing issues that could impact user experience.

- Performance Metrics: Collecting performance metrics such as load times, rendering times, and network requests would help in monitoring and optimizing the widget's performance. Tools like Lighthouse or Web Vitals can be used to measure these metrics.

2. **What Are Things You Can Do to Help Debug Issues a User Might Face During Setting Up or After Setting Up from Their End Users?**

To help debug issues that users might face during or after setting up the widget, I would implement the following strategies:

- Detailed Documentation: Providing comprehensive documentation, including setup instructions, troubleshooting guides, and FAQs, can help users resolve common issues on their own. The documentation would cover all possible configurations and potential pitfalls.

- Console Logging: Adding descriptive console logs can help users or developers identify issues during setup or runtime. These logs would be clear, actionable, and would indicate both successful operations and any errors or warnings.

- Error Handling: Implementing robust error handling within the widget. For example, if an API call fails, the widget would display a user-friendly error message and log the error details to the console or a remote server. This helps in diagnosing issues without affecting the user experience.

- Debug Mode: Including a debug mode option in the widget configuration can provide additional logging and insights into the widget’s internal state. This mode could be enabled by users when they encounter issues, providing more detailed information for troubleshooting.

- Support Channels: Offering support channels such as a dedicated email, chat support, or a forum where users can report issues and get assistance. This allows for direct interaction with users facing problems.

3. **How Would You Approach Versioning? How Would You Deploy Future Versions of the Same Widget That Is Running on Multiple Users?**

Versioning is critical for maintaining backward compatibility and ensuring that updates don’t disrupt existing users. Here’s how I would approach it:

- Semantic Versioning: I would use semantic versioning (e.g., 1.0.0) to clearly indicate major, minor, and patch updates. This helps users and developers understand the impact of an update (e.g., breaking changes, new features, or bug fixes).

- Backward Compatibility: When deploying new versions, I would ensure that changes are backward-compatible. For breaking changes, I would increment the major version and provide clear migration guides to help users upgrade smoothly.

- CDN-Based Deployment: The widget is already available on a CDN (Content Delivery Network) to ensure that updates are distributed globally and efficiently. The widget script would include a version number in the URL (e.g., https://cdn.example.com/widget/v1.2.0/widget.js) to allow users to lock onto specific versions.

- Feature Toggles: Implementing feature toggles allows for rolling out new features incrementally and safely. Users would be able to enable or disable new features without needing to change the widget version, providing flexibility during deployment.

- Notification of Updates: Users would be notified of new versions through documentation, email updates, or in-app notifications, along with clear instructions on how to upgrade.

4. **What Kind of Reporting Is Bare Minimum for Such a Capability? Look at the Reporting from One User's Perspective and Then Reporting Across Users from Your, i.e., the Software Builder's Perspective.**

**From a Single User's Perspective:**

- Usage Statistics: Providing reports on how often the widget is being used, including metrics like page views, unique users, and interaction rates (e.g., clicks on products, filter usage).

- Error Reports: Offering a summary of any errors or issues encountered by users interacting with the widget. This would include failed API requests, loading issues, or rendering problems.

- Performance Metrics: Providing insights into the performance of the widget on the user's site, such as load times, responsiveness, and any delays in data fetching.

- Customization and Settings: Reporting on how the widget’s various features are being used, such as the frequency of toggling between dark and light modes, or the most commonly used filters.

**From the Software Builder’s Perspective:**

- Aggregated Usage Data: Collecting and analyzing data across all instances of the widget to identify trends, such as peak usage times, common user flows, and the most popular features. This helps in understanding the overall adoption and effectiveness of the widget.

- Error Tracking Across Users: Aggregating error reports to identify common issues that may affect multiple users. This helps in prioritizing bug fixes and improving the stability of the widget.

- Version Distribution: Tracking which versions of the widget are being used across different sites. This helps in understanding the adoption of new versions and ensuring that critical updates are being applied.

- Performance Benchmarks: Collecting and comparing performance metrics across different environments to identify areas for optimization. This would include insights into how the widget performs on different devices, browsers, or network conditions.

- Feedback and Suggestions: Collecting user feedback and feature requests to guide future development. This would be done through surveys, in-app feedback tools, or direct communication channels.
