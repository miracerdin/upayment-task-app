UPayments React.js Case Study

While developing this application you don’t have to follow the exact same design but we are expecting something similar to this.
Also developing this application with TypeScript, using TailwindCSS, and writing Test cases will be a plus.
You are free to use any third-party libraries you would like.
Expected functionalities are as follows:
Get the products and categories from the API and list them on the Home Page
When a product is clicked navigate to the Detail Page with that product’s information
Delete a product from the list
With the help of a button, go to Create Screen and create a product from there
Product object must contain these fields while sending a post request:
Name (string)
Price (number)
Category (string)
Description (string)
Avatar (string)
DeveloperEmail (string)
When a product is created navigate back to the Home Page and show updated data
Filter the listed items according to their Categories
There are 2 main tables (data sources) for this application which are the Categories and Products tables. There is no relation between these 2 tables. You should find a way to The APIs’ for this application as follows:
Products
GET https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/
GET: https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/{id}
POST: https://62286b649fd6174ca82321f1.mockapi.io/case-study/products
DELETE: https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/{id}

Categories
GET: https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/
GET: https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/{id}

There are going to be 3 pages:

1.      Home Page:

2.      Product Detail Page:

3.      Create Page:
