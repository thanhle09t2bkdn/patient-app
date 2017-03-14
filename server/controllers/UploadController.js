/**
 * Created by sonvu on 11/03/2017.
 */
const httpStatus = require('http-status');
const Util = require('../helpers/Util');
const fs = require('fs');
const path = require('path');
const uuidV1 = require('uuid/v1');
const formidable = require('formidable');

module.exports = {
	index(req, res) {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
        	let file = files.file;
            let newFileName = `${uuidV1()}_${file.name}`;
            var oldPath = file.path;
            var newPath = path.resolve(__dirname, '..', '..', `uploads/${newFileName}`);
            fs.rename(oldPath, newPath, function (error) {
                if (error){
                    return res.status(httpStatus.BAD_REQUEST).json(Util.error(error.message, httpStatus.BAD_REQUEST));
				}
                return res.json(Util.success('Upload success!', newFileName));
            });
        });
	}
};
