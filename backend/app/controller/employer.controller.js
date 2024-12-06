var globalFunctions = require('../config/global.functions.js');
var db = require('../config/db.config.js');
var Employer  = db.employer;

exports.findAll = (req, res) => {
    Employer.findAll()
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

exports.create = (req, res) => {
    Employer.create({
            user_id: req.body.user_id,
            company_name: req.body.company_name,
            industry: req.body.industry,
            location: req.body.location,
            website: req.body.website,
            description: req.body.description
    }).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

exports.update = (req, res) => {
    Employer.update({
            user_id: req.body.user_id,
            company_name: req.body.company_name,
            industry: req.body.industry,
            location: req.body.location,
            website: req.body.website,
            description: req.body.description
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
    Employer.destroy({
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
    Employer.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        }).catch(err => {
            globalFunctions.sendError(res, err);
        })
};

// var employer = {
//     user_id: req.body.user_id,
//     company_name: req.body.company_name,
//     industry: req.body.industry,
//     location: req.body.location,
//     website: req.body.website,
//     description: req.body.description
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