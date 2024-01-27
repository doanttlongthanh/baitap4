module.exports = {
    thuvien1mongooseToObject: function (mongooseMang1) {
        return mongooseMang1.map((mongooseMang1) => mongooseMang1.toObject());
    },
    thuvien2mongooseToObject: function (mongooseMang2) {
        return mongooseMang2 ? mongooseMang2.toObject() : mongooseMang2;
    },
};
