const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    name:{
        type:String
    },


}, {timestamps:true});

const Form = mongoose.model("Form", FormSchema);

module.exports = Form;