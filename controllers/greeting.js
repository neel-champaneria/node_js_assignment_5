exports.getGreets = (req, res, next) => {
    res.render('home', {
        pageTitle: "Home", 
        path: "/"
    });
}