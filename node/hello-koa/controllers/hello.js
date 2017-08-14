/**
 * Created by linxiaodan on 17-8-14.
 * hello界面，URL处理函数
 */

var fn_hello = async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}</h1>`;
};

module.exports = {
    'GET /hello/:name': fn_hello
};