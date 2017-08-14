/**
 * Created by linxiaodan on 17-8-14.
 */
const koa = require('koa');
const app = new koa();

//添加静态文件处理的中间件
let staticFiles = require('./static-files');
app.use(staticFiles('/static/', __dirname + '/static'));


// 在端口3000监听:
app.listen(3000);
console.log('\napp started at port 3000...');