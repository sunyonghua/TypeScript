//eg:
/**
  function printLabel(labelObj: { label: string }) {
    console.log(labelObj.label);
  }

  let myObj = { size: 10, label: 'Size 10 Object' };
  printLabel(myObj);
*/

// print 接受labelObj 对象参数，起对象参数中label的值类型只能是string；

// 使用接口描述上一操作
interface labelObjValue {
  label: string; // 注意这里是分号
}

function printLabel(labelObj: labelObjValue) {
  console.log(labelObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);

// 看上去更加清晰

// 定义参数类型
interface SquareConfig {
  color?: string;
  width?: number; // 此处虽指定了width参数 但不是必须 这就是width后边为什么要加？
}
// 定义返回值类型
interface returnValue {
  color: string;
  area: number;
}
function createSquare(config: SquareConfig): returnValue {
  let newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: '1' });
