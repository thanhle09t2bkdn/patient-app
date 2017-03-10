/**
 * AuthAPI
 *
 */
const jwt = require('jsonwebtoken');
const User = require('../models').User;
const config = require('../config/env');
const fs = require('fs');
const path = require('path');
const httpStatus = require('http-status');
const Util = require('../helpers/Util');
 module.exports = function(req, res, next) {
    var token;
    if (req.headers && req.headers.authorization) {
        var parts = req.headers.authorization.split(' ');
        if (parts.length == 2) {
            var scheme = parts[0],
            credentials = parts[1];
            if (/^Bearer$/i.test(scheme)) {
                token = credentials;
            }
        } else {
            
            return res.status(httpStatus.UNAUTHORIZED).json(Util.error('Format is Authorization: Bearer [token]', httpStatus.UNAUTHORIZED));
        }
    } else if (req.param('token')) {
        token = req.param('token');
        // We delete the token from param to not mess with blueprints
        delete req.query.token;
    } else {
        return res.status(httpStatus.UNAUTHORIZED).json(Util.error('No Authorization header was found', httpStatus.UNAUTHORIZED));
    }
    const cert = fs.readFileSync(path.resolve(__dirname, '..', 'config', 'cert', 'public.key'));  // get private key
    jwt.verify(token, cert, { algorithms: ['RS256'] }, function (err, payload) {
        if (err) {
            return res.status(httpStatus.BAD_REQUEST).json(Util.error(err.message, httpStatus.BAD_REQUEST));
        }
        // Find the user with that token
        User
        .findById(payload.id)
        .then((user) => {
            req.user = user;
            next();
        })
        .catch((error) => {
            return res.status(httpStatus.NOT_FOUND).json(Util.error("Not found user", httpStatus.NOT_FOUND));
        });
    });
};