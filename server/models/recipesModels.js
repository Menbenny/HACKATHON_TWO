const express = require('express')
const recipes = require('../recipes.json')
const fs = require('fs')

const readFileFunc = () => {
    try {
        const jsonRecipes = fs.writeFile('recipes.json', 'utf-8');
        recipes = JSON.parse(jsonRecipes)
        return tasks;
    } catch (error) {
        
    }
}