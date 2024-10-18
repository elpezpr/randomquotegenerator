# Random Quote Generator

A simple web application that fetches and displays random inspirational quotes with a sci-fi themed design.

## Overview

- **Purpose**: Provides users with random quotes to inspire and motivate, presented in a sleek, futuristic interface.
- **Design**: Utilizes the 'Orbitron' font from Google Fonts and a dark, neon-accented color scheme to create a sci-fi aesthetic.
- **Functionality**: Fetches quotes from the [ZenQuotes API](https://zenquotes.io/) using asynchronous JavaScript and displays them with smooth fade-in animations.

  ## Test the App
    https://codepen.io/elpezpr/pen/zYgzKqE

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Google Fonts**
- **ZenQuotes API**

## Project Structure

- **index.html**: Contains the HTML structure of the application.
- **styles.css**: Includes all the styling and animations.
- **script.js**: Handles fetching quotes and updating the DOM.

## Notes

- Uses a CORS proxy (`https://cors-anywhere.herokuapp.com/`) to bypass cross-origin restrictions when fetching quotes.
- Implements error handling to display a fallback message if a quote cannot be fetched.
- The design is responsive and centers content both vertically and horizontally.

## Credits

- **Quotes API**: [ZenQuotes API](https://zenquotes.io/)
- **Font**: [Orbitron by Matt McInerney](https://fonts.google.com/specimen/Orbitron)
- **CORS Proxy**: [cors-anywhere](https://cors-anywhere.herokuapp.com/)
