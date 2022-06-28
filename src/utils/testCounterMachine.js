const { assign, createMachine, interpret } = require('xstate');

// $ node testCounterMachine.js

// 状态图链接：https://stately.ai/registry/editor/share/311f1dce-6fee-4619-88b8-e6d5f2542d39
const counterMachine = createMachine({
  id: 'Calculator',
  initial: 'Operand_1',
  context: {
    result: 0,
    num1: '',
    op: '',
    num2: '',
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
          target: '#Calculator.Operand_1.Zero',
        },
        NUMBER: {
          target: '#Calculator.Operand_1.Int',
        },
        POINT: {
          target: '#Calculator.Operand_1.Float',
        },
        OPER: {
          target: 'Operator',
        },
      },
    },
    Operand_1: {
      initial: 'Int',
      states: {
        Zero: {
          on: {
            NUMBER: {
              target: 'Int',
            },
            POINT: {
              target: 'Float',
            },
          },
        },
        Int: {
          on: {
            Int: {
              actions: assign({
                num1(ctx, e){
                  return ctx.num1 + e.value
                }
              })
            },

            POINT: {
              target: 'Float',
            },
          },
        },
        Float: {},
      },
      on: {
        OPER: {
          target: 'Operator',
          actions: assign({
            op(_, e) {
              return e.value
            }
          })
        },
        DEL: {
          target: 'Start',
        },
      },
    },
    Operator: {
      initial: 'BinaryOper',
      states: {
        BinaryOper: {},
      },
      on: {
        Int: {
          target: 'Operand_2',
          actions: assign({
            num2(_, e) {
              return e.value
            }
          })
        },
        ZERO: {
          target: '#Calculator.Operand_2.Zero',
        },
        NUMBER: {
          target: '#Calculator.Operand_2.Int',
        },
        POINT: {
          target: '#Calculator.Operand_2.Float',
        },
      },
    },
    Operand_2: {
      initial: 'Int',
      states: {
        Zero: {
          on: {
            NUMBER: {
              target: 'Int',
            },
            POINT: {
              target: 'Float',
            },
          },
        },
        Int: {
          on: {
            Int: {
              actions: assign({
                num2(ctx, e){
                  return ctx.num2 + e.value
                }
              })
            },
            POINT: {
              target: 'Float',
            },
          },
        },
        Float: {},
      },
      on: {
        DEL: {
          target: 'Operator',
        },
        EQUAL: {
          target: 'Start',
          actions: assign({
            result(ctx, e) {
              switch (ctx.op) {
                case '+':
                  return Number(ctx.num1) + Number(ctx.num2)
              }
            }
          })
        },
        OPER: {
          target: 'Start',
        },
      },
    },
  },
});

const cm = interpret(counterMachine).onTransition(state => {
  console.log('state change', state.value, 'context', state.context)
})

cm.start()

cm.send({type: 'Int', value: '1'})
cm.send({type: 'Int', value: '1'})
cm.send({type: 'OPER', value: '+'})
cm.send({type: 'Int', value: '2'})
cm.send({type: 'EQUAL', value: '='})
