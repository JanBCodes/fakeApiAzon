
const express = require('express');
const router = express.Router();


//Import Service Layer
const userService = require("../services/UserService.js");

//Import MIddleware 
const validateMiddleware = require("../middleware/Validation.js");

//ROUTES (END POINTS FOR OUR API)

//GET ALL USERS
router.get("/", userService.getAllUsers)

//GET A SPECIFIC USER
router.get("/:id", userService.getASpecificUser)

//CREATE A USER
router.post("/", validateMiddleware.validateUser, userService.createAUser)

//UPDATE A USER
router.put("/:id", validateMiddleware.validateUser, userService.updateAUser)

//DELETE A USER
router.delete("/:id", userService.deleteAUser)


module.exports = router;


