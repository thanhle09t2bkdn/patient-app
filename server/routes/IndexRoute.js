const express = require('express');

const authRoutes = require('./AuthRoute');
const patientRoutes = require('./PatientRoute');
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/patient', patientRoutes);

module.exports = router;