const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:[true, 'Required'],
        minLength:[2, 'Must be 2 or more characters'],
    
    },
    lastName: {
        type: String,
        required:[true, 'Required'],
        minLength:[2, 'Must be 2 or more characters'],
        
    },
    email: {
        type: String,
        required:[true, 'Required'],
        minLength:[3, 'Must be 3 or more characters'],
    
    },
    review:{
        type: String,
        required:[true, 'Required'],
        minLength:[3, 'Must be 3 or more characters'],
    
    }


}, { timestamps: true });

const Form = mongoose.model("Form", FormSchema);

module.exports = Form;