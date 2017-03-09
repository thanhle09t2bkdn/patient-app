const AuthController = require('../controllers').AuthController;
const PatientController = require('../controllers').PatientController;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));
};