const Patient = require('../models').Patient;
const fs = require('fs');
const path = require('path');
const httpStatus = require('http-status');
const Util = require('../helpers/Util');
const validator = require('validator');

module.exports = {
    index(req, res) {
        Patient.findAll({
            attributes: ['id', 'avatar', 'name']
        }).then((patients) => {
            return res.json(Util.success('Get patients success!', patients));
        }).catch((error) => res.status(httpStatus.BAD_REQUEST).json(Util.error(error.message, httpStatus.BAD_REQUEST)));
    },
    update(req, res) {
        const id = req.params.id;
        let newPatient = req.body;
        Patient.update(newPatient, {
            where: { id: id }
        }).then((updatedPatient) => {
            return res.json(Util.success('Update patients success!', updatedPatient));
        })
        .catch((error) => res.status(httpStatus.BAD_REQUEST).json(Util.error(error.message, httpStatus.BAD_REQUEST)));
    },
    find(req, res) {
        const term = req.params.term;
        let searchObject = [
            { name: {$iLike: `%${term}%`} }
        ];
        if(validator.isUUID(term)) {
            searchObject.push({ id: term });
        }
        Patient.findAll({
            where: {
                $or: searchObject
            },
            attributes: ['id', 'avatar', 'name']
        }).then((patients) => {
            return res.json(Util.success('Get patients success!', patients));
        }).catch((error) => res.status(httpStatus.BAD_REQUEST).json(Util.error(error.message, httpStatus.BAD_REQUEST)));
    },
    detailPatient(req, res) {
        const id = req.params.id;
        Patient.findOne({
			where: {
				id: id
			}
		})
		.then((patient) => {
            return res.json(Util.success('Get patients success!', patient));
        })
        .catch((error) => res.status(httpStatus.BAD_REQUEST).json(Util.error(error.message, httpStatus.BAD_REQUEST)));
    }
};
