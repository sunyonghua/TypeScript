let foo: string | number = 1;
let foo1: string | number = '1';
// let foo2: string | number = true; // 不能正确的分配true foo2 可以是string类型|| number 类型 不能是其他类型
/**
  访问联合类型的属性或方法
  function getLength(something: string | number): number {
    return something.length;
  }
  报错 number 上不存在length方法
 */
// 访问联合类型的属性或方法
// function getLength(something: string | number): number {
//   return something.length;
// }
//  报错 number 上不存在length方法


/** 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错
 */