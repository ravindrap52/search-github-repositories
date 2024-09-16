<script setup lang="ts">
import type { ButtonProps } from '@/types/interface';

// Define component props
withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  size: 'md',
  flat: false,
  outline: false,
  rounded: false,
  round: false,
  square: false,
  color: 'primary',
  textColor: '',
  padding: 'md',
  disable: false,
});

// emiting event
const emit = defineEmits<{
  (event: 'click', $event: Event): void;
}>();

// Handle click event
const handleClick = (event: Event) => {
  emit('click', event);
};
</script>
<template>
  <q-btn
    :type="type"
    :size="size"
    :flat="flat"
    :outline="outline"
    :rounded="rounded"
    :round="round"
    :square="square"
    :color="color"
    :textColor="textColor"
    :label="label"
    :icon="icon"
    :disable="disable"
    :padding="padding"
    @click="handleClick"
    v-bind="$attrs"
  >
  </q-btn>
</template>
