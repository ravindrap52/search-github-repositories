<template>
  <q-page class="q-pa-md tw-flex tw-flex-col">
    <!-- Show LoadingSkeleton while data is being fetched -->
    <LoadingSkeleton v-if="query.isFetching.value" />
    <!-- Show ListComponent only when data is loaded successfully -->
    <ListComponent v-else-if="query.isSuccess.value" :data="query.data.value" />
    <!-- Show an error message if the query fails -->
    <div v-else-if="query.isError">
      <p>Error loading data: {{ query.error }}</p>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import ListComponent from '@/components/common/ListComponent.vue';
import LoadingSkeleton from '@/components/common/LoadingSkeleton.vue';
import { useSearchByMultipleFilters } from '@/composables/useSearchByMultipleFilters';
import { useFormStore } from '@/stores/formStore';

// form store to store form values
const formStore = useFormStore();

const { selectedtems, inputValueAsText, inputValueAsNumber, startDate, endDate } =
  storeToRefs(formStore);

// Create a computed query key
const filterQueryKey = computed(() => [
  'filterForm',
  selectedtems.value.map((item) => item.value).join(','),
  inputValueAsText.value,
  inputValueAsNumber.value,
  startDate.value,
  endDate.value,
]);

// Define the query function
const fetchFilteredData = async () => {
  const data = await useSearchByMultipleFilters({
    searchByDefaultRepositories: selectedtems.value,
    searchByRepository: inputValueAsText.value,
    searchByStars: inputValueAsNumber.value,
    startDate: startDate.value,
    endDate: endDate.value,
  });
  return data;
};

// Use useQuery hook
const query = useQuery({
  queryKey: filterQueryKey,
  queryFn: fetchFilteredData,
  staleTime: 5 * 60 * 1000, // Data remains fresh for 5 minutes
});
console.log('33', query.data);
</script>
