const express = require('express')
// create file
const {readFileFunc, writeFileFunc} = require('../models/usersModel.js')
// create file
const  users = require('../users.json')

const getAllUsers = (req, res) => {

    res.json(users)
}

const getUser = (req, res) => {
    const { id } = req.params
    const User = users.find((item)=> item.id == id)

    if(!User) return res.status(404).json({msg: 'User not found'})
        res.json(User)
}

// const createUser = (req, res) => {

//     const myUser = {
//         ...req.body,
//         id: users.length + 1,
//         name: req.body.name,
//         age: req.body.age,
//         weight: req.body.weight,
//         height: req.body.height
//     }

//     users.push(myUser)
//     writeFileFunc(users)
//     res.sendStatus(201)
// }

const updateUser = (req, res) => {
    const { id } = req.params
    const index = users.findIndex((item)=> item.id == id);

    const myUser = {
        ...req.body,
        id: users[index],
        name: req.body.name,
        age: req.body.age,
        weight: req.body.weight,
        height: req.body.height
    }

    users.push(myUser)
    writeFileFunc(users)
    res.json(users)
}

const deleteUser = (req, res) => {
    const { id } = req.params
    const index = users.findIndex((item)=> item.id == id);

    if(index === -1){
        res.status(404).send(`User not found`)
    }

   users.splice(index, 1)
    writeFileFunc(users)
    res.json(users)
}



module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}