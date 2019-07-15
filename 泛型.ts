/**
 * @泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
 */
function getData<T>(value: T): T {
    return value
}

console.log(getData<number>(1))
console.log(getData<string>('yonghua'))