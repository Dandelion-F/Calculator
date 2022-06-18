let operatorMap = new Map();
let numberMap = new Map();

// 实现按钮顺序（flex 布局中的 order）到按钮名的映射
operatorMap.set(2, 'Exp');
operatorMap.set(3, 'Ans');
operatorMap.set(5, 'x^y');
operatorMap.set(6, 'sin');
operatorMap.set(7, 'cos');
operatorMap.set(8, 'tan');
operatorMap.set(9, 'log');
operatorMap.set(10, 'x!');
operatorMap.set(11, '(');
operatorMap.set(12, ')');
operatorMap.set(13, '%');
operatorMap.set(14, 'ln');
operatorMap.set(15, 'e');
operatorMap.set(19, '+');
operatorMap.set(20, 'π');
operatorMap.set(24, '-');
operatorMap.set(25, '√');
operatorMap.set(29, '×');
operatorMap.set(30, '³√');
operatorMap.set(34, '÷');

numberMap.set(16, '1');
numberMap.set(17, '2');
numberMap.set(18, '3');
numberMap.set(21, '4');
numberMap.set(22, '5');
numberMap.set(23, '6');
numberMap.set(25, '7');
numberMap.set(26, '8');
numberMap.set(27, '9');
numberMap.set(31, '.');
numberMap.set(32, '0');

export { operatorMap, numberMap };


















