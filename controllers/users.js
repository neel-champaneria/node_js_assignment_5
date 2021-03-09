const User = require("../models/user");

exports.getCreateUser = (req, res, next) => {
    res.render('create-user', {
        pageTitle: "Create",
        path: "/create"
    });
}

exports.postCreateUser = (req, res, next) => {
    const username = req.body.userName;
    User.create({
        username : username
    })
    .then(result => {
        res.render('add', {
            pageTitle: "Add",
            path: "/add"
        });
    })
    .catch(err => {
        console.log(err);
    });
}

exports.getListOfUsers = (req, res, next) => {
    User.findAll()
        .then(users => {
            res.render('user', {
                usrs: users,
                pageTitle: "User's List",
                path: "/users"
            });
        })
        .catch(err => {
            console.log(err);
        });
}
