/**
 * @file YOG2 框架启动入口
 * @author fis@baidu.com
 */

'use strict';

var yog = require('yog2-kernel');
var YLogger = require('yog-log');
var path = require('path');


var app = yog.bootstrap({
    rootPath: __dirname
}, function () {
    console.log('plugins load completed');
});


var conf = {
    app: 'yog', //app名称，产品线或项目名称等
    log_path: path.join(__dirname, 'log'), //日志存放地址
    intLevel: 16 //线上一般填4，参见配置项说明
  }
  
app.use(YLogger(conf));
app.set('port', process.env.PORT || 8085);
app.disable('x-powered-by');

var server = yog.server = app.listen(app.get('port'), function () {
    console.log('Yog server listening on port ' + server.address().port);
});

server.on('connection', function (socket) {
    // disable nagle
    socket.setNoDelay(true);
});

// 仅在 Node.js 6.x开启这个功能 https://github.com/nodejs/node/issues/7126
if (parseInt(process.versions.node.split('.')[0], 10) >= 6) {
    server.on('clientError', function (err, socket) {
        socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
    });
}


