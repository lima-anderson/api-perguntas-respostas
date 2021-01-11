const express = require('express');
const Pergunta = require('./bancoDeDados/Pergunta')
const Resposta = require('./bancoDeDados/Resposta')

const rotas = express.Router();

rotas.post('/perguntar', (req, res) => {
    const { titulo, descricao } = req.body;

    Pergunta.create({
        titulo,
        descricao
    })

    console.log({
        titulo,
        descricao
    })
    return res.json({
        titulo,
        descricao
    })
})

rotas.get('/perguntas', (req, res) => {
    Pergunta.findAll({ 
        raw: true, 
        order: [['id', 'DESC']]})
        .then((perguntas) => res.json({ perguntas }))
})

rotas.get('/perguntas/:id', (req, res) => {
    const { id } = req.params;

    Pergunta.findOne({
        where: { id: id }
    }).then(pergunta => {
        if (pergunta) {
            res.json({ pergunta})
        } else {
            res.json({ erro: "Pergunta não encontrada!"})
        }
    })
})


rotas.post('/responder', (req, res) => {
    const { corpo, perguntaId } = req.body;

    Resposta.create({
        corpo,
        perguntaId
    })

    console.log(corpo, perguntaId)
    return res.json({ corpo, perguntaId })
})

rotas.get('/respostas', (req, res) => {
    const respostas = Resposta.findAll({ raw: true, order: [
        ['id', 'DESC']
    ]})
    .then((respostas) => res.json({ respostas }))
})

rotas.get('/respostas/:perguntaId', (req, res) => {
    const { perguntaId } = req.params

    Resposta.findAll({ 
        raw: true, 
        order: [['id', 'DESC']],
        where: { perguntaId: perguntaId }})
        .then(resposta => {
            if (resposta) {
                console.log(resposta)
                res.json({ resposta })
            } else {
                res.json({ erro: "resposta não encontrada!" })
        }
    })
})

module.exports = rotas;