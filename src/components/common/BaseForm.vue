<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { reactive, computed, ref } from 'vue';

import BaseButton from '@/components/common/BaseButton.vue';
// import BaseDatePicker from '@/components/common/BaseDatePicker.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import BaseSelectBox from '@/components/common/BaseSelectBox.vue';
import { useSearchByMultipleFilters } from '@/composables/useSearchByMultipleFilters';
import type { FilterForm } from '@/types/interface';
import { selectBoxDefaultItems } from '@/utils/constants';
import { isAlphanumeric, isNumeric } from '@/utils/formValidation';

// filter form
const filterForm = reactive<FilterForm>({
  searchByDefaultRepositories: [],
  searchByRepository: '',
  searchByStars: '',
});

// A ref to control whether the query should be enabled
const isQueryEnabled = ref(false);

// A ref to hold the query key for submission
const queryKey = ref<string[]>([]);

// Create a computed query key
const filterQueryKey = computed(() => [
  'filterForm',
  filterForm.searchByDefaultRepositories.map((item) => item.value).join(','),
  filterForm.searchByRepository,
  filterForm.searchByStars,
]);

// Define the query function
const fetchFilteredData = async () => {
  const data = await useSearchByMultipleFilters({ filterForm });
  return data;
};

// Use useQuery hook
const query = useQuery({
  queryKey: queryKey,
  queryFn: fetchFilteredData,
  staleTime: 5 * 60 * 1000, // Data remains fresh 1059143191 for 5 minutes
  enabled: isQueryEnabled,
});
console.log(query);
function onSubmit() {
  queryKey.value = filterQueryKey.value;
  isQueryEnabled.value = true;
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
          v-model="filterForm.searchByStars"
        />
      </div>
      <div class="tw-pb-4">
        <!-- <BaseDatePicker /> -->
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
