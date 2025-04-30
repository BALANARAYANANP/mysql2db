const express = require('express')
const userroutes = require ('./Routes/userroutes')
// import userroutes from './Routes/userroutes'

const app = express();
app.use(express.json())
const PORT = 3000;
app.use('/users',userroutes)


app.listen('3000', (req,res)=>{
    console.log("Server is Running On Port 300")
})