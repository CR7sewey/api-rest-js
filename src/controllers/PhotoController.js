class PhotoController {
  async store(req, res, next) {
    res.json(req.file);
  }
}

// tenho de mandar a isntancia
export default new PhotoController();
