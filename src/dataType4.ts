// 函数

// 函数定义方式
// 1.第一种
function add1(x: number, y: number) {
  return x + y
}
// 2.第二种
let add2: (x: number, y: number) => number
// 3.第三种
type add3 = (x: number, y: number) => number
// 4.第四种
interface add4 {
  (x: number, y: number): number
}

// 函数参数
// 参数（形参和实参）必须一一对应

// 当然也可以设置为：可选参数(?)
// 注意： 可选参数必须位于必选参数之后
function add5(x: number, y?: number) {
  return y ? x + y : x
}
// 参数默认值
// 注意：必选参数之前默认参数如果没有值，必须穿undefiend占据位置，必选参数之后没有这个要求
function add6(x: number, y = 9, z: number, q = 7) {
  return x + y + z + q
}
// console.log(add6(2, undefined, 4))

//以上参数都是固定参数
// 那么参数个数不固定怎么办? 在es6里面使用关键字 ...rest表示  那么在typescript也是一样的
function add7(x: number, ...rest: number[]) {
  // 这里的reduce需要好好研究一下
  return x + rest.reduce((pre, cur) => pre + cur)
}
// console.log(add7(6,5,6,7,7))

//函数重载
// 两个函数名称相同，但是参数个数或者类型不同那么就形成函数重载
// 好处：不需要为了相似功能定义不同的函数名字，这样增强函数可读性
function add8(...rest:number[]): number
function add8(...rest:string[]): number
function add8(...rest:any[]): any {
  let first = rest[0]
  if(typeof first === 'string') {
    return rest.join('')
  }
  if(typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
}
// console.log(add8(6,5,6,7,7))
// console.log(add8('a', 'b', 'c', 'd'))