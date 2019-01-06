// 布尔值

const isBoolean: boolean = true;

// 数值
const n1: number = 1;
const n2: number = 1.01;
// 其外还支持 八进制 与十六进制

// 字符串
const str1: string = '1';
const str2: string = '2 is ts';

// 数组
// 指定数组类型
const arr: Array<object> = [{ a: 1 }];
const arr1: Array<number> = [1];
const arr2: Array<string> = ['1'];
const arr3: number[] = [1, 2, 3];
const arr4: string[] = ['1', '2', '3'];
const arr5: boolean[] = [true, false];

// 任意类型的数组
const arr6: Array<any> = [1, 2, '3'];
const arr7: any[] = [1, 2, '3'];

// 元组 Tuple 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
const Tuple: [string, number] = ['1', 2];


// 枚举 enum
