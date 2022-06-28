import { assign, createMachine, interpret } from 'xstate';

// 状态图链接：https://stately.ai/registry/editor/share/311f1dce-6fee-4619-88b8-e6d5f2542d39
const counterMachine = createMachine({
  id: 'Calculator',
  initial: 'Start',
  context: {
    result: 0,
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
      initial: 'Zero',
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
      initial: 'Zero',
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
        },
        OPER: {
          target: 'Start',
        },
      },
    },
  },
});

const useCounterMachine = interpret(counterMachine)
export default useCounterMachine;
