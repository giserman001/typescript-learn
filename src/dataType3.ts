// 函数类型接口

// 我们可以用一个变量定义函数类型
let adds: (a: number, b: number) => number
// 同样我们可以用接口定义一个函数类型
// 这两种方式定义时等价的
interface Adds {
  (a: number, b: number): number
}
// 我们也可以用类型别名定义
// 类型别名：用来给一个类型起个新名字
// 关键字 type

type Add = (a: number, b: number) => number

let goBack: Add = (a, b) => a + b


// 函数混合类型的接口
interface Lib {
  (): void,
  version: string,
  do(): void
}

function getLib() {
  let lib: Lib = (() => {}) as Lib
  // let lib: Lib = <Lib>(() => {})
  lib.version = '1.1'
  lib.do = () => {}
  return lib
}

let lib1 = getLib()
lib1()
lib1.do()

let lib2 = getLib()
lib2()
lib2.do()