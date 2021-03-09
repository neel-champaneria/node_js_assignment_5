const path = require('path');

const express = require('express');
const nofevicon = require('express-no-favicons');
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/home');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const app = express()

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(nofevicon());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(usersRoutes.routes);

app.use(errorController.get404);

sequelize
    .sync()
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })
