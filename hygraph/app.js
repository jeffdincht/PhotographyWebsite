require('dotenv').config();
const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


const app = express();
const PORT = 3000;

const urlApi = "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clo8ngu6186jl01t208ol5byj/master";
const chaveApi = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTg0MjcyODEsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xvOG5ndTYxODZqbDAxdDIwOG9sNWJ5ai9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZDMzMTk4M2EtOGVlNi00OTY3LTgxNWQtOTJlMmY5MzQ2NTA1IiwianRpIjoiY2xvOHZyMW5tOTk3OTAxdDVmYTdvYWM1cCJ9.GeALovmvKM0_4Pjr05Nfhk0I3AZ4r5pBTTxBEHQkNqqylO39UYLGoBxb5Xi7Ja4g3za5J-lDeZ5zPdzhVeH0Hhk2F7BKhqZYpNELhqUtrotDGI0Omql-irngy-UP7oBe9gfJ4kpSXVL5FCBvSdCSIFw5z7_20voYVHRBUnhFjIx2lBkvMx33lZrh-9KKQwmXS5cOe1fCfmy7RRaL3t2-QRCQztNR40BV2V1inp5fWw8M15AUITzPsGTzAtSyyrwtrcgcQAMDzraHelvgmpk77MYLD7aJhhQwDnpWyC3JenAA1iBAjLGEP9Ccf3qv3GIB8Hy6-330dc34ToRQuPsmvP4HBFoEWAdxgekRqVBqUrdja0CVkpTj8OhDXYPoGt97hEKjn9LZNrvefKz5Kmu9b_vea0eQVBx_lMahFsGsiP2iXoPknNeM57C0zgzjLXJPqk8L9VkDfhHY0bxNDV3NoJ5P1aN3ucJLRelrzfrg-7WlJ4LG3D3J5AZndloEve-U47iM2dgSf6fmvviaQRxsJkYmvM2ZdShh5tuHJDKxCd2fH0uVlRzB9FPhlWrp_Izs0QJuEe5lBe3gbvHPi6aNJ9s5I0ktATdmAkWkTE0L0l2jWwJdZbVnQgmvuocJSvx9yUB082AsrNKZGAvNLfQjOQME327TDjTv0zzbN50LcOg"

const queryGravida = 
`{
  gravidas {

    gravidas {
      id
      url
    }
  }
}`

const queryBebe =
`{
  bebes {

    bebes {
      id
      url
    }
  }
}`

const queryFamilia = `
{
  familias {

    familias {
      id
      url
    }
  }
}`

const queryRecemNascido = `{
  recemNascidos {

    recemNascidos {
      id
      url
    }
  }
}`


app.get('/gravidas', async (req, res) => {
  try {
    const resposta = await fetch(`${urlApi}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${chaveApi}`,
      },
      body: JSON.stringify({ query: queryGravida })
    }).then(teste => teste.json());


    res.json(resposta);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro' });
  }
});

app.get('/bebe', async (req, res) => {
  try {
    const resposta = await fetch(`${urlApi}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${chaveApi}`,
      },
      body: JSON.stringify({ query: queryBebe })
    }).then(teste => teste.json());


    res.json(resposta);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro' });
  }
});

app.get('/familias', async (req, res) => {
  try {
    const resposta = await fetch(`${urlApi}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${chaveApi}`,
      },
      body: JSON.stringify({ query: queryFamilia })
    }).then(teste => teste.json());


    res.json(resposta);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro' });
  }
});

app.get('/recemnascido', async (req, res) => {
  try {
    const resposta = await fetch(`${urlApi}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${chaveApi}`,
      },
      body: JSON.stringify({ query: queryRecemNascido })
    }).then(teste => teste.json());


    res.json(resposta);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro' });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

