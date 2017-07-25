/*
document.write('aaabbb');
document.write('<p>aaa</p>');

var person = {
    name: 'bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'beijing',
    hascar: true,
    zipcode: null};
document.write(person.age+'<br>');
document.write(person.name+'<br>');

var name = '小明';
var age = 20;
//alert('你好, '+name+', 你今年'+age+'岁了!');
//alert('你好, ${name}, 你今年${age}岁了!');   浏览器不支持ES6模板字符串

var m = new map([['michael', 95], ['bob', 75], ['tracy', 85]]);
document.write(m.get('michael')+'<br>');
*/

/*
var a = ['a', 'b', 'c'];
var s = new Set(['a', 'b', 'c']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历array
    alert(x);
}
for (var x of s) { // 遍历set
    alert(x);
}
for (var x of m) { // 遍历map
    alert(x[0] + '=' + x[1]);
}*/

//Higher-order function
function add(x, y, f) {
    return f(x) + f(y);
}
document.write(add(5, -6, Math.abs) + '<br>');
/*
function normalize(arr) {
    return arr.map(function(s){
        var a = s[0].toUpperCase() + s.slice(1).toLowerCase();
        alert(a);
        return a;
    });
}
if (normalize(['adam', 'LISA', 'barT', 'a']).toString() === ['Adam', 'Lisa', 'Bart', 'A'].toString()) {
    alert('测试通过!');
}
else {
    alert('测试失败!');
}

alert(a = 'a'.toUpperCase());
*/
/*
var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
    return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
});
for (var i of r){
    document.write(i +'<br>');
}

var arr = ['A', 'B', 'C'];
var r = arr.filter(function (element, index, self) {
    console.log(element); // 依次打印'A', 'B', 'C'
    console.log(index); // 依次打印0, 1, 2
    console.log(self); // self就是变量arr
    return true;
});
*/

/*
//get the prime number of an array
function get_primes(arr) {
    return arr.filter(function (num) {
        if (num == 1) return false;
        else{
            for(var i=2;i<=Math.sqrt(num);i++){
                if(num % i == 0){
                    return false;
                }
            }
            return true;
        }
    })
}
// 测试:
var x, r, arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    alert('测试通过!');
} else {
    alert('测试失败: ' + r.toString());
}*/

/*
var obj = {
    birth: 1990,
    getAge: function (year) {
        var b = this.birth; // 1990
        var fn = (y) => y - this.birth; // this.birth仍是1990
        return fn.call({birth:2000}, year);//由于this在箭头函数中已经按照词法作用域绑定了，所以，用call()或者apply()调用箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略：
    }
};
document.write(obj.getAge(2015)+'<br>'); // 25
*/

/*
function* next_id() {
    for(var i=1;i<100;i++){
        yield i;
    }
}
// 测试:
var x, pass = true, g = next_id();
for (x = 1; x < 100; x ++) {
    if (g.next().value !== x) {
        pass = false;
        alert('测试失败!');
        break;
    }
}
if (pass) {
    alert('测试通过!');
}*/

/*
document.write(123..toString()+'<br>');

var now = new Date();
document.write(now.toString()+'<br>');
var d = new Date(2015, 5, 19, 20, 15, 30, 123);
document.write(d+'<br>');
var d = new Date(Date.parse('2015-06-24T19:49:22.875+08:00'));
document.write(d+'<br>');

var re = /^\d{3}-\d{3,8}$/;
document.write(re.test('010-12345')+'<br>');
document.write(re.test('010-1234x')+'<br>');
document.write(re.test('010 12345')+'<br>');

document.write('a,b;; c  d'.split(/[\s\,\;]+/).toString()+'<br>');

re = /^(\d{3})-(\d{3,8})$/;
document.write(re.exec('010-12345')+'<br>');
document.write(re.exec('010 12345')+'<br>');
*/

/*
//check email with RegExp
var re = /^[a-zA-Z.0-9]+@\w+\.\w+$/;
// 测试:
var
    i,
    success = true,
    should_pass = ['someone@gmail.com', 'bill.gates@microsoft.com', 'tom@voyager.org', 'bob2015@163.com'],
    should_fail = ['test#gmail.com', 'bill@microsoft', 'bill%gates@ms.com', '@voyager.org'];
for (i = 0; i < should_pass.length; i++) {
    if (!re.test(should_pass[i])) {
        alert('邮箱测试失败: ' + should_pass[i]);
        success = false;
        break;
    }
}
for (i = 0; i < should_fail.length; i++) {
    if (re.test(should_fail[i])) {
        alert('邮箱测试失败: ' + should_fail[i]);
        success = false;
        break;
    }
}
if (success) {
    alert('邮箱测试通过!');
}*/

/*
check email with name at begin
var r1 = /^<(\w+\s\w+)>$/;
document.write(r1.exec('<Tom Paris>').toString()+'<br>');

var re = /^<(\w+\s\w+)>\s([a-zA-Z.0-9]+@\w+\.\w+)$/;
// 测试:
var r = re.exec('<Tom Paris> tom@voyager.org');
document.write(r.toString()+'<br>');
if (r === null || r.toString() !== ['<Tom Paris> tom@voyager.org', 'Tom Paris', 'tom@voyager.org'].toString()) {
    alert('测试失败!');
}
else {
    alert('测试成功!');
}
*/

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
console.log(JSON.stringify(xiaoming, null, '    '));
console.log(JSON.stringify(xiaoming, null, '    '));
console.log(JSON.stringify(xiaoming, ['name', 'skills'], '  '));
function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}
console.log(JSON.stringify(xiaoming, convert, '  '));

/*//class,现在大多数浏览器不支持
class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        alert('Hello, ' + this.name + '!');
    }
}
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        alert('I am at grade ' + this.grade);
    }
}*/

//the same as: $(document).ready(function(){});
$(function(){
    // $('document').write('this is the test');
    var getButton = $('button');
    getButton.css('background-color', '#ff0000');
    var testLi = $('ul.test-li');
    testLi.hide();
    getButton.attr('name', 'button');
    var radio = $('input#test-radio');
    console.log(radio.attr('value'));
    console.log(radio.attr('checked')+'\n'+radio.is(':checked')+'\n'+radio.prop('checked'));

    var
        input = $('#test-input'),
        select = $('#test-select'),
        textarea = $('#test-textarea');

    console.log(input.attr('name'));
    console.log(input.val());
    input.val('abc@example.com'); // 文本框的内容已变为abc@example.com

    console.log(select.val());
    select.val('SH'); // 选择框已变为Shanghai

    console.log(textarea.val());
    textarea.val('Hi'); // 文本区域已更新为'Hi'

    //add string
    testLi.show();
    testLi.append('<li>add DOM</li>');
    //add dom object
    var ps = document.createElement('li');
    ps.innerHTML = '<span>Pascal</span>';
    testLi.append(ps);
    testLi.append(function (index) {
        return '<li><span>Language - ' + index + '</span></li>';
    });

    //same level add
    var li_test = $('ul.test-li>li:nth-child(2)');
    li_test.after('<li>add in the same level, after</li>');
    li_test.before('<li>add in the same level, before</li>');

    var a = $('#test-link');
    a.click(function () {
        alert('Hello');
    });

    $.fn.highlight2 = function(){
        this.css('backgroundColor', '#0000ff').css('color', '#ff0000');
        return this;
    };
    $.fn.highlight1 = function () {
        // this已绑定为当前jQuery对象:
        this.css('backgroundColor', '#fffceb').css('color', '#d85030');
        return this;
    };
    $('#test-highlight1 span').highlight2();

});

console.log('hello!');
//<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
