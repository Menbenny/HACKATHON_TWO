const {db} = require('../config/dataBasePostGres.js')

const createAccount = (name, email, password) => {
    return db('account').insert({name, email, password}, ["user_id", "name", "email", "password"])
}

const createProfile = () 