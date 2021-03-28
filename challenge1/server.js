require('dotenv').config()
const express = require('express')
const cors = require('cors')
const readdirp = require('readdirp')
const path = require('path')


const app = express()
app.use(express.json())

//** CORS OPTION */
app.use(cors())

//** ROUTE LOADER */
readdirp('.', { fileFilter: '*Route.js' })
    .on('data', (route) => {
        const file = require(`./${route.path}`)
        app.use(file)
        console.log(`Route loader:\t${path.basename(route.path)}`);

    })

//** Express start */
const port = (process.env.ZETTABYTE_CHALLENGE_SERVER_PORT == undefined) ? 5858 : process.env.ZETTABYTE_CHALLENGE_SERVER_PORT;
const host = (process.env.ZETTABYTE_CHALLENGE_HOSTNAME == undefined || process.env.ZETTABYTE_CHALLENGE_HOSTNAME == 'http://localhost') ? `http://locallhost:${port}` : process.env.ZETTABYTE_CHALLENGE_HOSTNAME;
app.listen(port, () => {
    console.log(`The app was listening in: ${host}`);
})  