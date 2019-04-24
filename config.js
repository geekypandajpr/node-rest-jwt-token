const path = require('path');
module.exports = {
	getMongoURL 	: () => "mongodb://192.168.100.3:27017/danTest",
	getAppName    	: () => 'POC test',
	getPortNumber 	: () => 3100,
	serverVersion	: () => '1.0.0',
	getSecretKey	: () => 'B5nQysyRpHXW23W2RzW4hKStzEUvuIHT'
};