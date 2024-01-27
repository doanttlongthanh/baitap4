const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/baitap4');
        console.log('connect thành công');
    } catch (error) {
        console.log('Bị lỗi');
    }
}

module.exports = { connect };
