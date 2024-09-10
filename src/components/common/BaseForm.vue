<script setup lang="ts">
import { reactive } from 'vue';

import BaseButton from '@/components/common/BaseButton.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import BaseSelectBox from '@/components/common/BaseSelectBox.vue';
import type { FilterForm } from '@/types/interface';
import { isAlphanumeric, isNumeric } from '@/utils/formValidation';


const formState = reactive<FilterForm>({
  searchByRepository: '',
  searchByStars: ''
});

function onSubmit() {
  console.log('here', formState);
}
</script>

<template>
  <div class="tw-p-4">
    <q-form @submit.prevent="onSubmit">
      <div class="tw-pt-4 tw-pb-4">
        <BaseSelectBox :outline="true" label="Filter By Default Repositories" usechips multiple />
      </div>
      <div class="tw-pb-4">
        <BaseInput
          :outline="true"
          label="Search By Repository"
          :lazy-rules="true"
          :rules="isAlphanumeric"
          v-model:model-value="formState.searchByRepository"
        />
      </div>
      <div class="tw-pb-4">
        <BaseInput
          :outline="true"
          label="Search By Number of Stars"
          :lazy-rules="true"
          :rules="isNumeric"
          v-model="formState.searchByStars"
        />
      </div>
      <!--       <div class="tw-pb-4">
        <BaseDatePicker />
      </div> -->
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
