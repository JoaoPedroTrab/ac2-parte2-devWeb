const mongoose = require('mongoose');

const Hamburguer = mongoose.model('Hamburguer', {
    nome: String,
    preco: String,
    ingredientes: String,
    foto: String,
    curtidas: Number
});

module.exports = Hamburguer;