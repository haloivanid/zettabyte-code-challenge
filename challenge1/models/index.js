const mongoose = require('mongoose')
const { host, username, password, database } = require('./config')

const option = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(`mongodb+srv://${username}:${password}@${host}/${database}?retryWrites=true&w=majority`, option)

const blogs = new mongoose.model('Blogs', new mongoose.Schema({
    blogName: String,
    blogDescription: String,
    blogDate: { type: Date, default: Date.now }
}))

const db = {
    blogs
}

module.exports = db
