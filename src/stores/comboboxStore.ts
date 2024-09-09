import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { Item } from '@/types/interface';

export const useComboBoxStore = defineStore('comboBoxStore', () => {
  // Initialize defaultItems
  const defaultItems = ref<Item[]>([
    { title: 'JavaScript', value: 'javascript' },
    { title: 'TypeScript', value: 'typescript' },
    { title: 'Vue.js', value: 'vue' },
  ]);

  // selected items
  const selectedItems = ref<Item[]>([]);

  return {
    defaultItems,
    selectedItems,
    // Function to add an item to the selectedItems list
    addItem(item: Item): void {
      if (!selectedItems.value.some((selected) => selected.value === item.value)) {
        selectedItems.value.push(item);
      }
    },
    // Function to remove an item from the selectedItems list
    removeItem(item: Item): void {
      selectedItems.value = selectedItems.value.filter((selected) => selected !== item);
    },
  };
});
