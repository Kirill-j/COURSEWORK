var globalFunctions = require('../config/global.functions.js');
var db = require('../config/db.config.js');
var Application  = db.application;

exports.findAll = (req, res) => {
    Application.findAll()
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

exports.create = (req, res) => {
    Application.create({
        job_id: req.body.job_id,
        job_seeker_id: req.body.job_seeker_id,
        cover_letter: req.body.cover_letter,
        applied_at: req.body.applied_at
    }).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

exports.update = (req, res) => {
    Application.update({
            job_id: req.body.job_id,
            job_seeker_id: req.body.job_seeker_id,
            cover_letter: req.body.cover_letter,
            applied_at: req.body.applied_at
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
    Application.destroy({
            where: {
                id: req.params.id
            }
        }
    ).then(object => {
        globalFunctions.sendResult(res, 'Запись удалена');
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

exports.findById = (req, res) => {
    Application.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        }).catch(err => {
            globalFunctions.sendError(res, err);
        })
};

var application = {
    job_id: '1',
    job_seeker_id: '1',
    cover_letter: "aaa",
};

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

fetch('http://localhost:3000/api/deleteApplication/3', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(application)
}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})