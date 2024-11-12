const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 6500;

const {mongoConnect} = require('./Connection');
const userRouter = require('./routes/user')

mongoConnect(process.env.MONGODB_URI,{ useNewUrlParser:true, useUnifiedTopology:true})


app.use('/users', userRouter )

app.listen(PORT, ()=>{
    console.log("Server running on port "+PORT)
})