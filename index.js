const express=require('express');
require("dotenv").config();
const connect =require('./database/db');
const errorMiddleware = require("./middlewares/errorMiddleware");
const loginRouter=require('./Router/loginRoutes');

const cors=require('cors');

const port=process.env.PORT;
const app=express();
app.use(express.json());
app.use(cors());

app.use('/user',loginRouter);

app.use(errorMiddleware);

connect;
app.listen(port,()=>{
    console.log(`serevr is running at http://localhost:${port}`)
})