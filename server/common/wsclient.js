var config = require('../config');
var messages = require('./messages');
var logger = require('./logger');
var Client = require('node-rest-client').Client;
var path = require("path");
var fs = require('fs');

client = new Client();

var getMovie = {
    hotMovie: 'https://api.douban.com/v2/movie/in_theaters',
    newMovie: 'https://api.douban.com/v2/movie/coming_soon',
    topMovie: 'https://api.douban.com/v2/movie/top250'
}

// 感恩节活动
Object.keys(getMovie).forEach(function(key){
    exports[key] = function(jsondata, callback) {
        invokeWebService('GET', getMovie[key], jsondata, callback);
    };
})

/*
 * Invoke web service. Web service result is json : {data : data, success : true|false, msg : msg}.
 */
function invokeWebService(type, url, jsondata, callback) {
    if (type === 'GET') {
        let dataStr = '?'
        let isNull = true
        for (const key in jsondata) {
            if (jsondata.hasOwnProperty(key)) {
                isNull = false
                const element = jsondata[key];
                dataStr += key + '=' + element + '&'
            }
        }
        if (!isNull) {
            url += dataStr.substring(0, dataStr.length - 1)
        }
        client.get(url, function(result) {
            result = JSON.parse(result);
            callback(result)
        })
    } else if (type === 'POST') {
        args.data = jsondata;
        if (config.base.debugOn) {
            logger.debug("Start to invoke web service : ", url);
            logger.debug("Invoke web service data is : ", args.data);
        }
        client.post(url, args, function(result, response) {
            if (config.base.debugOn) {
                logger.debug("Finish to invoke web service : ", url);
                logger.debug("Invoke web service result is : ", result);
            }
            //parsed response body as js object
            var jresult = result;
            //logger.debug(jresult.data + "=============="); 
            console.log("===" + JSON.stringify(result));
            try {
                if (!jresult.success) {
                    if (config.base.debugOn) {
                        logger.debug("Invoke web service result is fail : ", jresult);
                    }
                }
            } catch (err) {
                logger.error("Parse web service result to json error : ", err);
            }
            //print response
            if (jresult != null) {
                callback(jresult);
            } else {
                var msg = messages.invokeWSFail;
                callback({
                    success: false,
                    msg: msg
                });
            }
        }).on('error', function(err) {
            logger.error(messages.invokeWSFailWithColon, err);
        });
    }
}