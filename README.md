# Project: UPayment Task

[Click to See](https://upayment-task-app.vercel.app/)
Simple upayment app created with React.js

## Table of contents

- [Project: UPayment Task](#project-upayment-task)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Illustrations](#illustrations)
  - [Project Skeleton](#project-skeleton)
  - [Objective](#objective)
    - [At the end of the project, i will be able to;](#at-the-end-of-the-project-i-will-be-able-to)
  - [Steps to Solution](#steps-to-solution)
  - [Notes](#notes)
  - [Contact](#contact)
- [UPayments](#upayments)
          - [Setup and run with nodeJS(v16.16.0):](#setup-and-run-with-nodejsv16160)
          - [for test:](#for-test)

## General info

Expected functionalities are as follows:

<p>Get the products and categories from the API and list them on the Home Page
When a product is clicked navigate to the Detail Page with that product’s information
Delete a product from the list
With the help of a button, go to Create Screen and create a product from there
Product object must contain these fields while sending a post request:</p>

<ol>
<li>Name: (string)</li> 
<li>Price: (number)</li> 
<li>Category: (string)</li> 
<li>Description: (string)</li> 
<li>Avatar: (string)</li>

<li>DeveloperEmail: (string)</li> 
</ol>

<p> When a product is created navigate back to the Home Page and show updated data
Filter the listed items according to their Categories
There are 2 main tables (data sources) for this application which are the Categories and Products tables. There is no relation between these 2 tables. You should find a way to The APIs’ for this application as follows:</p>
1-Products
GET https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/
GET: https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/{id}
POST: https://62286b649fd6174ca82321f1.mockapi.io/case-study/products
DELETE: https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/{id}

2-Categories
GET: https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/
GET: https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/{id}

There are going to be 3 pages:

1.           Home Page:

2.           Product Detail Page:

3.           Create Page:

## Technologies

- HTML 5
- CSS 3
- Tailwind
- Javascript
- React
- React router v6, useState, useEffect,

## Setup

To run this project, install it locally using npm:

```
$ git clone https://github.com/miracerdin/upayment-task-app.git
$ npm install
$ npm start
```

## Illustrations

![recipe app](https://user-images.githubusercontent.com/99042499/178953779-ac5ec12a-037f-4130-82bf-a74c31111ee8.gif)

## Project Skeleton

```
 Recipe App
|
|----readme.md         # Given to the students (Definition of the project)
SOLUTION
├── public
│     └── index.html
├── src
|    ├── assets
│    ├── components
│    │       ├── header
│    │       │     ├── Form.js
│    │       │     └── style.js
│    │       ├── navbar
│    │       |    ├── Navbar.js
│    │       |      └── style.js
│    │       ├── Recipe.jsx
│    │       ├── RecipeList.jsx
│    ├── pages
│    │       ├── about
│    │       │     ├── About.js
│    │       │     └── style.js
│    │       ├── details
│    │       │     ├── Details.js
│    │       │     └── style.js
│    │       ├── login
│    │       │     ├── Login.js
│    │       │     └── style.js
│    │       ├── home
│    │       |      ├── Home.js
│    │       |      ├── RecipeCard.js
│    │       |      └── style.js
│    │       ├── notfound
│    │       │     ├── NotFound.jsx
│    │       │     └── style.js
│    ├── router
│    │       └── PrivateRouter.jsx
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
└── yarn.lock
```

## Objective

Build a Recipe App using ReactJS.

### At the end of the project, i will be able to;

- improve coding skills within HTML & CSS & JS & ReactJS.

- use git commands (push, pull, commit, add etc.) and Github as Version Control System.

## Steps to Solution

- Step 1: Create React App using `npx create-react-app recipe-app`

- Step 2: Signup `https://developer.edamam.com/edamam-docs-recipe-api` and get api key.

- Step 3 : Using api key and `fetch` for getting data from `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`.

- Step 4: i used css framework Bootstrap.

- Step 5: Added project gif to my project and README.md file.

## Notes

- You can add make it yourself just work hard.

## Contact

<p>
  <a href="https://www.linkedin.com/in/mirac-erdin/" rel="nofollow noreferrer">
    <img src="https://i.stack.imgur.com/gVE0j.png" alt="linkedin"> LinkedIn
  </a> &nbsp; 
  <a href="https://github.com/miracerdin" rel="nofollow noreferrer">
    <img src="https://i.stack.imgur.com/tskMh.png" alt="github"> Github
  </a>
</p>
Phone Number:(+90 531 383 9138)
**<p align="center">&#9786; Happy Coding &#9997;</p>**

# UPayments

<h3> UPayments Task </h3>
<h5>React, Tailwind</h5>
<br/>

###### Setup and run with nodeJS(v16.16.0):

`npm i && npm start` -  `http://localhost:3000/`
<br/>

###### for test:

`npm test`
<br/>
<br/>

<h6>Repo                : https://github.com/miracerdin/upayment-task-app</h6>
<h6>Demo                : https://upayment-task-app.vercel.app/</h6>
<hr/>
<h6>Linkedin            : https://www.linkedin.com/in/mirac-erdin/</h6>
<h6>Gmail               : miracerdin@gmail.com </h6>
<h6>GitHub              : https://github.com/miracerdin</h6>
<hr/>
<!-- <img src="./src/assets/screenShots.png" alt="screenShots.png"/> -->
