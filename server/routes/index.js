const AuthController = require('../controllers').AuthController;
const PatientController = require('../controllers').PatientController;
const AuthAPI = require('../middlewares/AuthAPI');
const isAdmin = require('../middlewares/isAdmin');
const Util = require('../helpers/Util');
module.exports = (app) => {
    app.get('/', (req, res) => res.json(Util.success('Welcome to the Patient App')));
    app.get('/api', (req, res) => res.json(Util.success('Welcome to the Patient API!')));
    app.post('/api/login', AuthController.login);
    app.get('/api/patient/index', [AuthAPI, isAdmin], PatientController.index);
    app.put('/api/patient/update/:id', [AuthAPI, isAdmin], PatientController.update);
    app.get('/api/patient/index/:term', [AuthAPI, isAdmin], PatientController.find);
    app.get('/api/patient/:id', [AuthAPI, isAdmin], PatientController.detailPatient);
};