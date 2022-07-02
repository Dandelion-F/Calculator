import { ref } from 'vue';
import { assign, createMachine, interpret } from 'xstate';

const counterMachine = createMachine({
  id: 'Calculator',
  initial: 'Start',
  context: {
    result: 0,
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
                inputStr: '0',
              }),
            },
            INT: {
              target: '#Calculator.Operand_1.Int',
              actions: assign({
                inputStr(_, e) {
                  return e.value;
                },
              }),
            },
            POINT: {
              target: '#Calculator.Operand_1.Float',
              actions: assign({
                inputStr: '0.',
              }),
            },
            OPER: {
              target: '#Calculator.Operator',
              inputStr(_, e) {
                return '0 ' + e.value;
              },
            },
            DEL: {
              target: '#Calculator.Start.Begin',
              actions: assign({
                result: 0,
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
                inputStr: '',
              }),
            },
            DEL: {
              target: '#Calculator.Start.Begin',
              actions: assign({
                result: 0,
                inputStr: '',
              }),
            },
            ZERO: {
              target: '#Calculator.Operand_1.Zero',
              actions: assign({
                inputStr: '0',
              }),
            },
            INT: {
              target: '#Calculator.Operand_1.Int',
              actions: assign({
                inputStr(_, e) {
                  return e.value;
                },
              }),
            },
            POINT: {
              target: '#Calculator.Operand_1.Float',
              actions: assign({
                inputStr(ctx, e) {
                  return ctx.result + e.value;
                },
              }),
            },
            OPER: {
              target: '#Calculator.Operator',
              actions: assign({
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
                inputStr(ctx, _) {
                  return (ctx.inputStr.slice(-1) === '0') ? ctx.inputStr : ctx.inputStr + '0';
                },
              }),
            },
            INT: {
              target: 'Int',
              actions: assign({
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
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
            INT: {
              target: 'Int',
              actions: assign({
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
            POINT: {
              target: 'Float',
              actions: assign({
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
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
            INT: {
              target: 'Float',
              actions: assign({
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
            POINT: {
              target: 'Float',
              actions: assign({
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
            inputStr(ctx, e) {
              return ctx.inputStr + ' ' + e.value;
            },
          }),
        },
        DEL: {
          target: '#Calculator.Operand_1',
          actions: assign({
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
            inputStr(ctx, _) {
              return ctx.inputStr + ' 0';
            },
          }),
        },
        INT: {
          target: '#Calculator.Operand_2.Int',
          actions: assign({
            inputStr(ctx, e) {
              return ctx.inputStr + ' ' + e.value;
            },
          }),
        },
        POINT: {
          target: '#Calculator.Operand_2.Float',
          actions: assign({
            inputStr(ctx, _) {
              return ctx.inputStr + ' 0.';
            },
          }),
        },
        OPER: {
          target: '#Calculator.Operator',
          actions: assign({
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
                inputStr(ctx, _) {
                  return (ctx.inputStr.slice(-1) === '0') ? ctx.inputStr : ctx.inputStr + '0';
                },
              }),
            },
            INT: {
              target: 'Int',
              actions: assign({
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
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
            INT: {
              target: 'Int',
              actions: assign({
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
            POINT: {
              target: 'Float',
              actions: assign({
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
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
            INT: {
              target: 'Float',
              actions: assign({
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value;
                },
              }),
            },
            POINT: {
              target: 'Float',
              actions: assign({
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
            inputStr(ctx, _) {
              return ctx.inputStr.slice(0, -1);
            },
          }),
        },
        EQUAL: {
          target: '#Calculator.Start.Result',
          actions: assign({
            result(ctx, _) {
              return eval(ctx.inputStr.replace(/×/g, "*").replace(/÷/g, "/"));
            },
            inputStr(ctx, e) {
              return ctx.inputStr.replace(/×/g, "*").replace(/÷/g, "/") + ' ' + e.value;
            },
          }),
        },
        OPER: {
          target: '#Calculator.Operator',
          actions: assign({
            inputStr(ctx, e) {
              return ctx.inputStr + ' ' + e.value;
            },
          }),
        },
      },
    },
  },
});

let result = ref(0), inputStr = ref("");
const useCounterMachine = interpret(counterMachine).onTransition(state => {
  result.value = state.context.result;
  inputStr.value = state.context.inputStr;
  console.log('state change:', state.value, 'context:', state.context);
}).start();

export { useCounterMachine, result, inputStr };