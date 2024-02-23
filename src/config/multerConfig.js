import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

// configs
export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      console.log('AQUI32232322II');

      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG.'));
    }
    console.log('AQUIIIIIIIIIIIIIIIIIII');
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => { // cb- callback
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`); // dar nome: Data de deploy + num aleatorio + extensao do arquivo
    },
  }), // salvar no servidor
};
