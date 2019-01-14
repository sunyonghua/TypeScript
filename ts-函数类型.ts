// 函数输入-参数 输出-返回值

function sum(x: number, y: number): number {
  return x + y;
}

// sum('1', 2); // 字符串1不能赋值给参数x number类型
// sum(1, 2, 3); // 不允许多传参数，指定几个形参，则穿几个实参

// 函数表达式

let mysum = function(x: number, y: number): number {
  return x + y;
};

mysum(1, 2);
//这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 mySum 添加类型，则应该是这样：

let mysum2 = (x: number, y: number): number => {
  return x + y;
};

mysum2(1, 2);

// 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。

// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

// 在 ES6 中，=> 叫做箭头函数，应用十分广泛，可以参考 ES6 中的箭头函数。
let mySum: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y;
};

mySum(1, 2);

/**
 * @desc: 可选参数
 * @desc: varName?:typeName
 * @desc: 上边提到了 形参接收几个参数，实参就只能传几个 不可多传或者少传
 */

const seeName = (firstName: string, lastName?: string) => {
  return lastName ? `${firstName} ${lastName}` : firstName;
};
seeName('sun', 'yonghua'); // sun yonghua
seeName('yonghua'); // yonghua

/** @注意点  可选参数必须出现在必须参数之后 如上 firstName?:string lastName:string 报错*/

/**
 * @desc: 参数默认值
 * @desc: varName:string = 'yonghua‘
 */

const seeName2 = (varName: string = 'yonghua') => varName;

seeName2('yonghua'); // yonghua
seeName2('sunyonghua'); // sunyonghua
/** @注意点 TypeScript 会将添加了默认值的参数识别为可选参数：*/
/** @注意点 此时就不受「可选参数必须接在必需参数后面」的限制了 默认值可给任何参数赋值 不影响后边参数为必传*/

/**
 * @desc: 默认参数 rest ...items：any[] 只能出现在最后
 */

/**
 * @desc: 函数重载
 * @param 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
 * @desc:简单理解为 函数参数 可分开多亿定义 返回值做不同处理
 */

function reverse(x: number): number;
function reverse(x: number | string): number | string {
  return 1;
}
