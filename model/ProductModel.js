const ProductModel =
{
    fakeProductDB : [
        {
            id: 1,
            title: "Product 1",
            description: "This is a description of Product 1",
            quantityOnHand: 100,
            unitPrice: 9.99
        },

        {
            id: 2,
            title: "Product 2",
            description: "This is a description of Product 2",
            quantityOnHand: 100,
            unitPrice: 9.99
        },   

        {
            id: 3,
            title: "Product 3",
            description: "This is a description of Product 3",
            quantityOnHand: 100,
            unitPrice: 9.99
        },            
        
        {
            id: 4,
            title: "Product 4",
            description: "This is a description of Product 4",
            quantityOnHand: 100,
            unitPrice: 9.99
        },            
        
        {
            id: 5,
            title: "Product 5",
            description: "This is a description of Product 5",
            quantityOnHand: 100,
            unitPrice: 9.99
        },

        {
            id: 6,
            title: "Product 6",
            description: "This is a description of Product 6",
            quantityOnHand: 100,
            unitPrice: 9.99
        }

    ],      

    getAllProducts()
    {
        return this.fakeProductDB;
    },


    getAProductID(id)
    {
        return this.fakeProductDB.find(product=>product.id === id)
    },

    createANewProduct(product)
    {
        this.fakeProductDB.push(product);
    },

    updateAProduct(reqBody, Id)
    {
        const index = this.fakeProductDB.findIndex(arrObj => arrObj.id === Id);  

        this.fakeProductDB.splice(index, 1, reqBody)
            
    },

    deleteAProduct(reqBodyId)
    {
        const index = this.fakeProductDB.findIndex(arrObj => arrObj.id === reqBodyId);  
            
        this.fakeProductDB.splice(index, 1)

    }

}

module.exports = ProductModel;

