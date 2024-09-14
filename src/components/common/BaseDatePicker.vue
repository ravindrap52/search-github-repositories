<script setup lang="ts">
import { ref } from 'vue';

import { DateProps } from '@/types/interface';

// Define component props
const props = withDefaults(defineProps<DateProps>(), {
  inputModelValue: '',
  title: 'Date',
  mask: '####/##/##',
});

// define emit
const emit = defineEmits<{ 'update:modelValue': [value: string] }>();

// model value for input items
const date = ref<string>(props.inputModelValue);

function setNewDate(value: string) {
  emit('update:modelValue', value);
}

// Define the function to disable future dates
const dateOptions = (dateStr: string) => {
  const dateToCheck = new Date(dateStr);
  //for comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // restricting future dates
  return dateToCheck <= today;
};
</script>

<template>
  <div>
    <q-input filled v-model="date" :mask="props.mask">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date
              v-model="date"
              :title="title"
              @update:model-value="setNewDate"
              :options="dateOptions"
            >
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>
