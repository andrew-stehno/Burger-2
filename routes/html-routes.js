let db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {

        db.Burger.findAll({})
        .then(function(dbBurger) {
            let hbsObject = {
                burgers: dbBurger
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
});
};
