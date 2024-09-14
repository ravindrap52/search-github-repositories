import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { Item } from '@/types/interface';
import { selectBoxDefaultItems } from '@/utils/constants';
import { dateFormat } from '@/utils/constants';
import { getFormattedDate } from '@/utils/dateUtils';

// get today's date in string format
const date = new Date().toDateString();

export const useFormStore = defineStore('formStore', () => {
  // default items
  const defaultSelectBoxItems = selectBoxDefaultItems;
  // selected items
  const selectedtems = ref<Item[]>(defaultSelectBoxItems);
  // for input value text
  const inputValueAsText = ref<string>('');
  // for input value text
  const inputValueAsNumber = ref<number>(100);
  // startdate
  const startDate = ref<string>(
    getFormattedDate({
      dateParam: date,
      dateFormat,
      options: { months: 6 },
    }),
  );
  // enddate
  const endDate = ref<string>(
    getFormattedDate({
      dateParam: date,
      dateFormat,
    }),
  );

  return {
    defaultSelectBoxItems,
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
