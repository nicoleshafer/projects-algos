const Form = require('../models/hp.models');

module.exports.getForm = (req, res) =>{
    Form.find()
    .then((allForm) => {
        res.json({allForm})
    })
    .catch((err) => {
        res.json({message: 'Something went wrong', error: err})
    })
}

module.exports.createForm = (req,res) => {
    Form.create(req.body)
    .then((newForms) =>
    res.json(newForms))
    .catch((err) => console.log(err))
}