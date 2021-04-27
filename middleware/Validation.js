

exports.validateUser = (req,res,next) =>{

    // console.log(req.body)

    const errors = []

    if(req.body.firstName == "")
    {
        errors.push ("You have to enter a First Name")
    }

    if(req.body.lastName == "")
    {
        errors.push ("You have to enter a Last Name")       
    }

    if(req.body.email == "")
    {
        errors.push ("You have to enter an email address")       
    }

    if(errors.length == 0)
    {
        next()
    }
    else
    {
        // 400 - Bad Request
        res.status(400).json({
            message: "Error:: You have entered incomplete information",
            errors
        })

    }
}

exports.validateProduct = (req,res,next) =>{

    const errors = []

    if(req.body.title == "")
    {
        errors.push ("You have to enter a Product Title")
    }

    if(req.body.quantityOnHand == "")
    {
        errors.push ("You have to enter the Quantity on Hand ")       
    }

    if(req.body.unitPrice == "")
    {
        errors.push ("You have to enter an unit price")       
    }

    if(errors.length == 0)
    {
        next()
    }
    else
    {
        // 400 - Bad Request
        res.status(400).json({
            message: "Error:: You have entered incomplete information",
            errors
        })

    }
}