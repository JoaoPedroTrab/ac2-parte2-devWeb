const express = require('express');
const mongoose = require('mongoose');

const usuarioController = require('./controllers/usuarioController')
const hamburguerController = require('./controllers/hamburguerController')


const app = express();
app.use(express.json());

app.use('/usuarios', usuarioController);
app.use('/hamburguers', hamburguerController);


mongoose.connect('mongodb+srv://joaotrabachini:senha123@healthpets.pm8jjon.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        app.listen(3030, () => {
            console.log('Conectado ao mongoDB');
            console.log('Servidor iniciado na porta 3030');
        })
    })
    .catch((err) => {
        console.log(err);
    });
