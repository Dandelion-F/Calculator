// import { assign, createMachine, interpret } from 'xstate';
const { assign, createMachine, interpret } = require('xstate');

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
        Begin: {},
        Result: {
          on: {
            RESET: {
              target: 'Begin',
              actions: assign({ result: 0 }),
            },
            ZERO: {
              target: 'Operand_1.Zero',
              actions: assign({})
            },
            INT: {
              target: 'Operand_1.Int',
            },
            POINT: {
              target: 'Operand_1.Float',
            },
            OPER: {
              target: 'Operator',
            },
            DEL: {
            }
          },
        },
        Error: {
          on: {
            RESET: {
              target: 'Begin',
              actions: assign({ result: 0 }),
            },
          },
        },
      },
      on: {
        ZERO: {
          target: 'Operand_1.Zero',
        },
        INT: {
          target: 'Operand_1.Int',
        },
        POINT: {
          target: 'Operand_1.Float',
        },
        OPER: {
          target: 'Operator',
        },
        DEL: {
          target: 'Start',
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
              actions: assign({ num1: '0', inputStr: (inputStr.slice(-1) === '0') ? inputStr : inputStr + '0' })
            },
            INT: {
              target: 'Int',
              actions: assign({
                num1(_, e) {
                  return '' + e.value
                },
                inputStr(ctx, e) {
                  if (ctx.inputStr.slice(-1) === '0') {
                    return ctx.inputStr.slice(0, -1) + e.value
                  } else {
                    return ctx.inputStr + e.value
                  }
                },
              })
            },
            POINT: {
              target: 'Float',
              actions: assign({
                num1(_, e) {
                  return '0' + e.value
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value
                },
              })
            },
          },
        },
        Int: {
          on: {
            ZERO: {
              target: 'Int',
              actions: assign({
                num1(ctx, e) {
                  return ctx.num1 + e.value
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value
                }
              })
            },
            INT: {
              target: 'Int',
              actions: assign({
                num1(ctx, e) {
                  return ctx.num1 + e.value
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value
                }
              })
            },
            POINT: {
              target: 'Float',
              actions: assign({
                num1(ctx, e) {
                  return ctx.num1 + e.value
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value
                }
              })
            },
          },
        },
        Float: {
          on: {
            ZERO: {
              target: 'Float',
              actions: assign({
                num1(ctx, e) {
                  return ctx.num1 + e.value
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value
                }
              })
            },
            INT: {
              target: 'Float',
              actions: assign({
                num1(ctx, e) {
                  return ctx.num1 + e.value
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value
                }
              })
            },
            POINT: {
              target: 'Float',
              actions: assign({ num1, inputStr })
            }
          }
        },
      },
      on: {
        OPER: {
          target: 'Operator',
        },
        DEL: {
          target: 'Operand_1',
          actions: assign({
            num1(ctx) {
              return ctx.num1.slice(0, -1)
            }
          })
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
                  return e.value
                },
                inputStr(ctx, e) {
                  if (ctx.inputStr.slice(-1) === '+' || ctx.inputStr.slice(-1) === '-' || ctx.inputStr.slice(-1) === '*' || ctx.inputStr.slice(-1) === '/') {
                    return ctx.inputStr.slice(0, -1) + e.value
                  } else {
                    return ctx.inputStr + e.value
                  }
                }
              })
            }
          }
        },
      },
      on: {
        ZERO: {
          target: 'Operand_2.Zero',
        },
        INT: {
          target: 'Operand_2.Int',
        },
        POINT: {
          target: 'Operand_2.Float',
        },
        OPER: {
          target: 'Operator',
        }
      },
    },
    Operand_2: {
      initial: 'Zero',
      states: {
        Zero: {
          on: {
            ZERO: {
              target: 'Zero',
              actions: assign({ num2: 0, inputStr: (inputStr.slice(-1) === '0') ? inputStr : inputStr + '0' })
            },
            INT: {
              target: 'Int',
              actions: assign({
                num2(_, e) {
                  return '' + e.value
                },
                inputStr(ctx, e) {
                  if (ctx.inputStr.slice(-1) === '0') {
                    return ctx.inputStr.slice(0, -1) + e.value
                  } else {
                    return ctx.inputStr + e.value
                  }
                },
              })
            },
            POINT: {
              target: 'Float',
              actions: assign({
                num2(_, e) {
                  return '0' + e.value
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value
                },
              })
            },
          },
        },
        Int: {
          on: {
            ZERO: {
              target: 'Int',
              actions: assign({
                num2(ctx, e) {
                  return ctx.num2 + e.value
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value
                },
              })
            },
            INT: {
              target: 'Int',
              actions: assign({
                num2(ctx, e) {
                  return ctx.num2 + e.value
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value
                },
              })
            },
            POINT: {
              target: 'Float',
              actions: assign({
                num2(ctx, e) {
                  return ctx.num2 + e.value
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value
                },
              })
            },
          },
        },
        Float: {
          on: {
            ZERO: {
              target: 'Float',
              actions: assign({
                num2(ctx, e) {
                  return ctx.num2 + e.value
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value
                },
              })
            },
            INT: {
              target: 'Float',
              actions: assign({
                num2(ctx, e) {
                  return ctx.num2 + e.value
                },
                inputStr(ctx, e) {
                  return ctx.inputStr + e.value
                },
              })
            },
            POINT: {
              target: 'Float',
              actions: assign({ num2, inputStr })
            }
          }
        },
      },
      on: {
        DEL: {
          target: 'Operand_2',
          actions: assign({
            num2(ctx, _) {
              return ctx.num2.slice(0, -1);
            },
            inputStr(ctx, _) {
              return ctx.inputStr.slice(0, -1)
            },
          })
        },
        EQUAL: {
          target: 'Start.Result',
          actions: assign({
            result(ctx, _) {
              switch (ctx.op) {
                case '+':
                  return Number(ctx.num1) + Number(ctx.num2);
                case '-':
                  return Number(ctx.num1) - Number(ctx.num2);
                case '*':
                  return Number(ctx.num1) * Number(ctx.num2);
                case '/':
                  return Number(ctx.num1) / Number(ctx.num2);
              }
            },
            inputStr(ctx, e) {
              return ctx.inputStr + e.value
            },
          })
        },
        OPER: {
          target: 'Operator',
        },
      },
    },
  },
});

// const useCounterMachine = interpret(counterMachine)
// export default useCounterMachine;

const cm = interpret(counterMachine).onTransition(state => {
  console.log('state change', state.value, 'context', state.context)
})

cm.start()

cm.send({ type: 'INT', value: '1' })
cm.send({ type: 'INT', value: '1' })
cm.send({ type: 'OPER', value: '+' })
cm.send({ type: 'INT', value: '2' })
cm.send({ type: 'EQUAL', value: '=' })
