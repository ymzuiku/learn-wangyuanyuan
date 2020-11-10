// 声明数组
const a = [10, 30, 50, 500, "aa"]; // 字面量数组 (推荐)
// const c = [100, 101, 102................];  // 我们要创建一个大数组，用字面量会很麻烦
const c = []; // 空数组，一般来说我们经常创建空数组，然后用 for 循环填充一个大数组
const b = new Array(); // new（实例化）一个数组 (不推荐)
const d = new Array(2000).fill(0).map((v, i) => i); // new（实例化）一个数组, 然后创建大量的内容

// 获取数组长度
console.log("v0", a.length);

// 数组取下标
console.log("v1", a[0]); // 10
console.log("v2", a[4]); // aa

// 数组更新某一个下标
a[4] = "dog";
console.log("v3", a[4]); // dog

// 使用for循环填充数组
for (let i = 0; i < 5; i++) {
  // push - 往一个数组里添加一个内容
  c.push(i + "-the-for");
}
console.log("v4", c);

// for循环的跳过: continue
const forB = [];
for (let i = 0; i < 5; i++) {
  if (i === 2 || i === 3) {
    continue;
  }
  forB.push(i + "-the-for");
}
console.log("v4b", forB);

// for循环的打断: break
const forC = [];
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  forC.push(i + "-the-for");
}
console.log("v4c", forC);

// 遍历数组
// 使用for循环遍历数组
for (let i = 0; i < a.length; i++) {
  const v = a[i];
  //
  console.log("使用for循环遍历数组", v, i);
}

// 使用 forEach 遍历一个数组
// ['a', 'b', 'c', 'd'].forEach(Function) // Fucntion(v, i)
a.forEach((v, i) => {
  console.log("使用 Array.forEach 遍历一个数组", v, i);
});

// 截取数组
const a1 = ["a", "b", "c", "d", "e", "f"];
// 使用for循环截取数组, 截取数组中的 1-4
const a1Out1 = [];
for (let i = 0; i < a1.length; i++) {
  if (i >= 1 && i <= 4) {
    a1Out1.push(a1[i]);
  }
}
console.log("使用for循环截取数组", a1Out1);

// 使用for循环截取数组, 截取数组中的 1-4, 方法2
const a1Out2 = [];
for (let i = 1; i < 4 + 1; i++) {
  a1Out2.push(a1[i]);
}
console.log("使用for循环截取数组", a1Out2);

// 使用slice截取数组，截取数组中的 1-4 （推荐，但是以上for循环的方法还是要掌握）
const a1Out3 = a1.slice(1, 4 + 1);
console.log("使用Array.slice截取数组", a1Out3);

// 从一个数组得到另一个新数组
const a2 = ["a", "b", "c", "d", "e", "f"];
// 使用for循环，从一个数组得到另一个新数组
const a2out1 = [];
for (let i = 0; i < a2.length; i++) {
  a2out1.push(a2[i] + a2[i]);
}
console.log("使用for循环，从一个数组得到另一个新数组", a2out1);

// 使用map方法，从一个数组得到另一个新数组
const a2out2 = a2.map((v, i) => {
  return v + v;
});

// const a2out2 = a2.map((v, i) => v + v); 箭头函数省略 return 的写法

console.log("使用Array.map，从一个数组得到另一个新数组", a2out2);

// 拼凑数组
const c1 = ["a", "b", "c"];
const c2 = ["d", "e", "f"];
// 使用for循环拼凑数组
const a3out1 = [];
for (let i = 0; i < c1.length; i++) {
  a3out1.push(c1[i]);
}
for (let i = 0; i < c2.length; i++) {
  a3out1.push(c2[i]);
}
console.log("使用for循环，拼凑数组", a3out1);

// 使用 ... 扩展符号拼凑数组
const a3out2 = [...c1, ...c2];
console.log("使用...扩展符，拼凑数组", a3out2);
