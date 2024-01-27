const Vidu1 = require("../models/Vidu1");
const { thuvien2mongooseToObject } = require("../../util/mongoose");

class xaController {
    // [GET]/cac-xa:slug
    show(req, res, next) {
        Vidu1.findOne({ slug: req.params.slug })
            .then((Vidu1) => {
                res.render("LT", { Vidu1: thuvien2mongooseToObject(Vidu1) });
            })
            .catch(next);
    }

    // [GET]/cac-xa/create
    create(req, res, next) {
        res.render("create");
    }

    // [POST]/cac-xa/store
    store(req, res, next) {
        const vidu1 = new Vidu1(req.body);
        vidu1
            .save()
            .then(() => res.redirect("/"))
            .catch((error) => {});
    }

    // [GET]/cac-xa/Edit
    edit(req, res, next) {
        Vidu1.findById(req.params.id)
            .then((vidu1) =>
                res.render("edit", {
                    vidu1: thuvien2mongooseToObject(vidu1),
                })
            )
            .catch(next);
    }

    // [PUT]/cac-xa/:id
    update(req, res, next) {
        Vidu1.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect("/me/store/baidang"))
            .catch(next);
    }

    // [DELETE]/cac-xa/:id
    delete(req, res, next) {
        Vidu1.deleteOne({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next);
    }
}

module.exports = new xaController();
