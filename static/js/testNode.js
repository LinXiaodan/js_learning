/**
 * Created by linxiaodan on 17-7-25.
 */
'use strict';

/*
console.log('hello!');

var fs = require('fs');
//异步
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});
console.log('test sync');
*/
/*
//http
var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs');

//从命令行参数获取root目录，默认是当前目录
var root = path.resolve(process.argv[2] || '.');

var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root, pathname);
    //获取文件状态
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()){
            //没有出错并且文件存在
            console.log('200 '+ request.url);
            response.writeHead(200);
            //将文件流导向response
            fs.createReadStream(filepath).pipe(response);
        }
        else {
            console.log('404 ' + request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
    // console.log(request.method + ': '+request.url);
    // response.writeHead(200, {'Content-Type': 'text/html'});
    // response.end('<h1>Hello world</h1>');
});
server.listen(8000);
console.log('Server is running at http://127.0.0.1:8000');
*/

const koa = require('koa');
