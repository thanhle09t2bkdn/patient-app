const AuthController = require('../controllers').AuthController;
const PatientController = require('../controllers').PatientController;
const UploadController = require('../controllers').UploadController;
const AuthAPI = require('../middlewares/AuthAPI');
const isAdmin = require('../middlewares/isAdmin');
const multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));
  app.post('/api/login', AuthController.login);
  app.get('/api/patient/index', [AuthAPI, isAdmin], PatientController.index);
  app.put('/api/patient/update/:id', [AuthAPI, isAdmin], PatientController.update);
  // app.post('/api/upload', upload.single('file'), UploadController.index);
    app.post('/api/upload', UploadController.index);
};