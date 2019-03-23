### What is React Testing Catharsis?

The goal of this project is to create a boilerplate
for a production ready React/Typescript application that is
already setup to test using Enzyme, Cypress, Puppeteer and Storybooks.

The project was initialized using [Create React App](https://github.com/facebook/create-react-app) for Typescript

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
testing toolbox, but with plugins and/or external services, it allows you to do visual regression
testing of your components in a compartementalized manner.

#### Storybook + Storyshots 

This project is setup with Storybooks and Storyshots to do visual regression testing. Storyshots is
configured with the Puppeteer plugin to take screenshots of your Storybook stories, and will compare
every one of your stories for visual regression. You must commit and push the screenshots generated,
in the same way one might do with snapshots from Jest.

When a difference is located, a comparaison image will be generated, and you can update the snapshot once
the difference is approved and/or fixed.

#### Other visual testing solutions

* [Loki](https://loki.js.org/)
* [Chromatic](https://www.chromaticqa.com/) 
* [Happo](https://happo.io/) 
* [Percy](https://percy.io/) 
* [Screener](https://screener.io/) 

