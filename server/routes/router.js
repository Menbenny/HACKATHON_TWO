const express = require('express')
const router = express.Router()

// const {fetchRecipes} = require('../controllers/recipesControllers.js')


// router.get("/", fetchRecipes)
// router.post("/signin", postData)
// router.post("/", postUserStats)


// ? How to identify Controllers function - (req, res)

// posting account 
router.post("/", (req, res)=>{
    const { name, email, password} = req.body
    
    // ! backend data LOGGING
    console.log(`Backend logging user data: ${JSON.stringify(name)}`);

    // ! ADD DATABASE LOGIC - for storing user info
    // -- Here -- 

    //! call models
    res.json({name, email})
})

// posting profile
router.post("/profile", (req, res)=>{
    const { age, weight, height} = req.body
    
    // ! backend data LOGGING

    console.log(`Backend logging user data: ${JSON.stringify(age)}`);

    // ! ADD DATABASE LOGIC - for storing user info
    // -- Here -- 

    //! call models

    res.json({age, weight, height})
})

module.exports = router