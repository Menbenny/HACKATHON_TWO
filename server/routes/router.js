const express = require('express')
const router = express.Router()

// const {fetchRecipes} = require('../controllers/recipes.js')


// router.get("/", fetchRecipes)
// router.post("/signin", postData)
// router.post("/", postUserStats)


// ? How to identify Controllers function - (req, res)
router.post("/", (req, res)=>{
    console.log(req.body);
    
    //! call models
    res.json({name:"random"})
})

module.exports = router