/* 
Services Layer ===> List of Functions Your controller is gonna call.
This service layer allows us not to put business logic in our controllers.
Single Service Function module.exports = getAllUsers
Multiple Service Functions

*/

// The Service Layer is now speaking to the DB instead of the Controllers
const userModel = require("../model/UserModel.js");

exports.getAllUsers = (req,res)=>{

    res.json({
        message : "A list of all the users in the database",
        data : userModel.getAllUsers(),
        total: userModel.getAllUsers().length 
    })

};

exports.getASpecificUser = (req,res)=>{

    const id = parseInt(req.params.id);
    console.log(id)

    const userFound = userModel.getAUser(id)

    console.log(userFound)

    if(userFound != undefined)
    {
        res.json({
            message : `Details of product with the id ${userFound.id}}`,
            data:userFound
        })
    }
    else
    {
        res.status(404).json({
            message : `Product with id ${id} was not found`
        })
    }

};

exports.createAUser = (req,res)=>{

    const checkedEmail = userModel.createAUser(req.body);

    if(checkedEmail === true)
    {
        //Forbidden
        res.status(403).json({
            
            message: `Error:: The email address is already taken`,
        }) 
    }
    else
    {
        res.json({
            message: `The user was successfully created`,
            data : req.body
        })
    }
};


exports.updateAUser = (req,res)=>{

/*     
    - PUT /user
    - Validate on Back end
        - No blank fields  doeme
        - No duplicate email (req.body.email)

*/
    const id = parseInt(req.params.id);

    const checkedEmail = userModel.updateUserDetails(req.body, id);

    console.log (checkedEmail)

    if(checkedEmail === true)
    {
        //Forbidden
        res.status(403).json({
            
            message: `Error:: The email address is already taken`,
        }) 

    }
    else if(checkedEmail === false)
    {
        res.json({
            message: `The user was successfully updated`,
            data : req.body
        }) 

    }

};

exports.deleteAUser = (req,res)=>{

    const id = parseInt(req.params.id);

    userModel.deleteUser(id)

    res.json({
        message: `The user below was successfully deleted`,
        data : req.body
    }) 

};




