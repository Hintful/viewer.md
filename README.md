# viewer.md

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## Try Live

Feel free to try the live demo of this project on my website at: https://kurtchoi.dev/viewer.md



## Description

A simple React-based Markdown viewer.

The Markdown is parsed via [Marked.js](https://marked.js.org/) - to deal with XSS attack vulnerability issue when using React's DOM Element for rendering HTML, `dangerouslySetInnerHTML()`, the Markdown is sanitized with [DOMPurify](https://github.com/cure53/DOMPurify) before being rendered into HTML. The webpage is stylized with SCSS.



## How To Run

Simply run: `npm start` from the root working directory - website will be deployed locally at: https://localhost:3000.

