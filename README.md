# Tesla Application Clean Architecture POC

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running Locally

In the project directory, you run the following:

### `yarn install`
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Project structure

### Core
Where our entities and business rules live. These are clean and serve a single purpose


### Features

These act as encapuslated functionality. Reusable application specific components live here.

Features must have a hook at the root level that connects to the necessary use cases and entities and exposes them to the view layer components within the feature. 

### Pages
Simple canvas to hang our features on and maps to specific routes

### Shared
Stores reusable utility, helpers, components, etc that can be used anywhere in our app.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

