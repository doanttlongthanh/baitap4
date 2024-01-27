const newsRouter = require("./news");
const meRouter = require("./me");

const xaRouter = require("./cac-xa");

const siteRouter = require("./site");

function router(app) {
    // TIN TỨC
    app.use("/news", newsRouter);

    // CÁC XÃ
    app.use("/cac-xa", xaRouter);

    // BÀI ĐĂNG
    app.use("/me", meRouter);

    // HOME
    app.use("/", siteRouter);
}

module.exports = router;
