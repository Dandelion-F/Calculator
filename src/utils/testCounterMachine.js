// $ node testCounterMachine.js
const { assign, createMachine, interpret } = require('xstate');

// 状态图链接：https://stately.ai/registry/editor/share/311f1dce-6fee-4619-88b8-e6d5f2542d39
const counterMachine = createMachine({
  id: 'Calculator',
  initial: 'Start',
  context: {
    result: 0,
    num1: '',
    op: '',
    num2: '',
    inputStr: '',
  },
  states: {
    Start: {
      initial: 'Begin',
      states: {
        Begin: {
          on: {
            ZERO: {
              target: '#Calculator.Operand_1.Zero',
              actions: assign({
                num1: '0',
                inputStr: '0',
              }),
            },
            INT: {
              target: '#Calculator.Operand_1.Int',
              actions: assign({
                num1(_, e) {
                  return e.value;
                },
                inputStr(_, e) {
                  return e.value;
                },
              }),
            },
            POINT: {
              target: '#Calculator.Operand_1.Float',
              actions: assign({
                num1: '0.',
                inputStr: '0.',
              }),
            },
            OPER: {
              target: '#Calculator.Operator',
              num1: '0',
              op(_, e) {
                return e.value;
              },
              inputStr(_, e) {
                return '0 ' + e.value;
              },
            },
            DEL: {
              target: '#Calculator.Start.Begin',
              actions: assign({
                result: 0,
                num1: '',
                op: '',
                num2: '',
                inputStr: '',
              }),
            },
          },
        },
        Result: {
          on: {
            RESET: {
              target: '#Calculator.Start.Begin',
              actions: assign({
                result: 0,
                num1: '',
                op: '',
                num2: '',
                inputStr: '',
              }),
            },
            DEL: {
              target: '#Calculator.Start.Begin',
              actions: assign({
                result: 0,
                num1: '',
                op: '',
                num2: '',
                inputStr: '',
              }),
            },
            ZERO: {
              target: '#Calculator.Operand_1.Zero',
              actions: assign({
                num1: '0',
                op: '',
                num2: '',
                inputStr: '0',
              }),
            },
            INT: {
              target: '#Calculator.Operand_1.Int',
              actions: assign({
                num1(_, e) {
                  return e.value;
                },
                op: '',
                num2: '',
                inputStr(_, e) {
                  return e.value;
                },
              }),
            },
            POINT: {
              target: '#Calculator.Operand_1.Float',
              actions: assign({
                num1(ctx, e) {
                  return ctx.result + e.value;
                },
                op: '',
                num2: '',
                inputStr(ctx, e) {
                  return ctx.result + e.value;
                },
              }),
            },
            OPER: {
              target: '#Calculator.Operator',
              actions: assign({
                num1(ctx, _) {
                  return ctx.result;
                },
                op(_, e) {
                  return e.value;
                },
                num2: '',
                inputStr(ctx, e) {
                  return ctx.result + ' ' + e.value;
                },
              }),
            },
          },
        },
        Error: {
          on: {
            RESET: {
              target: '#Calculator.Start.Begin',
              actions: assign({
                result: 0,
                num1: '',
                op: '',
                num2: '',
                inputStr: '',
              }),
            },
          },
        },
      },
    },
    Operand_1: {
      initial: 'Zero',
      states: {
        Zero: {
          on: {
            ZERO: {
              target: 'Zero',
              actions: assign({
                num1: '0',
                inputStr(ctx, _) {
                  return (ctx.inputStr.slice(-1) === '0') ? ctx.inputStr : ctx.inputStr + '0';
                },
              }),
            },
            INT: {
              target: 'Int',
              actions: assign({
                num1(_, e) {
                  return '' + e.value;
                },
                inputStr(ctx, e) {
                  if (ctx.inputStr.slice(-1) === '0') {
                    return ctx.inputStr.slice(0, -1) + e.value;
                  } else {
                    return ctx.inputStr + e.value;
                  }
                },
              }),
            },
            POINT: {
              target: 'Float',
              actions: assign({
                num1(_, e) {
                  return '0' + e.value;
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
          },
        },
        Int: {
          on: {
            ZERO: {
              target: 'Int',
              actions: assign({
                num1(ctx, e) {
                  return ctx.num1 + e.value;
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
            INT: {
              target: 'Int',
              actions: assign({
                num1(ctx, e) {
                  return ctx.num1 + e.value;
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
            POINT: {
              target: 'Float',
              actions: assign({
                num1(ctx, e) {
                  return ctx.num1 + e.value;
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
          },
        },
        Float: {
          on: {
            ZERO: {
              target: 'Float',
              actions: assign({
                num1(ctx, e) {
                  return ctx.num1 + e.value;
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
            INT: {
              target: 'Float',
              actions: assign({
                num1(ctx, e) {
                  return ctx.num1 + e.value;
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
            POINT: {
              target: 'Float',
              actions: assign({
                num1(ctx, _) {
                  return ctx.num1;
                },
                inputStr(ctx, _) {
                  return ctx.inputStr;
                },
              }),
            },
          },
        },
      },
      on: {
        OPER: {
          target: '#Calculator.Operator',
          actions: assign({
            op(_, e) {
              return e.value;
            },
            inputStr(ctx, e) {
              return ctx.inputStr + ' ' + e.value;
            },
          }),
        },
        DEL: {
          target: '#Calculator.Operand_1',
          actions: assign({
            num1(ctx) {
              return ctx.num1.slice(0, -1);
            },
            inputStr(ctx, _) {
              return ctx.inputStr.slice(0, -1);
            },
          }),
        },
      },
    },
    Operator: {
      initial: 'BinaryOper',
      states: {
        BinaryOper: {
          on: {
            OPER: {
              target: 'BinaryOper',
              actions: assign({
                op(_, e) {
                  return e.value;
                },
                inputStr(ctx, e) {
                  if (ctx.inputStr.slice(-1) === '+' || ctx.inputStr.slice(-1) === '-' || ctx.inputStr.slice(-1) === '*' || ctx.inputStr.slice(-1) === '/') {
                    return ctx.inputStr.slice(0, -1) + e.value;
                  } else {
                    return ctx.inputStr + e.value;
                  }
                },
              }),
            },
          },
        },
      },
      on: {
        ZERO: {
          target: '#Calculator.Operand_2.Zero',
          actions: assign({
            num2: '0',
            inputStr(ctx, _) {
              return ctx.inputStr + ' 0';
            },
          }),
        },
        INT: {
          target: '#Calculator.Operand_2.Int',
          actions: assign({
            num2(_, e) {
              return e.value;
            },
            inputStr(ctx, e) {
              return ctx.inputStr + ' ' + e.value;
            },
          }),
        },
        POINT: {
          target: '#Calculator.Operand_2.Float',
          actions: assign({
            num2: '0.',
            inputStr(ctx, _) {
              return ctx.inputStr + ' 0.';
            },
          }),
        },
        OPER: {
          target: '#Calculator.Operator',
          actions: assign({
            op(_, e) {
              return e.value;
            },
            inputStr(ctx, e) {
              return ctx.inputStr.slice(0, -1) + ' ' + e.value;
            },
          }),
        },
      },
    },
    Operand_2: {
      initial: 'Zero',
      states: {
        Zero: {
          on: {
            ZERO: {
              target: 'Zero',
              actions: assign({
                num2: 0,
                inputStr(ctx, _) {
                  return (ctx.inputStr.slice(-1) === '0') ? ctx.inputStr : ctx.inputStr + '0';
                },
              }),
            },
            INT: {
              target: 'Int',
              actions: assign({
                num2(_, e) {
                  return '' + e.value;
                },
                inputStr(ctx, e) {
                  if (ctx.inputStr.slice(-1) === '0') {
                    return ctx.inputStr.slice(0, -1) + e.value;
                  } else {
                    return ctx.inputStr + e.value;
                  }
                },
              }),
            },
            POINT: {
              target: 'Float',
              actions: assign({
                num2(_, e) {
                  return '0' + e.value;
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
          },
        },
        Int: {
          on: {
            ZERO: {
              target: 'Int',
              actions: assign({
                num2(ctx, e) {
                  return ctx.num2 + e.value;
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
            INT: {
              target: 'Int',
              actions: assign({
                num2(ctx, e) {
                  return ctx.num2 + e.value;
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
            POINT: {
              target: 'Float',
              actions: assign({
                num2(ctx, e) {
                  return ctx.num2 + e.value;
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
          },
        },
        Float: {
          on: {
            ZERO: {
              target: 'Float',
              actions: assign({
                num2(ctx, e) {
                  return ctx.num2 + e.value;
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
            INT: {
              target: 'Float',
              actions: assign({
                num2(ctx, e) {
                  return ctx.num2 + e.value;
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
            POINT: {
              target: 'Float',
              actions: assign({
                num2(ctx, _) {
                  return ctx.num2;
                },
                inputStr(ctx, _) {
                  return ctx.inputStr;
                }
              }),
            },
          },
        },
      },
      on: {
        DEL: {
          target: '#Calculator.Operand_2',
          actions: assign({
            num2(ctx, _) {
              return ctx.num2.slice(0, -1);
            },
            inputStr(ctx, _) {
              return ctx.inputStr.slice(0, -1);
            },
          }),
        },
        EQUAL: {
          target: '#Calculator.Start.Result',
          actions: assign({
            result(ctx, _) {
              // switch (ctx.op) {
              //   case '+':
              //     return Number(ctx.num1) + Number(ctx.num2);
              //   case '-':
              //     return Number(ctx.num1) - Number(ctx.num2);
              //   case '*':
              //     return Number(ctx.num1) * Number(ctx.num2);
              //   case '/':
              //     return Number(ctx.num1) / Number(ctx.num2);
              // }
              return eval(ctx.inputStr.replace(/×/, "*").replace(/÷/, "/"));
            },
            inputStr(ctx, e) {
              return ctx.inputStr + ' ' + e.value;
            },
          }),
        },
        OPER: {
          target: '#Calculator.Operator',
          actions: assign({
            op(_, e) {
              return e.value;
            },
            num1(ctx, _) {
              return ctx.result + '';
            },
            inputStr(ctx, e) {
              return ctx.inputStr + ' ' + e.value;
            },
          }),
        },
      },
    },
  },
});

const cm = interpret(counterMachine).onTransition(state => {
  console.log('state change:', state.value, 'context:', state.context)
});

cm.start();

cm.send({ type: 'INT', value: '1' });
cm.send({ type: 'INT', value: '1' });
cm.send({ type: 'OPER', value: '+' });
cm.send({ type: 'INT', value: '2' });
cm.send({ type: 'OPER', value: '×' });
cm.send({ type: 'INT', value: '2' });
cm.send({ type: 'EQUAL', value: '=' });