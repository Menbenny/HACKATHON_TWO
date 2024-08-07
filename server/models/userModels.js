const {db} = require('../config/dataBasePostGres.js')

// Model writes to DataBase

const createAccount = async (userData) => {
  const {user_id, name, email, password, profiles, user_diets, goals} = userData
    // return db('account').insert({name, email, password}, ["user_id", "name", "email", "password"])

    let trx
    try {
      trx = await db.transaction()

      const [user] = await trx('account').insert({
        user_id,
        name, 
        email,
        password,
        profiles,
        user_diets,
        goals
      },
      ['id']
    )
    } catch (error) {
      if (trx) {
        await trx.rollback()
      }
      console.error('Error registering user:', error)
      throw new Error('Internal Server Error')
    }
}

const createProfile = (userProfile) => {
  const {age, weight, height} = userProfile
    return db('profile').insert({age, weight, height}, ["age", "weight", ])
}

const createDietType = (dietType) => {
  const {vegetarian, vegan} = dietType
    return db('diet').insert({vegetarian, vegan}, ["vegetarian", "vegan"])
}

const createMeals = (meals) => {
  const {breakfast, lunch, dinner} = meals
    return db('meals').insert({breakfast, lunch, dinner}, ["breakfast", "lunch", "dinner"])
}

module.exports = {
    createAccount,
    createProfile,
    createDietType,
    createMeals
}