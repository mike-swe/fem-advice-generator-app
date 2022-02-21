# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/frontend-mentor-advice-generator-app-pZwY7jmrX)
- Live Site URL: [Vercel](https://fem-advice-generator-app.vercel.app/)

### Built with

- Semantic HTML5 markup
- SASS/SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript ES6 (Fetch API)


### What I learned

```JavaScript

    fetch("https://api.adviceslip.com/advice")

    .then(res => {

       return res.json()

    })
```

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [W3CSchool](https://www.w3schools.com/js/js_api_fetch.asp)

## Author

- Website - [Main Funktion](https://www.mainfunktion.me)
- Frontend Mentor - [@mainfunktion](https://www.frontendmentor.io/profile/mainfunktion)
- Twitter - [@mainfunktion](https://www.twitter.com/mainfunktion)
