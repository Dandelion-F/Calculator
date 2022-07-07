// 各类按钮名称列表
let numberList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0'];
let simpleBinaryOperList = ['+', '-', '×', '÷'];
let bracketList = ['(', ')'];
let othersList = [
  'Ans',
  'x^y',
  'sin',
  'cos',
  'tan',
  'log',
  'x!',
  '%',
  'ln',
  'e',
  'π',
  '√',
  '³√',
];

// 数字以及小数点到中文的映射
let numberMap = new Map();
numberMap.set('0', '零');
numberMap.set('1', '一');
numberMap.set('2', '二');
numberMap.set('3', '三');
numberMap.set('4', '四');
numberMap.set('5', '五');
numberMap.set('6', '六');
numberMap.set('7', '七');
numberMap.set('8', '八');
numberMap.set('9', '九');
numberMap.set('.', '小数点');

// 运算符到中文的映射
let operatorMap = new Map();
operatorMap.set('+', '加号');
operatorMap.set('-', '减号');
operatorMap.set('×', '乘号');
operatorMap.set('÷', '除号');
operatorMap.set('(', '左括号');
operatorMap.set(')', '右括号');
operatorMap.set('Ans', '最新的运算结果');
operatorMap.set('x^y', '乘方');
operatorMap.set('sin', '正弦');
operatorMap.set('cos', '余弦');
operatorMap.set('tan', '正切');
operatorMap.set('log', '以十为底的对数');
operatorMap.set('x!', '阶乘');
operatorMap.set('%', '百分数');
operatorMap.set('ln', '以e为底的对数');
operatorMap.set('e', 'e');
operatorMap.set('π', 'π');
operatorMap.set('√', '平方根');
operatorMap.set('³√', '立方根');

export {
  numberList,
  simpleBinaryOperList,
  bracketList,
  othersList,
  numberMap,
  operatorMap,
};
