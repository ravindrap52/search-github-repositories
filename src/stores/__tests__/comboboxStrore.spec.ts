import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';

import { useComboBoxStore } from '@/stores/comboboxStore';

const item = { label: 'TypeScript', value: 'typescript' };
const nonExistentItem = { label: 'node', value: 'node' };

describe('The user store', () => {
  let comboboxStore: ReturnType<typeof useComboBoxStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    comboboxStore = useComboBoxStore();
  });
  // positive cases
  it('state should have the default values', () => {
    expect(comboboxStore.defaultItems.length).toBe(3);
  });
  it('state should have the selected item as set', () => {
    comboboxStore.addItem(item);
    expect(comboboxStore.selectedItems).toMatchObject([item]);
  });
  it('should remove an item from the selected items', () => {
    comboboxStore.removeItem(item);
    expect(comboboxStore.selectedItems).toMatchObject([]);
  });
  // handling negative scenarios
  it('state should have more then specified default values', () => {
    expect(comboboxStore.defaultItems.length).not.toBe(4);
  });
  it('add item function should not add duplicate items', () => {
    comboboxStore.addItem(item);
    comboboxStore.addItem(item);
    expect(comboboxStore.selectedItems).toEqual([item]);
  });
  it('should handle non existing item', () => {
    comboboxStore.removeItem(nonExistentItem);
    expect(comboboxStore.selectedItems).toEqual([]);
  });
});
