const mongoose= require('mongoose'); //require mongoose

const Schema= mongoose.Schema; //constructor to form schema

const FormSchema= new Schema({ //create instance of schema
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    number:{
        type: String,
        required:true
    },
    textarea:{
        type: String,
        required:true
    }
} , {timestamps : true});

//creating models
const Form= mongoose.model('Form',FormSchema);
module.exports=Form; //to let other files use this Blogs;

