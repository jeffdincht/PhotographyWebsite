"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs = __importStar(require("fs"));
const port = 3000;
const app = (0, express_1.default)();
const ftp = require("basic-ftp");
const config = {
    host: "formacaocesae.pt",
    user: "r23fdev01_teamj",
    password: "0A98z6xr!",
    secure: false
};
function getPhoto(namePhoto, pathPhoto) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new ftp.Client();
        yield client.access(config);
        yield client.downloadTo('C:/Users/Viviane/Downloads/DownloadFilezila/' + namePhoto, pathPhoto);
        yield client.close();
    });
}
app.get('/photo/:namePhoto', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const namePhoto = (_a = req.params.namePhoto) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    const pathPhoto = foundPathToFile(namePhoto);
    if (pathPhoto) {
        try {
            yield getPhoto(namePhoto, pathPhoto); //função acima executada
            res.sendFile(`C:/Users/Viviane/Downloads/DownloadFilezila/${namePhoto}`);
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Error aaaaaaaaaaaaa.');
        }
    }
    else {
        res.status(500).send('foto nao existente');
    }
}));
const fileJsonVariable = JSON.parse(fs.readFileSync('./api-site-catarina/src/files/imagesPath.json', 'utf8'));
function foundPathToFile(nameFile) {
    return fileJsonVariable[nameFile] || null;
}
function obterImagem(nomeImagem, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const cliente = new ftp.Client();
        try {
            yield cliente.access(config);
            const stream = yield cliente.downloadToStream(`/assets/images/bebe/8meses_7.jpg`);
            stream.pipe(res);
        }
        catch (err) {
            console.error(err);
            res.status(500).send('Erro ao obter imagem');
        }
        finally {
            cliente.close();
        }
    });
}
app.get('/imagem/:nome', (req, res) => {
    const nomeImagem = req.params.nome;
    obterImagem(nomeImagem, res);
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
/*No arquivo JSON, a ordem é
- bebe
- familia
- gravida
- recem nascido
*/
