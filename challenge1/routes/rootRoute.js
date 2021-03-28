const express = require('express')

const app = express.Router()

app.get('/', (req, res) => {
    res.status(200).send("Welcome to Ivan ZettaByte Code Challenge API")
})

module.exports = app
