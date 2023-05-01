const FormController = require('../controllers/hp.controllers')

module.exports = app => {
    app.get('/api/form', FormController.getForm)
    app.post('/api/form', FormController.createForm)
    app.get('/api/form/:_id', FormController.getForm)
}