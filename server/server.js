const express = require('express')
const router = require('./routes/router.js')
const chalk = require('chalk')
// const cors = require('cors')

require('dotenv').config()

const app = express()
// const config = require(__dirname + '../recipes.json')

// ! define static - for public 
// app.use('/', express.static(__dirname + '/public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// ! port
const serverPort = process.env.PORT || 5000
app.listen(serverPort, ()=> {
    console.log(chalk.cyanBright(`Running on ${serverPort}`));
});

app.use('/', router)
