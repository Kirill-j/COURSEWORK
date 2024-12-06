module.exports = (app) => {
    const employer_review = require('../controller/employer_review.controller');

    app.get('/api/employer_reviews', employer_review.findAll);

    // Employer review
    app.post('/api/addEmployerReview', employer_review.create);

    app.post('/api/updateEmployerReview/:id', employer_review.update);

    app.post('/api/deleteEmployerReview/:id', employer_review.delete);

    app.get('/api/employerReview/:id', employer_review.findById);
};