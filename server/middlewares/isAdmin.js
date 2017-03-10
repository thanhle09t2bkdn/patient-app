const httpStatus = require('http-status');
const Util = require('../helpers/Util');
module.exports = function(req, res, next) {
    if(req.user.role == 'ADMIN'){
        next();
    }
    else{
        return res.status(httpStatus.UNAUTHORIZED).json(
    		Util.error("You can't access this api", httpStatus.UNAUTHORIZED)
    	);
    }
};