<script setup lang="ts">
import { reactive } from 'vue';

import BaseButton from '@/components/common/BaseButton.vue';
import BaseDatePicker from '@/components/common/BaseDatePicker.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import BaseSelectBox from '@/components/common/BaseSelectBox.vue';
import { useFormStore } from '@/stores/formStore';
import type { FilterForm } from '@/types/interface';
import { dateFormat, selectBoxDefaultItems } from '@/utils/constants';
import { getFormattedDate } from '@/utils/dateUtils';
import { isAlphanumeric, isNumeric } from '@/utils/formValidation';

// get today's date in string format
const date = new Date().toDateString();

const formStore = useFormStore();

// filter form
const filterForm = reactive<FilterForm>({
  searchByDefaultRepositories: [],
  searchByRepository: '',
  searchByStars: 100,
  startDate: getFormattedDate({
    dateParam: date,
    dateFormat,
    options: { months: 6 },
  }),
  endDate: getFormattedDate({
    dateParam: date,
    dateFormat,
  }),
});

function onSubmit() {
  // Update the store with the form values
  formStore.setSelectedItems(filterForm.searchByDefaultRepositories);
  formStore.setInputValueAsText(filterForm.searchByRepository);
  formStore.setInputValueAsNumber(filterForm.searchByStars);
  formStore.setStartDate(filterForm.startDate);
  formStore.setEndDate(filterForm.endDate);
}
</script>

<template>
  <div class="tw-p-4">
    <q-form @submit.prevent="onSubmit">
      <div class="tw-pt-4 tw-pb-4">
        <BaseSelectBox
          :selectBoxDefaultOptions="selectBoxDefaultItems"
          label="Filter By Default Repositories"
          usechips
          multiple
          v-model:model-value="filterForm.searchByDefaultRepositories"
        />
      </div>
      <div class="tw-pb-4">
        <BaseInput
          label="Search By Repository"
          :lazy-rules="true"
          :rules="isAlphanumeric"
          v-model:model-value="filterForm.searchByRepository"
        />
      </div>
      <div class="tw-pb-4">
        <BaseInput
          label="Search By Number of Stars"
          :lazy-rules="true"
          :rules="isNumeric"
          v-model:model-value="filterForm.searchByStars"
        />
      </div>
      <div class="tw-pb-4">
        <BaseDatePicker
          v-model:model-value="filterForm.startDate"
          title="Start Date"
          :inputModelValue="filterForm.startDate"
        />
      </div>
      <div class="tw-pb-4">
        <BaseDatePicker
          v-model:model-value="filterForm.endDate"
          title="End Date"
          :inputModelValue="filterForm.endDate"
        />
      </div>
      <div>
        <BaseButton
          aria-label="Apply Filters"
          type="submit"
          label="Apply Filters"
          size="md"
          textColor="white"
        ></BaseButton>
      </div>
    </q-form>
  </div>
</template>
