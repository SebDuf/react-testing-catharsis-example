### What is React Testing Catharsis?

The goal of this project is to create a boilerplate
for a production ready React/Typescript application that is
already setup to test using Enzyme, Cypress and Puppeteer.

The project was initialized using [Create React App](https://github.com/facebook/create-react-app) for Typescript
and 

### Install

> _This repo uses yarn, but you can easily modify the scripts to use npm instead if you desire._

Clone the repo and run this script in the root directory:

`yarn install:all`

This will run yarn in the root directory and in both test directories (`test/acceptance` and `test/e2e`)

### Why three different testing frameworks?

These three frameworks were selected for their pros at different
levels:

#### [Enzyme](https://airbnb.io/enzyme/)

Enzyme is great for unit testing React components in isolation of the browser,
without the fragility of snapshot tests. You can trigger lifecycles, update the props or
manipulate the state directly while validating that elements are rendered via selectors.

#### [Cypress](https://www.cypress.io/)

Cypress is often sold as the successor to the long-lived Selenium.
It allows you to control your application via a real Chromium instance, but
also enables manipulation of network requests, Redux store and much more.
This allows you to put your application in a very precise state very easily, and makes
testing specific parts of your application a breeze.

#### [Puppeteer](https://pptr.dev/)

Puppeteer is a project by Google that also allows you to control a real Chromium browser.
One of the biggest difference with Cypress is that it allows you to manipulate multiple browsers and tabs
simultaneously. This enables multi-user testing in an environnement very close
to the real world. 

### Why Storybook?

Storybook allows you to build visual components in a sandbox and create a knowledge base on how
to use your projects' custom components. By itself, it might not be obvious how it fits in your
testing toolbox, but external services allows you to do visual regression testing of your components,
thanks to your Storybook.

#### [Chromatic](https://www.chromaticqa.com/) 

Visual regression testing built for Storybook by Storybook maintainers.

#### [Happo](https://happo.io/) 

Visual regression testing that supports cross-browser testing. Has a [plugin](https://github.com/happo/happo-plugin-storybook) to support Storybooks.


