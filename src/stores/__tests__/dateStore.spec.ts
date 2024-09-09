import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';

import { useDateStore } from '@/stores/dateStore';
import { getDefaultDates } from '@/utils/getDefaultDates';

const { startDate, endDate } = getDefaultDates();

describe('The Date Store', () => {
  let dateStore: ReturnType<typeof useDateStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    dateStore = useDateStore();
  });
  it('should set the start date to year 2000', () => {
    dateStore.setStartDate(startDate);
    expect(dateStore.startDateRef).toBe(startDate);
  });
  it('should set the end date to yesterday', () => {
    dateStore.setEndDate(endDate);
    expect(dateStore.endDateRef).toBe(endDate);
  });
});
