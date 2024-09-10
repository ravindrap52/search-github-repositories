<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

import { useComboBoxStore } from '@/stores/comboboxStore';
import { Item, SelectBoxProps } from '@/types/interface';

const comboboxStore = useComboBoxStore();

const { defaultItems, selectedItems } = storeToRefs(comboboxStore);

// model value for selected items
const internalModelValue = ref<Item[]>([]);

const props = withDefaults(defineProps<SelectBoxProps>(), {
  selectBoxOptions: () => [],
  selectBoxModelValue: undefined,
  outline: true,
  rounded: false,
  label: 'Select',
});
// set default options
const selectOptions = props.selectBoxOptions.length ? props.selectBoxOptions : defaultItems.value;

function updateSelectedItems() {
  const selectedSet = new Set(internalModelValue.value.map((item) => item.value));
  const storeSet = new Set(selectedItems.value.map((item) => item.value));

  // Items to add and remove
  const itemsToAdd = internalModelValue.value.filter((item) => !storeSet.has(item.value));
  const itemsToRemove = selectedItems.value.filter((item) => !selectedSet.has(item.value));

  // Update store
  itemsToAdd.forEach((item) => comboboxStore.addItem(item));
  itemsToRemove.forEach((item) => comboboxStore.removeItem(item));
}
function removeItem(item: string) {
  internalModelValue.value = internalModelValue.value.filter((sl) => sl.value !== item);
  updateSelectedItems();
}
</script>

<template>
  <q-select
    :outlined="props.outline"
    :rounded="props.rounded"
    v-model="internalModelValue"
    :options="selectOptions"
    :label="props.label"
    @update:model-value="updateSelectedItems"
    v-bind="$attrs"
    aria-labelledby="select-label"
    aria-describedby="select-description"
  >
    <template v-slot:selected-item="scope">
      <q-chip
        removable
        dense
        @remove="removeItem(scope.opt.value)"
        color="white"
        text-color="secondary"
        class="q-ma-none"
      >
        {{ scope.opt.label }}
      </q-chip>
    </template>
  </q-select>
</template>
