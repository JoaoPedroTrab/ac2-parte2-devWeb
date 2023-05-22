const express = require('express');
const router = express.Router();

const Hamburguer = require('../models/Hamburguer');

router.post('/cadastrar', async (req, res) => {
    const { nome, preco, ingredientes, foto, curtidas } = req.body;

    const hamburguer = {
        nome, preco, ingredientes, foto, curtidas 
    }
    try {
        await Hamburguer.create(hamburguer);
        res.status(201).json(hamburguer);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});


router.get('/', async (req, res) => {
    try {
        const hamburguer = await Hamburguer.find();
        res.status(200).json(hamburguer);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const hamburguer = await Hamburguer.findOne({ _id: req.params.id });
        if (!hamburguer) {
            res.status(422).json({ mensagem: "Hamburguer não encontrado" });
            return
        }
        res.status(200).json(hamburguer);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { nome, preco, ingredientes, foto, curtidas } = req.body;

        const hamb = {
            nome, preco, ingredientes, foto, curtidas
        }

        const updateHamb = await Hamburguer.updateOne({ _id: id }, hamb);

        if (updateHamb.matchedCount === 0) {
            res.status(422).json({ mensagem: "Hamburguer não encontrado" });
            return
        }
        res.status(200).json(hamb);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const hamburguer = await Hamburguer.findOne({ _id: id });
        if (!hamburguer) {
            res.status(422).json({ mensagem: "hamburguer não encontrado" });
            return;
        }
        await Hamburguer.deleteOne({ _id: id });
        res.status(200).json({ mensagem: "Excluído com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

module.exports = router;