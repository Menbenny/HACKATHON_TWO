const express = require('express')
const fs = require('fs')

const fetchRecipes = async(req, res) => {

    // ! Possibly vegan & vegetarian recipes
    // ! Retrieve the locally stored variable 
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
        res.status(500)
    }


    // ! second testing API
    // const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'x-rapidapi-key': 'a3582a4bc7mshe80b474803c925dp1958a8jsn1d558d3ae1f8',
    //         'x-rapidapi-host': 'tasty.p.rapidapi.com'
    //     }
    // };

    // try {
    //     const response = await fetch(url, options);
    //     const result = await response.text();
    //     res.json(result)
    //     // console.log(result);
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({msg: `Data not found`})
    // }
}

module.exports = {
    fetchRecipes
}