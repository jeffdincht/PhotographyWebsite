import express, { Request, Response } from 'express';
import * as fs from 'fs';

const port: number = 3000;
const app: express.Application = express();
const ftp = require("basic-ftp");
const config = {
  host: "formacaocesae.pt",
  user: "r23fdev01_teamj",
  password: "0A98z6xr!",
};

async function getPhoto(namePhoto: string, pathPhoto: string) {
  const client = new ftp.Client();
  await client.access(config);
  await client.downloadTo('C:/Users/Viviane/Downloads/DownloadFilezila/' + namePhoto,  pathPhoto);
  await client.close();
}

app.get('/photo/:namePhoto', async (req, res) => {
  const namePhoto: string = req.params.namePhoto?.toLowerCase();
  const pathPhoto = foundPathToFile(namePhoto);
  if(pathPhoto){
     try{
        await getPhoto(namePhoto, pathPhoto); //função acima executada
        res.sendFile(`C:/Users/Viviane/Downloads/DownloadFilezila/${namePhoto}`)
      } catch (error){
        console.error(error);
        res.status(500).send('Error aaaaaaaaaaaaa.');
      } 
  } else {
    res.status(500).send('foto nao existente');
  }
 
})

const fileJsonVariable = JSON.parse(fs.readFileSync('./api-site-catarina/src/files/imagesPath.json', 'utf8'));

function foundPathToFile(nameFile: string): string | null {
  return fileJsonVariable[nameFile] || null;
}

app.get('teste', async (req, res) => {
    res.status(200).send('ta funcionando');
})


app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
});

/*No arquivo JSON, a ordem é
- bebe
- familia
- gravida
- recem nascido
*/

  
  
  