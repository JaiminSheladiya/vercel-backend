const express = require('express')

const User = express()

User.get('/', (req, res) => {
    res.send('This is User')
})


module.exports = {
    User
}
