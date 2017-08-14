/**
 * Created by linxiaodan on 17-8-11.
 */
//导入koa
const Koa = require('koa');
//创建一个koa对象表示web app本身
const app = new Koa();
const bodyParser = require('koa-bodyparser');   //解析request请求
const controller = require('./controller');
//对于任何请求，调用该异步函数处理

// app.use(async (ctx, next) => {
//     await next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>Hello, koa2!</h1>';
// });

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
    await next();
});

app.use(bodyParser());

app.use(controller());

// 在端口3000监听:
app.listen(3000);
console.log('\napp started at port 3000...');