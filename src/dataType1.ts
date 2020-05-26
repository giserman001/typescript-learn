// 枚举类型（一组有名字的常量集合， 列如手机通讯录）
//数字枚举---默认枚举成员值从0开始依次递增
enum Role {
  Reporter,
  Developer,
  Maintainter,
  Owner,
  Guest
}

// console.log(Role.Reporter) // 0

// 我们可以自定义初始值,那么后面的值依次递增，前面的还是从0开始递增
enum Role1 {
  Reporter,
  Developer,
  Maintainter = 6,
  Owner,
  Guest
}
// console.log(Role1.Reporter) // 0
// console.log(Role1.Developer) // 1
// console.log(Role1.Owner) // 7
// 很类似一个对象，打印下面
// console.log(Role1)
//反向映射
/*
{
  0: "Reporter"
  1: "Developer"
  6: "Maintainter"
  7: "Owner"
  8: "Guest"
  Reporter: 0
  Developer: 1
  Maintainter: 6
  Owner: 7
  Guest: 8
  __proto__: Object
}
*/

// 字符串枚举
enum Msassage {
  Success = '恭喜，成功',
  Fail = '你失败了'
}
//不能反向映射
// console.log(Msassage, 'Msassage')
/*
{
  Success: "恭喜，成功"
  Fail: "你失败了"
  __proto__: Object
}
*/

// 异构枚举----数字和字符串混用 --- 不建议使用
enum Answer {
  N,
  Y = 'yes'
}



// 枚举成员
// 枚举成员分类为const enum/compute enum
enum Char {
  // const
  a,
  b = Char.a,
  c = 1 + 3,
  // compute (编译时不计算，只在运行时计算)
  d = Math.random(),
  e = '1111'.length,
  // 在compute枚举后面的新增成员必须有初始化表达式,列如下面：
  // u  // error
}
// 枚举成员是只读类型，不能进行修改
// Char.a = 9


// 常量枚举
// 注意：常量枚举在编译期间就会被移除，有可能就会问那这个常量枚举有啥作用呢？
const enum Mouth {
  Jan,
  Feb,
  Mar
}
// 当我们不需要对象，只需要对象值得时候我们就可以使用常量枚举，这样做可以减少编译后的代码。
let month = [Mouth.Jan, Mouth.Feb, Mouth.Mar]

// 枚举类型
// 在某些情况下 枚举和枚举成员都可以做一种类型存在
enum E {a, b}
enum F {a = 1, b = 2}
enum G {a = 'aaaa', b = 'bbbb'}
// 可以把number类型赋值给枚举
let e: E = 9999
// 取值也可以超出枚举定义时的值
let f: F = 9999
// e === f // error 枚举之间不可以比较


// 枚举成员类型
let e1: E.a
let e2: E.b
// e1 === e2 // error 不可比较
let e3: E.a
// e1 === e3 // error

// 注意：取值只能是预定义的值（自身），不能自定义值
let g1: G = G.b
let g2: G.b = G.b


