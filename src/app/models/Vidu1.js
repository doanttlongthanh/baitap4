const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;

const Vidu1 = new Schema(
    {
        name: { type: String, maxLength: 255 },
        descripton: { type: String, maxLength: 700 },
        img: { type: String, maxLength: 255 },
        videoID: { type: String, maxLength: 255 },
        slug: { type: String, slug: "name" },
    },
    {
        timestamps: true,
    }
);

// Add slugins
mongoose.plugin(slug);
Vidu1.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("Vidu1", Vidu1);
