class HomeController {
  index(req, res, next) {
    res.json({
      tudoCerto: true,
    });
  }
}

// tenho de mandar a isntancia
export default new HomeController();
