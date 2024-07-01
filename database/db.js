const mongoose=require("mongoose");
const url=process.env.DATABASE_URL

const connect=mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});

connect.then((db)=>{
    console.log('mongoose is connected correctly to the server');
},(err)=>{
    console.log('we get the error from mongoose connection',err);
})