module.exports = (app) => {
    const user = require('../controller/user.controller');

    app.get('/api/users', user.findAll);

    // Application
    app.post('/api/addUser', user.create);

    app.post('/api/updateUser/:id', user.update);

    app.post('/api/deleteUser/:id', user.delete);

    app.get('/api/user/:id', user.findById);
};