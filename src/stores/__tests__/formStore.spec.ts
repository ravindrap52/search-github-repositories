import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';

import { useFormStore } from '@/stores/formStore';
import { selectBoxDefaultItems } from '@/utils/constants';

describe('The Date Store', () => {
  let formStore: ReturnType<typeof useFormStore>;
  beforeEach(() => {
    setActivePinia(createPinia());
    formStore = useFormStore();
  });
  it('should set the selectbox items', () => {
    formStore.setSelectedItems(selectBoxDefaultItems);
    expect(formStore.selectedtems).toEqual(selectBoxDefaultItems);
  });
  it('should set input value as text', () => {
    formStore.setInputValueAsText('foo');
    expect(formStore.inputValueAsText).toEqual('foo');
  });
  it('should set input value as number', () => {
    formStore.setInputValueAsNumber(1);
    expect(formStore.inputValueAsNumber).toEqual(1);
  });
  it('should set the start date', () => {
    formStore.setStartDate('2024-09-14');
    expect(formStore.startDate).toEqual('2024-09-14');
  });
  it('should set the end date', () => {
    formStore.setEndDate('2024-03-14');
    expect(formStore.endDate).toEqual('2024-03-14');
  });
});
