/**
 * Created by linxiaodan on 17-8-14.
 */
const koa = require('koa');
const app = new koa();

const templating = require('./templating');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const isProduction = process.env.NODE_ENV === 'production';//判断当前环境是否是production环境。

//记录URL以及页面执行时间
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    var
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

//添加静态文件处理的包，比如获取'static/css/bootstrap.css'的URL为'http://localhost:3000/static/css/bootstrap.css'
if(!isProduction){
    const serve = require('koa-static');
    app.use(serve('.'));
}

// add nunjucks as view:
app.use(templating('views', {
    noCache: !isProduction,
    watch: isProduction
}));

//解析request的POST请求
app.use(bodyParser());

//处理URL路由
app.use(controller());

// 在端口3000监听:
app.listen(3000);
console.log('\napp started at port 3000...');