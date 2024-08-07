const express = require('express')
const router = express.Router()
const {_createAccount} = require('../controllers/userController.js')

const {fetchRecipes} = require('../controllers/recipesControllers.js')



/// CRUD functionality 

router.get("/api", fetchRecipes)
// router.post("/signin", postData)
// router.post("/", postUserStats)


// ? How to identify Controllers function - (req, res)

// posting account 
router.post("/signin", _createAccount)

// posting profile
router.post("/signin", (req, res)=>{
    const { age, weight, height} = req.body
    
    // ! backend data LOGGING

    console.log(`Backend logging user data: ${JSON.stringify(age)}`);

    // ! ADD DATABASE LOGIC - for storing user profile info
    // -- Here -- 

    //! call models

    res.json({age, weight, height})
});

router.put("/signin/:id", (req, res)=>{
    const { id } = req.params
    const index = users.findIndex((user) => user.id == id)


})
module.exports = router