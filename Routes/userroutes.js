const express = require('express')
const {postmethod,get,getid,putmethod,deletemethod} = require('../controllers/usercontroller')
const app = express()
app.post('/users' , postmethod)
app.get('/users' , get)
app.get('/users/:id' , getid)
app.put('/users/:id' , putmethod)
app.delete('/users/:id' , deletemethod)

module.exports = app