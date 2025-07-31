# Product Inventory API

A complete Product Inventory Management System built with Node.js and Express.js.  
This project provides a REST API for product management along with a simple frontend UI for interacting with the API.
You can view the deployed project here:  
[Live Demo](https://product-api-one-wheat.vercel.app)

---

## Features

### Backend API
- Create, Read, Update, and Delete (CRUD) operations on products
- Input validation for product fields
- Search products by keyword
- Pagination support for listing products
- Built with Node.js and Express.js

### Frontend UI
- Add new products
- View and search products
- Edit and delete products
- Sort products by ID, name, or price
- Pagination controls for navigation
- Dark, clean, responsive interface

---
```
## Project Structure



product-api/
│── controllers/
│ └── product.controller.js 
│── routes/
│ └── product.routes.js 
│── models/
│ └── product.model.js 
│── utils/
│ └── pagination.js 
│── public/
│ └── index.html 
│── app.js 
│── package.json 
│── .gitignore 
│── README.md 


'''
---
```
## Technology Stack
- Node.js
- Express.js
- Vanilla JavaScript (for frontend)
- HTML5 and CSS3
- Nodemon (for development)
- In-memory array storage (no database)

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/sanjanaapandey/product-api.git
   cd product-api

2. Install dependencies:
   npm install
   
3.Run the server:
# Development mode with auto-restart
npm run dev

# Normal mode
npm start

4.Open in browser:
http://localhost:3000

| Method | Endpoint               | Description            |
| ------ | ---------------------- | ---------------------- |
| GET    | `/products`            | Get all products       |
| GET    | `/products/:id`        | Get a product by ID    |
| POST   | `/products`            | Add a new product      |
| PUT    | `/products/:id`        | Update an existing one |
| DELETE | `/products/:id`        | Delete a product       |
| GET    | `/products/search?q=`  | Search products        |
| GET    | `/products?page&limit` | Paginate results       |


## Usage with cURL

### Creating a Product
```bash
curl -X POST http://localhost:3000/products \
-H "Content-Type: application/json" \
-d '{"name":"Laptop","price":1200,"description":"High performance laptop"}'
```
### Fetching Products
```curl http://localhost:3000/products```
### Updating a Product
```curl -X PUT http://localhost:3000/products/1 \
-H "Content-Type: application/json" \
-d '{"name":"Updated Laptop","price":1300}'
```
### Deleting a Product
```bash
curl -X DELETE http://localhost:3000/products/1
```
Author

Sanjana Pandey
Product API Developer 


