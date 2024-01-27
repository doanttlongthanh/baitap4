const Vidu1 = require("../models/Vidu1");
const { thuvien1mongooseToObject } = require("../../util/mongoose");

class MeController {
    // [GET]/me/store/baidang
    storebaidang(req, res, next) {
        Vidu1.find({})
            .then((vidu1) =>
                res.render("storebaidang", {
                    vidu1: thuvien1mongooseToObject(vidu1),
                })
            )
            .catch(next);
    }
}

module.exports = new MeController();
