import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

html {
  height: -webkit-fill-available;
}

body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

html {
  width:100vw;
  overflow-x:hidden;
}

body::-webkit-scrollbar {
    width: 10px;
}

body::-webkit-scrollbar-thumb {
  background-color: rgba(55, 41, 44, .4);
}

body::-webkit-scrollbar-track {
    background: transparent;
}

:root {
  scroll-behavior: smooth;
  --size-300: 0.75rem;
  --size-400: 1rem;
  --size-500: 1.33rem;
  --size-600: 1.77rem;
  --size-700: 2.36rem;
  --size-800: 3.15rem;
  --size-900: 4.2rem;
}

body {
  font-family: 'Lora', -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue,
    helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif, 'Amatic SC';
  transition-property: background-color, color, background;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  background-attachment: fixed;
  font-smoothing: antialiased;
}

body.light-mode {
  color: #37292C;
  background-color: white;
  //background-image: linear-gradient(15deg, #ffeedd 0%, #ffffff 50%);
}

body.dark-mode {
  color: #e9e9e9;
  background-color: #252526;
}

body.dark-mode ::selection{
  background: #e9e9e9;
  color: #252526;
}

body.light-mode ::selection{
  background: #37292C;
  color: white;
}

h1,
h2,
h3,
h4 {
  line-height: 1.125;
}

h1,
h2,
h3 {
  font-weight: 700;
}

@media screen and (min-width: 701px) {
  & h1 {
    font-size: var(--size-700);
    // font-size: var(--size-800);
    font-family: 'Montserrat';
  }

  & h2 {
    font-size: var(--size-600);
    font-family: 'Montserrat';
  }
  
  & h3 {
    font-size: var(--size-500);
    font-family: 'Montserrat';
  }
}

@media screen and (max-width: 700px) {
  & h1 {
    font-size: var(--size-700);
    // font-size: var(--size-800);
    font-family: 'Montserrat';
  }

  & h2 {
    font-size: var(--size-600);
    font-family: 'Montserrat';
  }
  
  & h3 {
    font-size: var(--size-500);
    font-family: 'Montserrat';
  }
}

@media screen and (max-width: 420px) {
  & h1 {
    // font-size: var(--size-600);
    font-size: 7vw;
    font-family: 'Montserrat';
  }

  & h2 {
    font-size: 6vw;
    font-family: 'Montserrat';
  }
  
  & h3 {
    font-size: 5vw;
    font-family: 'Montserrat';
  }
}


// h1 {
//   font-size: var(--size-700);
//   // font-size: var(--size-800);
//   font-family: 'Montserrat';
// }



p {
  font-size: var(--size-400);
}

p, li {
    max-width: none;
}

.gatsby-resp-image-wrapper {
    margin-left: 0 !important;
}


`;

export default GlobalStyle;
