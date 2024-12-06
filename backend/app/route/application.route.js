module.exports = (app) => {
    const application = require('../controller/application.controller');

    app.get('/api/applications', application.findAll);

    // Application
    app.post('/api/addApplication', application.create);

    app.post('/api/updateApplication/:id', application.update);

    app.post('/api/deleteApplication/:id', application.delete);

    app.get('/api/application/:id', application.findById);
};