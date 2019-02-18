interface person {
  name: string;
  age: number;
}

const sunyonghua: person = {
  name: 'sunyonghua',
  age: 17
};

/**
  const sunyonghua: person = {
    name: 'sunyonghua',
    age: 17,
    gender:'男'
  };
  person 类型中不存在gender 不可指定
  也不可缺少name 与 age 属性 他们都是必写属性
 */

// 可选属性
interface dog {
  name: string;
  age?: number;
}

const ww: dog = {
  name: 'ww'
};

const dd: dog = {
  name: 'dd',
  age: 3
};
// 此处写或不写age不报错，因为age是可选属性

// 任意属性
interface cat {
  name: string;
  age?: number;
  [p: string]: any;
}

const miao: cat = {
  name: 'miao~',
  age: 4,
  gender: '母'
};
// 注意点 任意属性 一旦确定类型 那么确定属性和可选属性都必须是它的子属性：

// 只读属性
interface user {
  readonly id: number;
  name: string;
  age?: number;
}

let yonghua: user = {
  id: 1,
  name: 'yonghua'
};
yonghua.name = 'yonghua~'; // 编译成功
// yonghua.id = 2; // 编译失败 此属性为只读属性
// 注意点，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
