/**
 * Created by sonvu on 11/03/2017.
 */
const httpStatus = require('http-status');
const Util = require('../helpers/Util');
const fs = require('fs');
const path = require('path');
const busboy = require('connect-busboy');
const uuidV1 = require('uuid/v1');

module.exports = {
	index(req, res) {
		let fstream;
		req.pipe(req.busboy);
		req.busboy.on('file', function (fieldName, file, fileName, encoding, mimeType) {
			let newFileName = `${uuidV1()}_${fileName}`;
			fstream = fs.createWriteStream(path.resolve(__dirname, '..', '..', `uploads/${newFileName}`));
			file.pipe(fstream);
			fstream.on('close', function () {
				return res.json(Util.success('Upload success!', newFileName));
			});
		});
	}
};
