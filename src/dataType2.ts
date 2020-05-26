// 对象类型接口：我们可以用来约束对象，函数，类的结构和类型，代码协作的契约，我们不可改变。

interface List {
  readonly id: number, // readonly表示该属性只读，无法修改
  name: string,
  age?: number // ? 可有可无
}
// 两种方式都可以
// interface Result {
//   data: Array<List>
// }
interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach((val) => {
    console.log(val.name, val.id)
    if(val.age){
      console.log(val.age)
    }
  })
}

let result = {
  data: [{
    id: 1,
    name: 'a',
    // 只要传入的数据结构和类型满足必要条件，那么ts就不会报错（这里sex字段在接口定义时并没有），但是有一种特殊情况,传入字面量时，那么就会做严格类型检查
    sex: 'male'
  },{
    id: 2,
    name: 'b',
    age: 22
  }]
}
render(result)
// render({
//   data: [{
//     id: 1,
//     name: 'a',
//     sex: 'male' // error
//   },{
//     id: 2,
//     name: 'b'
//   }]
// })

// 可以使用类型断言 绕开类型检查
// 类型断言: 明确告诉ts某个变量属于某一个类型
//类型断言有两种写法
render({
  data: [{
    id: 1,
    name: 'a',
    sex: 'male' // error
  },{
    id: 2,
    name: 'b'
  }]
} as Result)

render(<Result>{
  data: [{
    id: 1,
    name: 'a',
    sex: 'male' // error
  },{
    id: 2,
    name: 'b'
  }]
})
// 当我们不明确接口有哪些类型的时候，我们可以用索引签名解决问题
// 利用字符串索引签名
interface List1 {
  id: number,
  name: string,
  [x: string]: any // 字符串索引签名
}



// 数字索引

// 相当于声明了字符串类型的数组
interface StringArray {
  [index: number]: string
}
let charts: StringArray = ['A', 'B']
// 可以同时写两种索引(数字索引签名返回值类型一定要是字符串签名返回值类型的子类型或者相同类型)
interface StringArray1 {
  [index: number]: number
  [x: string]: number // 字符串索引签名
}
interface StringArray2 {
  [index: number]: any
  [x: string]: number // 字符串索引签名
}
