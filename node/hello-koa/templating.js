/**
 * Created by linxiaodan on 17-8-14.
 * 集成nunjucks
 * 给ctx对象绑定一个render方法，在其他地方调用这个方法渲染模板
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