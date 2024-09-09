import { defineStore } from 'pinia';
import { ref } from 'vue';

import { getDefaultDates } from '@/utils/getDefaultDates';

export const useDateStore = defineStore('dateStore', () => {
  const { endDate, startDate } = getDefaultDates();

  // startdate
  const startDateRef = ref<string>(startDate);
  // enddate
  const endDateRef = ref<string>(endDate);

  return {
    startDateRef,
    endDateRef,
    setStartDate(date: string) {
      startDateRef.value = date;
    },
    setEndDate(date: string) {
      endDateRef.value = date;
    },
  };
});
