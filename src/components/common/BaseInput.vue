<script setup lang="ts">
import { ref } from 'vue';

import type { InputProps } from '@/types/interface';

// Define component props
withDefaults(defineProps<InputProps>(), {
  label: '',
  placeholder: 'Enter text',
  rules: () => [],
  type: 'text',
  lazyRules: false,
  outline: true,
});

// define emit
const emit = defineEmits<{ 'update:modelValue': [value: string | number | null] }>();


// model value for input items
const internalModelValue = ref<string | number | null>('');

// handling the input value
function updateInputValue(value: string | number | null) {
  internalModelValue.value = value;
  emit('update:modelValue', value)
}
</script>

<template>
  <q-input
    :label="label"
    :placeholder="placeholder"
    v-model="internalModelValue"
    :type="type"
    :rules="rules"
    :lazy-rules="lazyRules"
    validate-on="blur"
    v-bind="$attrs"
    variant="outlined"
    @update:model-value="updateInputValue"
  />
</template>
