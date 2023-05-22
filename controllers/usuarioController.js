const express = require('express');


const router = express.Router();

const Usuario = require('../models/Usuario');

router.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    const usuario = await Usuario.find({ email: email });


    if (!usuario)
        res.status(402).send('Usuário não encontrado');


    res.status(401).send('Senha incorreta!');
});

router.post('/cadastrar', async (req, res) => {
    const { nome, email, celular, hamburguerPreferido } = req.body;

    const usuario = {
        nome, email, celular, hamburguerPreferido
    }
    try {
        await Usuario.create(usuario);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const usuario = await Usuario.findOne({ _id: req.params.id });
        if (!usuario) {
            res.status(422).json({ mensagem: "Usuario não encontrado" });
            return
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { nome, email, celular, hamburguerPreferido } = req.body;

        const usu = {
            nome, email, celular, hamburguerPreferido
        }

        const updateUsu = await Usuario.updateOne({ _id: id }, usu);

        if (updateUsu.matchedCount === 0) {
            res.status(422).json({ mensagem: "Usuario não encontrado" });
            return
        }
        res.status(200).json(usu);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const usuario = await Usuario.findOne({ _id: id });
        if (!usuario) {
            res.status(422).json({ mensagem: "Usuario não encontrado" });
            return;
        }
        await Usuario.deleteOne({ _id: id });
        res.status(200).json({ mensagem: "Excluído com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

module.exports = router;