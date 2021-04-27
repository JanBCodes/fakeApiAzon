const express = require("express");

const productController  = require("./controllers/ProductController.js");
const userController  = require("./controllers/UserController.js");
const authController  = require("./controllers/AuthController.js");

const app = express();

//TELLS EXPRESS HOW TO PARSE() INCOMMING JSON DATA!!~!!
app.use(express.json());


//GET localhost:3000/users/
app.use("/users",userController);
app.use("/auth",authController);
app.use("/products",productController);


//RETURN 404  (Not Found )
const PORT = 3000;
app.listen(PORT,() => {
    console.log(`Web Server is up and running on PORT ${PORT}`);
})

/* 

TASK #2(Work as a group) - This is for Tuesday

I want you to implement the below features to your Back-End RESTful API :

Done - Create an endpoint that will update a specific user information
Done - Create an endpoint that will update a specific product 
Done - Create an endpoint that will delete a specific user
Done - Create an endpoint that will delete a specific product
 

Lastly, ensure that each endpoint does the necessary validation. See details below : 
Done - Regarding products, for POST and PUT requests, ensure that products ALWAYS have a title, a unit price a quantity on hand
Done - Regarding users, for POST and PUT requests, ensure that users ALWAYS have a first name, lastname and an email address
Done - Ensure that every email address is unique before creating and updating a user.

 */