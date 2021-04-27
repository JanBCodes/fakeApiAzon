
const userModel =
{

        fakeDB : [
            {
                id:7,
                firstName:"Jon",
                lastName:"Snow",
                email : "jon@snow.com",
            },
            {
                id:8,
                firstName:"Bruce",
                lastName:"Wayne",
                email : "bruce@wayne.com",
            },
            {
                id:9,
                firstName:"Thanos",
                lastName:"Badman",
                email : "thano@endgame.com",
            }, 
            {
                id:10,
                firstName:"Prue",
                lastName:"Pope",
                email : "pru@cd.com",
            },
            {
                id:11,
                firstName:"Dianna",
                lastName:"Prince",
                email : "w@woman.com",
            },
            {
                id:12,
                firstName:"Prue",
                lastName:"Pope",
                email : "p@charmed.com",
            },
            {
                id:13,
                firstName:"Dianna",
                lastName:"Prince",
                email : "wonder@woman.com",
            }
            
        ]
        ,

        getAllUsers()
        {
            return this.fakeDB;
        },


        getAUser(id)
        {
            return this.fakeDB.find(user => user.id === id)

        },

        createAUser(reqBody)
        {
            const checkEmail = this.fakeDB.find(user => user.email === reqBody.email)

            console.log (checkEmail)

            if(checkEmail === undefined) 
            {
                this.fakeDB.push(reqBody);
            }
            else
            {
                return true // duplicate email found re: Throw error
            }

        },

        updateUserDetails(reqBody, Id)
        {

            const checkEmail = this.fakeDB.find(user => user.email === reqBody.email)

            const index = this.fakeDB.findIndex(arrObj => arrObj.id === Id);  


            console.log (checkEmail)

            if(checkEmail === undefined ) 
            {
                this.fakeDB.splice(index, 1, reqBody)
                
                return false //no duplicate email found
            }
            else
            {
                return true // duplicate email found re: Throw error
            }
        
        },

        deleteUser(reqBodyId)
        {
            const index = this.fakeDB.findIndex(arrObj => arrObj.id === reqBodyId);  
            
            this.fakeDB.splice(index, 1)

        }
}


module.exports = userModel;

