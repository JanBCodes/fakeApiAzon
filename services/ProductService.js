const ProductModel = require("../model/ProductModel.js");

exports.getAllproducts = (req,res)=>{

    res.json({
        message : "A list of all the users in the database",
        data : ProductModel.getAllProducts(),
        total: ProductModel.getAllProducts().length 
    })
}

exports.getASpecificProduct = (req,res)=>{

    const id = parseInt(req.params.id);
    console.log(id)

    const productFound = ProductModel.getAProductID(id)

    console.log(productFound)
    if(productFound != undefined)
    {
        res.json({
            message : `Details of product with the id ${productFound.id}}`,
            data:productFound
        })
    }
    else
    {
        res.status(404).json({
            message : `Product with id ${id} was not found`
        })
    }

}

exports.createAProduct = (req,res)=>{

    ProductModel.createANewProduct(req.body);

    res.json({
        message: `A new product was successfully created`,
        data : req.body
    })

}

exports.updateAProduct = (req,res)=>{

    const id = parseInt(req.params.id);

    ProductModel.updateAProduct(req.body, id);

    res.json({
        message: `The product update was successfully created`,
        data : req.body
    })

}

exports.deleteAProduct = (req,res)=>{

    const id = parseInt(req.params.id);

    ProductModel.deleteAProduct(id);

    res.json({
        message: `A product was successfully deleted from DB`,
        data : req.body
    })

}