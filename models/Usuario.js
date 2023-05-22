const mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario', {
    nome: String,
    email: String,
    celular: String,
    hamburguerPreferido: String
});

module.exports = Usuario;