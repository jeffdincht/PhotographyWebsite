require('dotenv').config();
import express from 'express';
import { get } from 'axios';
//const axios = require('axios');

const app = express();
const PORT = 3000;

const urlApi = process.env.HYGRAPH_URL;
const chaveApi = process.env.HYGRAPH_TOKEN;

app.get('/bebe', async (req, res) => {
  try {
    const resposta = await get(`${urlApi}/endpoint`, {
      headers: {
        'Authorization': `Bearer ${chaveApi}`,
      }
    });

    const dados = resposta.data;
    res.json(dados);
  } catch (erro) {
    console.error('Erro ao buscar dados:', erro);
    res.status(500).json({ erro: 'Erro ao buscar dados' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


//https://medium.com/stackanatomy/interacting-with-form-data-using-next-js-and-hygraph-a43b1dbbe30
//https://hygraph.com/blog/working-with-expressjs-and-hygraph