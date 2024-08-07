const express = require('express')
// const fetch = require('node-fetch')

const fetchRecipes = async(req, res) => {
    //#
    const { dietType, mealOptions } = req.body; 
    const randomNumber = Math.floor(Math.random() * 100) + 1; 


    const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian&number=1';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a3582a4bc7mshe80b474803c925dp1958a8jsn1d558d3ae1f8',
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    };

    // const recipes = req.body
    // console.log(recipes)
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // const recipes = JSON.parse(result)
        res.json(result)
        
       


        // console.log(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch recipes. Please try again later.' });
    }


   
}

module.exports = {
    fetchRecipes
}


