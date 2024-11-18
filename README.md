# CAVU Technical Task

A flight departures board written using Vue 2.

## Run Locally

Clone the project.

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Run tests

```bash
  npm run test
```

## External Packages

- axios: JavaScript library for making HTTP requests. I chose it over fetch for its ease of use and integration with Nuxt.js.
- SCSS: I chose SCSS because I'm comfortable with its syntax and it provides features like variables, nesting, and mixins that help keep styles organised and maintainable.
- @nuxtjs/style-resources: I used this to manage global SASS resources (variables, mixins).

## Additional Comments

I encountered a weird issue where my commits are showing up as another user on GitHub, I've managed to fix the last commit to be my account but please ignore this - this is all my own work.

I don't usually add comments to my code but I wanted to add some comments to this project to help reviewers understand the code better.

This code is intended to be run locally and does not involve any sensitive data. While there are some known vulnerabilities in the dependencies (as reported by `npm audit`), they don't pose a significant risk in the local environment.

Given more time, I would've liked to improve:

- Accessibility: I decided to use a grid layout for the departures table as the gradient and border radius was quite hard to get correct across browsers. However I know this is not the most accessible but I have added aria labels and roles to the custom table to try make it a bit better.
- Responsiveness: I would like to improve the card layout on smaller screens to utilise more of the right side.
- Cross Browser Compatibility: For the form component, I could improve the dropdown and radio buttons by styling them to be more consistent across browsers.

  
