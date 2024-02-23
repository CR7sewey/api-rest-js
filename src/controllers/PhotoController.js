import multer from 'multer';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('arquivo');

class PhotoController {
  async store(req, res, next) {
    return upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      return res.json(req.file);
    });
  }
}

// tenho de mandar a isntancia
export default new PhotoController();
