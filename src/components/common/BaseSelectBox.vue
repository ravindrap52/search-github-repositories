<script setup lang="ts">
import { ref } from 'vue';

import { Item, SelectBoxProps } from '@/types/interface';

// Define component props
withDefaults(defineProps<SelectBoxProps>(), {
  selectBoxDefaultOptions: () => [],
  outline: true,
  rounded: false,
  label: 'Select',
});

// define emit
const emit = defineEmits<{ 'update:modelValue': [value: Item[]] }>();

// model value for selected items
const internalModelValue = ref<Item[]>([]);

// updating the selected items
function updateSelectedItems(value: Item[]) {
  const validItems = value.filter(Boolean) as Item[];
  internalModelValue.value = validItems;
  emit('update:modelValue', validItems);
}
</script>

<template>
  <q-select
    :outlined="outline"
    :rounded="rounded"
    v-model="internalModelValue"
    :options="selectBoxDefaultOptions"
    :label="label"
    @update:model-value="updateSelectedItems"
    v-bind="$attrs"
    aria-labelledby="select-label"
    aria-describedby="select-description"
  >
    <template v-slot:selected-item="scope">
      <q-chip
        removable
        dense
        @remove="scope.removeAtIndex(scope.index)"
        color="white"
        text-color="secondary"
        class="q-ma-none"
        v-if="scope.opt"
      >
        {{ scope.opt.label }}
      </q-chip>
    </template>
  </q-select>
</template>
