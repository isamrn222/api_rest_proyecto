const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    telefono: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    identificacion: {
        type: Number,
        required: true

    }
});

module.exports = mongoose.model('aprendices', userSchema);

