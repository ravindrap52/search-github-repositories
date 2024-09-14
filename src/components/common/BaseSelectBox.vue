<script setup lang="ts">
import { ref } from 'vue';

import { Item, SelectBoxProps } from '@/types/interface';

// Define component props
const props = withDefaults(defineProps<SelectBoxProps>(), {
  selectBoxDefaultOptions: () => [],
  defaultSelectedOption: () => [],
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
  internalModelValue.value = value;
  emit('update:modelValue', value);
}
</script>

<template>
  <q-select
    :outlined="props.outline"
    :rounded="props.rounded"
    v-model="internalModelValue"
    :options="props.selectBoxDefaultOptions"
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
        @remove="scope.removeAtIndex(scope.index)"
        color="white"
        text-color="secondary"
        class="q-ma-none"
      >
        {{ scope.opt.label }}
      </q-chip>
    </template>
  </q-select>
</template>
