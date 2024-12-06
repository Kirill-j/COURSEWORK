var globalFunctions = require('../config/global.functions.js');
var db = require('../config/db.config.js');
var EmployerReview  = db.employer_review;

exports.findAll = (req, res) => {
    EmployerReview.findAll()
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

exports.create = (req, res) => {
    EmployerReview.create({
            employer_id: req.body.employer_id,
            job_seeker_id: req.body.job_seeker_id,
            rating: req.body.rating,
            createed_at: req.body.created_at
    }).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};

exports.update = (req, res) => {
    EmployerReview.update({
            employer_id: req.body.employer_id,
            job_seeker_id: req.body.job_seeker_id,
            rating: req.body.rating,
            createed_at: req.body.created_at
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
    EmployerReview.destroy({
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
    EmployerReview.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        }).catch(err => {
            globalFunctions.sendError(res, err);
        })
};

var employer_review = {
    employer_id: '1',
    job_seeker_id: '1',
    rating: '5',
};

// fetch('http://localhost:3000/api/addReviewEmployer, {
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

// fetch('http://localhost:3000/api/updateReviewEmployer/1', {
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