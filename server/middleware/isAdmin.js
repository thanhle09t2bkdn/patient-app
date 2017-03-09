module.exports = function(req, res, next) {
    if(req.user.role == 'ADMIN'){
        next();
    }
    else{
        return res.json("You can't access this api");
    }
};