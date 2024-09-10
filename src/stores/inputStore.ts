import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useInputStore = defineStore('inputStore', () => {
  // Initialize defaultItems
  const inputValue = ref<string | number | null>('');

  return {
    inputValue,
    // setting input value
    setInputValue(value: string | number | null) {
      inputValue.value = value;
    },
  };
});
