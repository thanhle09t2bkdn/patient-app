const AuthController = require('../controllers').AuthController;
const PatientController = require('../controllers').PatientController;
const UploadController = require('../controllers').UploadController;
const AuthAPI = require('../middlewares/AuthAPI');
const isAdmin = require('../middlewares/isAdmin');
const Util = require('../helpers/Util');
module.exports = (app) => {
    app.get('/', (req, res) => res.json(Util.success('Welcome to the Patient App')));
    app.get('/api', (req, res) => res.json(Util.success('Welcome to the Patient API!')));
    app.post('/api/login', AuthController.login);
    app.get('/api/patient/index', PatientController.index);
    app.put('/api/patient/update/:id', PatientController.update);
    app.post('/api/upload', UploadController.index);
    app.get('/api/patient/index/:term', PatientController.find);
    app.get('/api/patient/:id', PatientController.detailPatient);
};