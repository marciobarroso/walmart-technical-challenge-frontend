# WALMART TECHNICAL CHALLENGE FRONTEND

## Create Hello World with React and Typescript :white_check_mark:

```
npx create-react-app walmart-technical-challenge-frontend --template typescript
```

## Create the base layout with flex box for components and css grid for layout :white_check_mark:

Using [CSS Grid](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout) to create the page layouts and [FlexBox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Conceptos_Basicos_de_Flexbox) to code the components

## Create form field for the search :white_check_mark:

Create a basic input form and a styled button to submit the search with the key enter or with the mouse click

## Create a dummy component to show the list of products :white_check_mark:

Create Flexbox to prototype the component ProductList and Product using a hardcoded list of products

## Consume the service from the api :white_check_mark:

Using [Axios](https://github.com/axios/axios) to do asynchronous call to remote server

## Create Dockerfile to execute locally :white_check_mark:

Using [Docker]() to create a app container to easily execute the app

# TO EXECUTE

## Locally

```
npm start
```

Make sure to have node >= 14 installed

## Using Docker

Build Application

```
make docker-build
```

Run Application

```
make docker-run
```

The application will be available on [http://localhost:8080](http://localhost:8080)

## PENDING

- [ ] Improving provisioning of environment variables without webpack
- [ ] Create page footer
- [ ] Create paging component or infinite scrolling with lazy loading
- [ ] Create Shopping Cart
- [ ] Allow product to be picked
- [ ] Create page to display single product
- [ ] Create a loading component
- [ ] Create unit, integration y functional tests
