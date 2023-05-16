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
    .catch((err) => {
        res.status(400).json(err)
    })
}

module.exports.getFormById = (req, res) =>{
    const {params} = req;
    Form.findOne({_id: params._id})
    .then((form) => res.json(form))
    .catch(err => console.log(err))
}

module.exports.updateForm = (req, res) => {
    Form.findByIdAndUpdate({_id: req.params._id}, req.body, {
        new:true,
        runValidators:true,
    } )
    .then(updatedForm => res.json(updatedForm))
    .catch((err) => {
        res.status(400).json(err)
    })
}

module.exports.deleteForm = (req, res) => {
    Form.deleteOne({_id: req.params._id})
    .then((deletedForm) => res.json(deletedForm))
    .catch(err => console.log(err))
}