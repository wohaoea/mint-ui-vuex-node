var winston = require('winston');
var config = require('../config');

exports.thirdlogger = new (winston.Logger)({
	exitOnError : config.loggerconfig.exitOnError,
    transports: [
      new (winston.transports.Console)(config.loggerconfig.console),
      new (winston.transports.DailyRotateFile)(config.loggerconfig.dailyRotateFile)
    ]
});

exports.debug = function() {
	this.thirdlogger.debug.apply(this, arguments);
};

exports.info = function(logdata) {
	this.thirdlogger.info.apply(this, arguments);
};

exports.error = function(logdata) {
	this.thirdlogger.error.apply(this, arguments);
};

exports.analyze = function(logdata) {
	this.thirdlogger.debug.apply(this, arguments);
};