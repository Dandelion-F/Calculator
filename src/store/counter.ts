import { Ref, ref } from 'vue';
import { defineStore } from 'pinia';

const useCounterStore = defineStore('counter', function () {
  let result: Ref<number> = ref(0);
  let inputStr: Ref<string> = ref('');

  const addNum = (number: string) => {
    // 暂不考虑输入有误的情况
    inputStr.value += number;
    console.log(inputStr.value); 
  };

  const addOper = (oper: string) => {
    // 暂不考虑输入有误的情况
    inputStr.value += oper;
    console.log(inputStr.value); 
  };

  const getResult = () => {
    result.value = eval(inputStr.value);
  };

  return { result, inputStr, addNum, addOper, getResult };
});

export default useCounterStore;
