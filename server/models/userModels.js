const {db} = require('../config/dataBasePostGres.js')

const createAccount = (name, email, password) => {
    return db('account').insert({name, email, password}, ["user_id", "name", "email", "password"])
}

/**
 * age
 * weight
 * height
 */
const createProfile = () => {
    return db('profile').insert({age, weight, height}, ["age", "weight", ])
}



/**
 * vegetarian
 * vegan
 */
const createDietType = () => {
    return db('diet').insert({vegetarian, vegan}, ["vegetarian", "vegan"])
}


/**
 * breakfast
 * lunch
 * dinner
 */
const createMeals = () => {
    return db('meals').insert({breakfast, lunch, dinner}, ["breakfast", "lunch", "dinner"])
}

module.exports = {
    createAccount,
    createProfile,
    createDietType,
    createMeals
}