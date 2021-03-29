const express = require('express')
const blogController = require('../controllers/blogController')

const app = express.Router()

app.get('/get-all-blog', blogController.blogGetAll)

app.get('/blog/:id', blogController.blogGetOne)

app.post('/create-blog', blogController.blogCreate)

app.patch('/blog', blogController.blogUpdate)

app.delete('/blog/:id', blogController.blogDelete)

module.exports = app
