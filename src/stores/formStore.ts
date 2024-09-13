import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { Item } from '@/types/interface';
import { InputValueType } from '@/types/types';

export const useFormStore = defineStore('formStore', () => {
  // selected items
  const selectedtems = ref<Item[]>([]);
  // for input value text
  const inputValueAsText = ref<InputValueType>('');
  // for input value text
  const inputValueAsNumber = ref<InputValueType>(100);
  // startdate
  const startDate = ref<string>('');
  // enddate
  const endDate = ref<string>('');

  return {
    selectedtems,
    inputValueAsText,
    inputValueAsNumber,
    startDate,
    endDate,
    setSelectedItems(items: Item[]): void {
      selectedtems.value = items;
    },
    setInputValueAsText(value: string): void {
      inputValueAsText.value = value;
    },
    setInputValueAsNumber(value: number): void {
      inputValueAsNumber.value = value;
    },
    setStartDate(date: string) {
      startDate.value = date;
    },
    setEndDate(date: string) {
      endDate.value = date;
    },
  };
});
