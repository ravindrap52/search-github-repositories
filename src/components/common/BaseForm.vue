<script setup lang="ts">
import { reactive } from 'vue';

import BaseButton from '@/components/common/BaseButton.vue';
import BaseDatePicker from '@/components/common/BaseDatePicker.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import BaseSelectBox from '@/components/common/BaseSelectBox.vue';
import { useFormStore } from '@/stores/formStore';
import type { FilterForm } from '@/types/interface';
import { isNumeric } from '@/utils/formValidation';

// form store to store form values
const formStore = useFormStore();

// filter form
const filterForm = reactive<FilterForm>({
  searchByDefaultRepositories: formStore.defaultSelectBoxItems,
  selectedRepository: formStore.selectedtems,
  searchByStars: 100,
  startDate: formStore.startDate,
  endDate: formStore.endDate,
});

function onSubmit() {
  // Update the store with the form values
  formStore.setSelectedItems(filterForm.selectedRepository);
  formStore.setInputValueAsNumber(Number(filterForm.searchByStars));
  formStore.setStartDate(filterForm.startDate);
  formStore.setEndDate(filterForm.endDate);
}
</script>

<template>
  <div class="tw-p-4">
    <q-form @submit.prevent="onSubmit">
      <div class="tw-pt-4 tw-pb-4">
        <BaseSelectBox
          :selectBoxDefaultOptions="filterForm.searchByDefaultRepositories"
          label="Filter By Default Repositories"
          usechips
          multiple
          v-model:model-value="filterForm.selectedRepository"
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
