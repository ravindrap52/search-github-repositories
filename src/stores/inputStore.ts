import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useInputStore = defineStore('inputStore', () => {
  // Initialize defaultItems
  const inputValue = ref<string>('');

  return {
    inputValue,
    // setting input value
    setInputValue(value: string) {
      inputValue.value = value;
    },
  };
});
