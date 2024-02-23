import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

// configs
export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => { // cb- callback
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`); // dar nome: Data de deploy + num aleatorio + extensao do arquivo
    },
  }), // salvar no servidor
};
