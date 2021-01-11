const express = require('express');
const rotas = require('./rotas');

app = express();

app.use(cors());

app.use(express.json())
app.use(rotas);

app.listen(3333, () => console.log('App rodando'));