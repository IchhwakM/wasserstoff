# WSTF - Europe Hexagonal Map

## Overview

This project, named WSTF - Europe Hexagonal Map, is designed to visualize geographical data using a hexagonal map of Europe. The application is built using modern web technologies and libraries to ensure a seamless and interactive user experience.

## Technology Stack

### Frontend

- **React (v18.2.0)**: A JavaScript library for building user interfaces.
- **React DOM (v18.2.0)**: A package for React for the DOM rendering.
- **Material-UI (v5.15.6)**: A popular React UI framework for building responsive and consistent user interfaces.
  - [**@mui/icons-material**](https://mui.com/components/material-icons/): Material-UI's set of pre-designed and customizable icons.
  - [**@mui/material**](https://mui.com/getting-started/installation/): Material-UI's core components and styling.
- **Emotion (v11.11.0 & v11.11.3)**: A popular CSS-in-JS library for styling React components.
  - [**@emotion/react**](https://emotion.sh/docs/introduction): Core library for Emotion.
  - [**@emotion/styled**](https://emotion.sh/docs/styled): A utility for styling React components with Emotion.

### Data Handling and Visualization

- **D3.js (v7.8.5)**: A powerful JavaScript library for creating interactive data visualizations in the browser.
- **D3 Hexbin (v0.2.2)**: A D3 plugin for creating hexagonal binning visualizations.

### External Services

- **Axios (v1.6.6)**: A promise-based HTTP client for making requests to external APIs.

### Development Tools

- **TypeScript (v4.9.5)**: A typed superset of JavaScript that enhances the development experience.
- **Webpack**: Module bundler for the frontend.
- **React Scripts (v5.0.1)**: A set of scripts for creating React applications.

### Linting and Code Quality

- **Browserslist**: Configuration to share target browsers between different front-end tools.
- **Web Vitals (v2.1.4)**: Library for measuring web performance.

## Scripts

- **start**: Start the development server.
- **build**: Build the application for production.
- **test**: Run tests using Jest.
- **eject**: Eject from create-react-app configuration (use with caution).

## Getting Started

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Use `npm start` to run the development server.
4. Visit `http://localhost:3000` in your browser to view the application.

## Video Explaining the project

[**Link**](https://drive.google.com/drive/folders/106oEHdD6eKPW2QbSai6GP9XX7BnQ_jsF)

## Hosted Link for the project

[**Link**](https://beautiful-donut-078323.netlify.app/)

## How I approached the task

This project, WSTF - Europe Hexagonal Map, was initiated in response to a task, accompanied by a Figma link with desired UI. The task involved using React to translate the Figma design into a functional application. The Figma design comprised a hexagonal world map displaying sales, product information, and other details. Each hexagon featured a tooltip with a description, sales information, and an icon with the corresponding name.
To approach the task, I thoroughly examined the provided description to understand the application functionalities. Unfortunately, a data URL was not available, so I collected and stored the required data within the project. My initial research involved exploring how to effectively implement the hexagonal map, and after checking various resources, I found a suitable library capable of handling diverse data visualizations. Leveraging JavaScript and ReactJS, I successfully implemented the desired map functionality.
A significant feature of the project was a dialog displaying data in a bubble format graph. This graph featured the Y-axis ranging from 0 to 1k and the X-axis representing months.
While implementing map and graph feature, I encountered challenges, but through persistent efforts and multiple iterations, I successfully utilized D3.js to achieve the desired outcome.
In conclusion, the project presented several challenges, the application requirements, strategic data handling, and effective utilization of libraries such as D3.js, material UI and React, I was able to successfully complete the project. The end result is a functional and visually pleasing hexagonal map application meeting the outlined specifications.
