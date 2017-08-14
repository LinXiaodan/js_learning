/**
 * Created by linxiaodan on 17-8-14.
 */
const nunjucks = require('nunjucks');

function createEnv(path, opts){
    var
        autoescape = opts.autoescape === undefined? true : opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            //文件系统加载器，从指定目录读取模板
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch,
            }),{
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters){
        for (var f in opts.filters){
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

//env: Nunjucks模板引擎对象
var env = createEnv('views', {
    watch: true,
    filters:{
        hex: function(n){
            return '0x' + n.toString(16);
        }
    }
});


var s = env.render('hello.html', {name: '<script>alert("小明")</script>'});
console.log(s);

fruits = ['banana', 'apple', 'pear'];

console.log(env.render('extend.html', {
    header: 'Hello',
    body: 'bla bla bla...'
}));
