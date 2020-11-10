// 关键字， 变量名， 操作符， 值

// var 声明可变变量，会变量上移
var cat1; 
var _cat1; // 可以用字母、下划线开头
var _1abc;  // 变量名除了开头，其他字符可以用 大小写字母、数字、下划线，不可以使用其他符号
// var 1abc // 错误，不可以用数字开头

// let 声明可变变量，不会变量上移
let cat2;
// const 声明的常量，常量不可变；不可以重新赋值，所以一般const不会只声明不赋值
// const cat3; // 不建议的写法

// var 声明变量， 并且复制数字
var dog1 = 20; // 20 是一个number类型

// --- 声明及使用 ---
var apple = 20;
var apple = 30; // 错误，因为 apple 已经被声明过了，不能重新声明
apple = 30; // 正确，因为上面声明过 apple，所以可以直接使用或赋值

const alibaba = 50;
// alibaba = 60; // 错误，因为 apple 是常量，不是变量

var apple2 = 30;
function dog(){
  apple2 = 40; // 正确，因为代码块可以读取外部代码块的内容；
  let apple3 = 50; 
  var apple4 = 50;
}

apple3 = 51; // 错误，因为外部代码块不可以读取内部代码块的内容；
apple4 = 60; // apple 从undefined 变为了 60，而不是从50到60；


// --- 不同的值进行赋值 ----

// 声明变量，并且赋值字符串
var dog2 = "hello world"; // "" 是字符串类型
var dog3 = 'hello world'; // '' 是字符串类型
var dog4 = `hello world`; // `` 是字符串类型

// 字符串拼接
console.log(dog2 + dog3); // 等于 hello worldhello world
const dog5a = `${dog2} and ${dog3}`; // 等于 hello world and hello world
// 字符串替换
const dog6 = dog4.replace("world", "wangyuanyuan"); // 等于 hello wangyuanyuan;
console.log(dog4, dog6);

// 字符串分割，成为一个数组
const list = dog3.split(" "); 
console.log(list); // 得到 ["hello", "world"];



var dog5 = false; // 赋值了boolean值
dog5 = true; // 赋值了boolean值
dog5 = "2" == 2; // 得到 true, 赋值了boolean值, == 会进行隐式转译
dog5 = "2" === 2; // 得到 false， 赋值了boolean值
dog5 = 3 > 2; // 得到 false， 赋值了boolean值
dog5 = 3 >= 2; // 得到 false， 赋值了boolean值
dog5 = 3 < 2; // 得到 false， 赋值了boolean值
dog5 = 3 <= 2; // 得到 false， 赋值了boolean值


// 以下可以复制为 undefined
var dog7; // undefined
dog7 = undefined;
dog7 = void 0; // undefined

// 复制假值
dog7 = null;
dog7 = "";
dog7 = 0;

// 基础数据类型包含 number，string, boolean, undefined, function, object, bigInt, Symbol


// 其中 object 包含 null, object, array;



// function 声明方式有：
function hello(){}
const hello2 = function(){}
const hello3 = ()=>{};

// function 在属性中声明方式有：
const data = {
  hello1: function(){},
  hello2(){},
  hello2: ()=>{},
}

// 声明一个函数，并且声明入参数
function world(a, b, c, d){
  // 声明出参
  return a + b + c + d;
}

// 执行一个函数，用括号
world(1,'dog', '2'); // 我现在只传了 3个参数，但是函数有4个参数，所以第4个参数默认是 undefined；
world(1,'dog', '2', '55','66'); // 第5个参数，传了但是函数中没有使用，所以会传递，但是没效果


// 可变参数
function world2(...dog) {
  console.log(dog); // ["hello", world, 500]
}

world2("hello", world, 500);

// 可变参数截取
function world2(a, b, ...dog) {
  console.log(a); // "hello"
  console.log(b); // world
  console.log(dog); // [500, 600, 700]
}

world2("hello", world, 500, 600, 700);

// 其中一个参数为对象的函数
function world3(a, b) {
  console.log(a); // "aaa"
  console.log(b); // {hello:"the hello", world:"the world"}
}

world3("aaa", {hello:"the hello", world:"the world"})

// 其中一个参数为对象的函数, 直接从参数取对象的值
function world3b(a, {hello, world}) {
  console.log(a); // "aaa"
  console.log(hello); // "the hello"
  console.log(world); // "the world"
}
world3b("aaa", {hello:"the hello", world:"the world"})

// --- object ---
let obj1 = {}; // 这是一个内容为空的对象，但是还是一个存在的对象

// 这是一个有两个属性，每个属性都是字符串的对象, 对象的属性值可以是任何基础数据类型，但是对象的属性名是一个字符串
// 一般属性名我们叫做 key，属性值我们叫做 value
obj1 = {
  hello: 'the hello',
  'world': 'the world',
  'dog-2':"the dog", // 因为属性名不符合 js 变量名的规范, 所以必须使用引号
}

obj1 = {
  hello: 20,
  'world': 'the world',
  'dog-2': ()=>{},
  // 属性可以是任何类型，包括数组，或对象，而数组里面也可以放对象，所以 可以层层嵌套，无限制
  dog3: [{dog:[{dog2:[333, {dog4:()=>{}}]}]}], 

}

// 读取属性的值，可以使用 . 
console.log(obj1.hello);

// 读取属性的值，可以使用 [string] 
console.log(obj1['hello']);

// 若读取出来的属性值，是一个数组或者一个对象，可以继续使用操作符读取值
console.log(obj1.dog3[0].dog2);


// --- array ---
let obj2 = []; // 这是一个内容为空的数组，但是还是一个存在的数组
// const obj1 = (); // 错误，圆括号只用在函数的参数上

// 数组和对象一样，每个内容可以是任何对象， 数组和对象的区别在于， 数组没有 key， 默认按顺序排列，所以从 0，1，2，3 这样获取值
obj2 = [20, 'helolo', obj1, ['a', 'b', 'c']];

// 数组获取值的方式，使用 [number] 获取下标，如果获取出来的是一个数组或对象，可以继续获取
const aa = obj2[0];
const aa2 = obj2[2].dog3[0].dog;