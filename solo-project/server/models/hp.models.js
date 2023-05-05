const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phoneNumber:{
        type: Number
    }


}, { timestamps: true });

const Form = mongoose.model("Form", FormSchema);

module.exports = Form;