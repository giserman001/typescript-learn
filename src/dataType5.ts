// 类
class Dog {
  constructor(name: string) {
    this.name = name
  }
  name?: string // 可设置可选,也可以这么写 name: string = 'dog
  run() {
    console.log('run')
    this.pri()
  }
  private pri() {
    console.log('我是私有成员')
  }
  protected pro() {}
  readonly legs: number = 4
  static food: string = 'boo'
}
// console.log(Dog.food)
// 注意：在类成员方法都是原型上属性，而类成员属性却是实例上的属性
// 成员属性：必须有初始值，或者在构造函数里有赋值
let dog = new Dog('dog')
// console.log(Dog.prototype)
// console.log(dog)
// dog.pri() // error
// dog.run()
// dog.pro() // error
// console.log(dog.legs)
// 继承
// 在构造函数中必须对调用super()
class Husky extends Dog {
  constructor(name: string, public color: string) {
    super(name)
    this.color = color
    this.pro() // 可以访问
    // console.log(this.legs)
  }
}
let husky = new Husky('dog', 'red')
// husky.pro() // error
// console.log(husky.legs)
// console.log(Husky.food)

// 类成员修饰符
// 1. public （可省略不写）
// 默认情况下都是公有成员
// 2. private 只能在类的本身调用，不能被继承不能被实例调用
    // 构造函数加private那么这个类就不能实例化也不能继承
// 3. protected  只能在类或者子类中访问
// 构造函数加protected那么这个类不能实例化只能被继承----相当于基类

// 4. readonly 只读属性（一定要初始化）

// 类成员可以加修饰符，那么构造函数参数我们也是可以加修饰符 ---- 他的作用就是将参数变成实例的属性

// 5. static 只能通过类名调用，不能通过实例调用，但是可以被继承，子类类名也是可以调用





// 抽象类与多态
// abs
// 抽象类：不能实例化，只能被继承

 abstract class Person {
  constructor( public name: string) {
    this.name = name
  }
  eat() {
    console.log('吃')
  }
  abstract sleep(): void // 抽象方法（没有函数实体, 具体函数实体可在子类中同名实现）
}
// let liu = new Person() error
class Liy extends Person {
  constructor( public name: string, public color: string) {
    super(name)
  }
  sleep() {
    console.log('liy在睡觉')
  }
}

let liy = new Liy('liy', 'red')
// liy.eat() // 可调用
// liy.sleep()

// 在抽象类中我们也可以利用abstract定义抽象方法（不在指定函数具体实现）
// 抽象类的好处：抽离事务的共性，有利于代码复用和扩展，另外抽象类也可以实现多态，在父类中定义抽象方法（没有函数实体），再多个子类中对这个方法有不同实现方法。

class Bin extends Person {
  constructor( public name: string, public color: string) {
    super(name)
  }
  sleep() {
    console.log('bin 在睡觉')
  }
}

let bin = new Bin('bin', 'red')
// bin.sleep()

let persons: Person[] = [liy, bin] // 这里定义不是很懂
persons.forEach((i) => {
  i.sleep()
})


// this类型 实现链式调用
class workFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}

let workFlow1 = new workFlow()
// 实现链式调用
workFlow1.step1().step2

// 在继承的时候 this也可以表现多态 (子类型、父类型)
class myFlow extends workFlow {
  next() {
    return this
  }
}
let me = new myFlow()
me.next().step1().next().step2()



// 接口和类的关系  
// 接口可以约束类成员  但是只能约束公有成员，不能约束构造函数

interface Human {
  name: string,
  eat(): void
}

class Asian implements Human {
  constructor(public name: string) {}
  eat() {
    console.log('eat')
  }
  sleep() {}
}

// 接口之间可以实现继承

interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

// 继承多个接口用逗号隔开
// 抽离出可复用接口，并且多个接口合并一个接口
interface Boy extends Man, Child {}

let boy:Boy = {
  name: '',
  eat() {},
  run() {},
  cry() {}
}

// 接口可以继承接口，那么接口也可以继承类，只是把类成员抽象出来

class Auto {
  state = 1
}
// 这个过程抽离包含公共成员，受保护成员，私有成员
interface AutoFace extends Auto {}
// 这个过程只包含公共成员
class C implements AutoFace {
  state: number = 10
}
class Bus extends Auto implements AutoFace {

}