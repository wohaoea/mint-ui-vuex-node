exports.base = {
    debugOn: true,
    projectDir: __dirname
}

exports.loggerconfig = {
    expressWinstonConfig: {
        meta: false,
        level: 'debug',
        msg: "HTTP {{req.method}} {{req.url}} {{res.statusCode}}  {{res.responseTime}}ms",
        statusLevels: false,
        expressFormat: false,
        colorStatus: true
    },
    exitOnError: false,
    console: {
        colorize: true,
        level: 'debug',
        handleExceptions: true,
        timestamp: function() {
            var d = new Date();
            var dy = d.getFullYear();
            var dm = d.getMonth() + 1;
            if (dm < 10) {
                dm = '0' + dm;
            }
            var dd = d.getDate();
            if (dd < 10) {
                dd = '0' + dd;
            }
            var dh = d.getHours();
            if (dh < 10) {
                dh = '0' + dh;
            }
            var dmi = d.getMinutes();
            if (dmi < 10) {
                dmi = '0' + dmi;
            }
            var ds = d.getSeconds();
            if (ds < 10) {
                ds = '0' + ds;
            }
            var dms = d.getMilliseconds();
            if (dms < 10) {
                dms = '00' + dms;
            } else if (dms < 100) {
                dms = '0' + dms;
            }
            return dy + "-" + dm + "-" + dd + " " + dh + ":" + dmi + ":" + ds + "." + dms;
        }
    },
    dailyRotateFile: {
        filename: this.base.projectDir + '/logs/nwp2p',
        datePattern: '.yyyy-MM-dd.log',
        level: 'info',
        json: false,
        handleExceptions: true,
        timestamp: function() {
            var d = new Date();
            var dy = d.getFullYear();
            var dm = d.getMonth() + 1;
            if (dm < 10) {
                dm = '0' + dm;
            }
            var dd = d.getDate();
            if (dd < 10) {
                dd = '0' + dd;
            }
            var dh = d.getHours();
            if (dh < 10) {
                dh = '0' + dh;
            }
            var dmi = d.getMinutes();
            if (dmi < 10) {
                dmi = '0' + dmi;
            }
            var ds = d.getSeconds();
            if (ds < 10) {
                ds = '0' + ds;
            }
            var dms = d.getMilliseconds();
            if (dms < 10) {
                dms = '00' + dms;
            } else if (dms < 100) {
                dms = '0' + dms;
            }
            return dy + "-" + dm + "-" + dd + " " + dh + ":" + dmi + ":" + ds + "." + dms;
        }
    }
};