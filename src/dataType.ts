// 原始类型
let bool: boolean = false
let num:number = 1
let str:string = 'abc'
// str = 1  // error



// 数组(2种声明方式)
let arr1: number[] = [1, 2, 3, 4]
let arr2: Array<number> = [1, 2, 3, 4]
// 联合类型
let arr3: Array<number | string> = [1, 2, 3, '4']

// 元组类型(一一对应关系，不能多不能少,跟数组有差别)

let tuple: [number, string] = [1, 'abc']
// 元组越界问题（总结：可以添加数据，但是不可越界访问）

// tuple.push(false) // error

// 可以往元组里添加
tuple.push('11')
tuple.push(11)
// console.log(tuple[2]) // 越界访问不可以


// 函数
// 这里函数返回类型可以不写，这是利用ts类型推断功能
// let add = (x: number, y: number) => x +y
let add = (x: number, y: number): number => x +y

// 函数类型(没有具体实现函数，只是定义一个函数类型(参数类型+返回值类型))
let compute: (x: number, y: number) => number
// 具体实现函数体（这里就不需要定义参数类型和返回值类型）
compute = (a, b) => a + b


// 对象
// 此时只是简单定义他是object类型，并没有定义对象里面属性的类型
// let obj: object = {x: 1, y: 2}
// obj.x = 5 // error

let obj: {x: number, y: number} = {x: 1, y: 2}

obj.x = 9

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2)


// undefined  null
// 不能赋值其他类型，只能赋值它本身
let un:undefined = undefined
let nu:null = null
// 那么其他变量可以赋值undefined null吗？
// (官方文档：undefined和null是任何类型的子类型，因此是可以赋值给其他变量,但是默认处于严格模式不可以赋值，我们可以修改tsconfig.json里面的strictNullChecks： false就可以)
let num11:number = 1
// num11 = undefined
// num11 = null
// 如果不想修改tsconfig.json, 又想兼容呢？我们改怎么去写？我们可以使用联合类型
let num22:number | undefined | null = 1
num22 = undefined
num22 = null


// void
// javascript中void是一个操作符 让任何表达式返回undefined
let i = void 2; // i === undefined
// typescript中如果方法没有返回值，那么此方法的返回值类型就是void类型
// void类型是any类型的子类型，是null和undefined类型的父类型。
void 0
let noReturn = (): void => {}
let noReturn1 = () => {}


// any (默认不声明类型他就是any类型，他可以赋值给任何类型)
let x
x = 1
x = []
x = 'abc'
x = () => {}


// never 表示永远不会有返回值的类型
let erro = () => {
  throw new Error('error')
}
let endless = ():never => {
  while(true){}
}


// 枚举类型（一组有名字的常量集合， 列如手机通讯录）