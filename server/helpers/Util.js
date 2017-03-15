module.exports = {
	success(message, data=null) {
		var result = {
			message: message
		};
		if(data != null){
			result.data = data;
		}
		return result;
	},
	error(message, statusCode){
		var result = {
			statusCode: statusCode,
			message: message,
		};
		return result;
	}
};