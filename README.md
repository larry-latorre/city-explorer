# React + Vite

## City Explorer

**Author**: Larry Latorre
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

The application is a weather forecast app that enables users to explore the weather forecast for a chosen city.

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture

The weather forecast application is designed as a full-stack web application, utilizing both a frontend (built with React) and a backend (built with Node.js and Express). The frontend communicates with the backend to fetch weather data based on the user's city input.

**Frontend:**

- **Language:** JavaScript (ES6+)
- **Library:** React.js
- **State Management:** React Hooks (useState)
- **Styling:** React Bootstrap
- **HTTP Requests:** Axios
- **Map Rendering:** LocationIQ Static Maps API

**Backend:**

- **Language:** JavaScript (Node.js)
- **Framework:** Express.js
- **HTTP Requests:** Axios
- **Weather Data:** OpenWeatherMap API
- **Environment Variables:** Dotenv

**Application Flow:**

1. **City Input:**
   - User enters a city name in the input field.
   - On form submission, the frontend makes a request to the LocationIQ API to get latitude and longitude coordinates for the entered city.

2. **LocationIQ API Response:**
   - The frontend receives the response from the LocationIQ API, which contains location information, including latitude and longitude.

3. **Weather API Request:**
   - The frontend then makes a request to the server's `/weather` endpoint, passing the obtained latitude and longitude.

4. **Server Processing:**
   - The server receives the request, constructs the URL for the OpenWeatherMap API with the provided coordinates, and fetches the weather data.

5. **Weather API Response:**
   - The server sends the weather data back to the frontend.

6. **Frontend Rendering:**
   - The React component (`Weather.js`) receives the weather data and renders it on the page, providing a visual representation of the weather forecast for the specified city.

7. **Map Rendering:**
   - The LocationIQ Static Maps API is used to generate a static map image based on the latitude and longitude of the city. The map is displayed alongside the weather information.

**Key Technologies:**

- **React:** For building a dynamic and interactive user interface.
- **Node.js:** For building the server-side application.
- **Express.js:** As a minimal and flexible Node.js web application framework.
- **Axios:** For making HTTP requests from both the frontend and the backend.
- **LocationIQ API:** For geocoding city names to obtain latitude and longitude.
- **OpenWeatherMap API:** For fetching weather forecast data.
- **React Bootstrap:** For styling and UI components.

**Design Considerations:**

- The application separates concerns by having a frontend and a backend, enabling scalability and maintainability.
- Asynchronous requests are made to external APIs to fetch location and weather data.
- React components are used to modularize the frontend code and facilitate reusability.
- The application follows a responsive design approach for a better user experience across various devices.

By combining these technologies and design considerations, the weather forecast application provides users with an intuitive interface to explore weather information for different cities.

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Credit and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

Name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____





This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
