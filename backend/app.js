var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var db = require('./app/config/db.config.js'); // подключение настроек базы данных

db.sequelize.sync({force: true});

app.listen(3000);

var application = require('./app/route/application.route.js');
application(app);

var employer_review = require('./app/route/employer_review.route.js');
employer_review(app);

var employer = require('./app/route/employer.route.js');
employer(app);

var user = require('./app/route/user.route.js');
user(app);