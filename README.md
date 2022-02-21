# Frontend Mentor - [Modern Art Gallery Website Solution](https://www.frontendmentor.io/challenges/art-gallery-website)

![Design preview for the Art gallery website solution coding challenge](./screens/preview.jpg)

## Summary

This is a solution to the [Frontend Mentor](https://www.frontendmentor.io) challenge to recreate the [Modern Art Gallery website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/art-gallery-website). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

I built this project to practice my react skills.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Users should be able to:

- [x] View the optimal layout for each page depending on their device's screen size
  - [x] Mobile First
  - [x] Tablet
  - [x] Desktop
- [ ] See hover states for all interactive elements throughout the site
  - [x] Buttons
  - [ ] Social Media Icons
- [x] **Bonus**: Use [Leaflet JS](https://leafletjs.com/) to create an interactive location map with custom location pin

## Screenshots

### Desktop

<!-- #### Mobile
##### `<Home/>`
![](./screens/mobile1-1.png)
![](./screens/mobile1-2.png)
![](./screens/mobile1-3.png)
![](./screens/mobile1-4.png)
![](./screens/mobile1-5.png)
##### `<Location/>` with  [Leaflet JS](https://leafletjs.com/) Map
![](./screens/mobile2-1.png)
![](./screens/mobile2-2.png)
![](./screens/mobile2-3.png) -->

<!-- #### Tablet
![](./screens/tablet1.png)
![](./screens/tablet2.png)
![](./screens/tablet3.png)
![](./screens/tablet4.png) -->

### `<Home/>`

![](./screens/desktop1.png)
![](./screens/desktop2.png)
![](./screens/desktop3.png)
![](./screens/desktop4.png)

### `<Location/>` with [Leaflet JS](https://leafletjs.com/) Map

![](./screens/desktop5.png)
![](./screens/desktop6.png)

## Links

- Solution URL: [View Solution here](https://www.frontendmentor.io/solutions/modern-art-gallery-w-react-styled-components-leafletjs-and-sass-siAf_gMZ8)
- Live Site URL: [View live site here](https://friendly-benz-de5b74.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JavaScript Framework
- [React Styled Components](https://styled-components.com/) - For styles
- [Leaflet JS](https://leafletjs.com/) - Interactive Map Library
- Sass/CSS
- Flexbox
- Mobile-first workflow

### What I learned

- This is my first project using [React Styled Components](https://styled-components.com/). I really enjoyed working with <b>Styled Components</b> because they helped me organize my CSS styles, and incorporate responsiveness
- This is also one of the first projects where I used <b>Sass</b>. Sass is great, because I created resuable variables for fonts, colors, etc.

  - The given <b>Figma</b> specs for colors
    ![](./screens/colors.png)
  - And the <b>Sass/CSS</b> I came up with

    ````
    :root {
    /* color palette */
    --gold: hsl(24, 56%, 63%);
    --almost-black: hsl(0, 0%, 8%);
    --almost-grey: hsl(0, 0%, 27%);
    --white: hsl(0, 0%, 100%);
    }
    ````

  - The given <b>Figma</b> specs for fonts
    ![](./screens/fonts.png)
  - And the <b>Sass/CSS</b> I came up with

    ````
    /* fonts */
    @mixin heading-xl {
    font-family: "Big Shoulders Display", cursive;
    font-size: 96px;
    line-height: 88px;
    text-transform: uppercase;
    }
    @mixin heading-l {
    font-family: "Big Shoulders Display", cursive;
    font-size: 70px;
    line-height: 70px;
    text-transform: uppercase;
    }
    @mixin heading-m {
    font-family: "Big Shoulders Display", cursive;
    font-size: 60px;
    line-height: 50px;
    text-transform: uppercase;
    }
    @mixin heading-s {
    font-family: "Big Shoulders Display", cursive;
    font-size: 36px;
    line-height: 36px;
    text-transform: uppercase;
    }
    @mixin body-m {
    font-family: "Outfit", sans-serif;
    font-weight: 300;
    font-size: 22px;
    line-height: 32px;
    }
    @mixin body-s {
    font-family: "Outfit", sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    }

    /* mobile */
    .title {
    @include heading-m;
    }
    ````

```html
<h1>Some HTML code I'm proud of</h1>
````

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I would like to Review Social Media Icon active state color change. Maybe add some additional pages.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Frontend Mentor - [@Chanda-Abdul](https://www.frontendmentor.io/profile/Chanda-Abdul)
- Website - [Chanda Codes](https://chandacodes.com/)
- GitHub - [github.com/Chanda-Abdul](https://github.com/Chanda-Abdul)
