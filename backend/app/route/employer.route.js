module.exports = (app) => {
    const employer = require('../controller/employer.controller');

    app.get('/api/employers', employer.findAll);

    // Application
    app.post('/api/addEmployer', employer.create);

    app.post('/api/updateEmployer/:id', employer.update);

    app.post('/api/deleteEmployer/:id', employer.delete);

    app.get('/api/employer/:id', employer.findById);
};