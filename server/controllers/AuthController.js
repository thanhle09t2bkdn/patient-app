const jwt = require('jsonwebtoken');
const User = require('../models').User;
const env = require('../config/env');
const fs = require('fs');
const path = require('path');
const httpStatus = require('http-status');
const Util = require('../helpers/Util');
module.exports = {
	login(req, res) {
		var username = req.param('username');
		var password = req.param('password');
		return User
		.findOne({
			where: {
				username: username,
				role: 'ADMIN'
			},
			// attributes: ['id', 'username', 'email', 'role']
		})
		.then((user) => {
			if (!user) {
				return res.status(httpStatus.NOT_FOUND).json(Uti.error('User Not Found', httpStatus.NOT_FOUND));
			}
			if(user.validatePassword(password)){
				const cert = fs.readFileSync(path.resolve(__dirname, '..', 'config', 'cert', 'private.key'));  // get private key
				const token = jwt.sign({
							id: user.id,
							role: user.role,
                        }, 
                        cert, 
                        {algorithm: 'RS256', expiresIn: env.expireTime}
                        );
				var valuesUser = user.toJSON();
                valuesUser.token = token;
				return res.json(Util.success('Login success', valuesUser));
			}
			else{
				return res.status(httpStatus.UNAUTHORIZED).json(Util.error('Wrong password', httpStatus.UNAUTHORIZED));
			}
			
			
		})
		.catch((error) => res.status(httpStatus.BAD_REQUEST).json(Util.error(error.message, httpStatus.BAD_REQUEST)));
	},
};
