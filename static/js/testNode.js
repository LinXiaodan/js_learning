/**
 * Created by linxiaodan on 17-7-25.
 */
'use strict';

console.log('hello!');

var fs = require('fs');
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});
console.log('test sync');

