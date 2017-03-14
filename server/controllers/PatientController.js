const Patient = require('../models').Patient;
const fs = require('fs');
const path = require('path');
const httpStatus = require('http-status');
const Util = require('../helpers/Util');
const validator = require('validator');
const formidable = require('formidable');
const uuidV1 = require('uuid/v1');

module.exports = {
    index(req, res) {
        Patient.findAll({
            attributes: ['id', 'avatar', 'name']
        }).then((patients) => {
            return res.json(Util.success('Get patients success!', patients));
        }).catch((error) => res.status(httpStatus.BAD_REQUEST).json(Util.error(error.message, httpStatus.BAD_REQUEST)));
    },
    update(req, res) {
        var form = new formidable.IncomingForm();
        const id = req.params.id;
        form.parse(req, function(err, fields, files) {
            let newPatient = fields;

            let file = files.file;
            if(file) {
                let newFileName = `${uuidV1()}_${file.name}`;
                var tmpPath = file.path;
                var newPath = path.resolve(__dirname, '..', '..', `uploads/${newFileName}`);
                fs.rename(tmpPath, newPath, function (err) {
                    if (err) {
                        return res.status(httpStatus.BAD_REQUEST).json(Util.error(err.message, httpStatus.BAD_REQUEST));
                    }
                    Patient.findByPrimary(id).then(patient => {
                        let oldFileName = patient.avatar;
                        newPatient.avatar = newFileName;
                        Patient.update(newPatient, {
                            where: { id: id }
                        }).then((affectedCount) => {
                            let oldPath = path.resolve(__dirname, '..', '..', `uploads/${oldFileName}`);
                            fs.unlink(oldPath, (error) => {
                                if (error) {
                                    return res.status(httpStatus.BAD_REQUEST).json(Util.error(error.message, httpStatus.BAD_REQUEST));
                                }
                                Patient.findByPrimary(id).then(patient => {
                                    return res.json(Util.success('Update patients success!', patient));
                                }).catch((error) => res.status(httpStatus.BAD_REQUEST).json(Util.error(error.message, httpStatus.BAD_REQUEST)));

                            });

                        }).catch((error) => res.status(httpStatus.BAD_REQUEST).json(Util.error(error.message, httpStatus.BAD_REQUEST)));
                    });

                });
            }else {
                Patient.update(newPatient, {
                    where: { id: id }
                }).then((affectedCount) => {
                    Patient.findByPrimary(id).then(patient => {
                        return res.json(Util.success('Update patients success!', patient));
                    }).catch((error) => res.status(httpStatus.BAD_REQUEST).json(Util.error(error.message, httpStatus.BAD_REQUEST)));

                }).catch((error) => res.status(httpStatus.BAD_REQUEST).json(Util.error(error.message, httpStatus.BAD_REQUEST)));
            }

        });



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
