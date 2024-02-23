import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Photo from '../models/Photo';

const upload = multer(multerConfig).single('file');

class PhotoController {
  store(req, res, next) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      const { originalname, filename } = req.file;
      try {
        const { aluno_id } = req.body;
        const foto = await Photo.create({ originalname, filename, aluno_id });

        return res.json(req.file);
      } catch (e) { // caso nao exista aluno!!!
        return res.status(400).json({
          errors: ['Aluno nao existe'],
        });
      }
    });
  }
}

// tenho de mandar a isntancia
export default new PhotoController();
