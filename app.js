const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require("body-parser");
const Form=require('./model/form.js');
const { getMaxListeners } = require('./model/form.js');
require('dotenv').config();

const app=express();

app.set('view engine','ejs');
app.use(express.static('public')); 
app.use(express.urlencoded({extended:true}));




const uri = process.env.DBURI ;
mongoose.connect(uri,{ useNewUrlParser: true , useUnifiedTopology: true })
.then((result)=>{
    app.listen(process.env.PORT,()=>{
        console.log("server is running");
    })
})
.catch((err)=>console.log(err));

app.get('/',(req,res)=>{
    res.render('index');
});


app.post('/',(req,res)=>{
    let newForm= new Form({
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        textarea:req.body.textarea,
    })
    newForm.save();
    res.redirect('/');
})