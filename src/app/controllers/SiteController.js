const Vidu1 = require('../models/Vidu1');
const { thuvien1mongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET]/Home
    index(req, res) {
        Vidu1.find()
            .then((vidu1, err) => {
                // vidu1 = vidu1.map((vidu11) => vidu11.toObject());
                res.render('home', {
                    vidu1: thuvien1mongooseToObject(vidu1),
                });
            })
            .catch(() => {
                res.status(400).json({ error: 'ERROR!!!' });
            });
    }

    // [GET]/Tìm kiếm
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
