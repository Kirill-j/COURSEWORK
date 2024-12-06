var globalFunctions = require('../config/global.functions.js');
var db = require('../config/db.config.js');
var User  = db.user;

exports.findAll = (req, res) => {
    User.findAll()
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

exports.create = (req, res) => {
    User.create({
            user_name: req.body.user_name,
            email: req.body.email,
            password: req.body.password,
            user_type: req.body.user_type
    }).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

exports.update = (req, res) => {
    User.update({
            user_name: req.body.user_name,
            email: req.body.email,
            password: req.body.password,
            user_type: req.body.user_type
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

exports.delete = (req, res) => {
    User.destroy({
            where: {
                id: req.params.id
            }
        }
    ).then(() => {
        globalFunctions.sendResult(res, 'Запись удалена');
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

exports.findById = (req, res) => {
    User.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        }).catch(err => {
            globalFunctions.sendError(res, err);
        })
};

// var user = {
//     user_name: req.body.user_name,
//     email: req.body.email,
//     password: req.body.password,
//     user_type: req.body.user_type
// };

// fetch('http://localhost:3000/api/addApplication', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify(application)
// }).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

// fetch('http://localhost:3000/api/updateApplication/1', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify(application)
// }).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })