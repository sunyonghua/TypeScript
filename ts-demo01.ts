// 定义数值
const a: number = 10000;
const floatA: number = 100.1;

// 定义string
const b: string = 'is string';
// const ObjB:string = new String('nihao') error 因为new String 是包装类生成的其实是个Object
// const ObjB:Object = new String('1212')    success 编译通过

// 定义布尔值
const c: boolean = true;
// const BoolC:boolean = new Boolean(1)  道理同 new String() ↑

// 定义undefined
const u: undefined = undefined;

// 定义null
const n: null = null;

// any 任何类型
let d: any = 1;
d = '1';

// 变量未声明未赋值那么也是any类型
let anyD;
anyD = '1';
anyD = 1;
