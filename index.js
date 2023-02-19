const express = require('express')
const { User} = require('./src/user')
const app = express()
require("dotenv").config()
app.use('/user',User)
app.get('/',(req, res) => {
    res.send('Hello')
})

app.listen(process.env.PORT, () => {
    console.log('Server is running in port 8080')
})