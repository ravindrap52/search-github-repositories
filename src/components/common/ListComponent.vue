<script setup lang="ts">
import { useInfiniteQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import ListItem from '@/components/common/ListItem.vue';
import LoadingSkeleton from '@/components/common/LoadingSkeleton.vue';
import { useSearchByMultipleFilters } from '@/composables/useSearchByMultipleFilters';
import { useFormStore } from '@/stores/formStore';


const props = defineProps<{
  repositoryName: string;
}>();

const formStore = useFormStore();

const { inputValueAsNumber, startDate, endDate } = storeToRefs(formStore);

// Create a computed query key
const filterQueryKey = computed(() => [
  'projects',
  props.repositoryName,
  inputValueAsNumber.value,
  startDate.value,
  endDate.value,
]);

// Define the query function
const fetchFilteredData = async ({ pageParam = 1 }) => {
  const data = await useSearchByMultipleFilters({
    repositoryName: props.repositoryName,
    numberOfStars: inputValueAsNumber.value,
    page: pageParam,
    startDate: startDate.value.replace(/\//g, '-'),
    endDate: endDate.value.replace(/\//g, '-'),
  });
  return data;
};
const { data, error, isFetching, isError } =
  useInfiniteQuery({
    queryKey: filterQueryKey,
    queryFn: fetchFilteredData,
    staleTime: 5 * 60 * 1000,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return lastPage?.items.length === 10 ? pages.length + 1 : undefined;
    },
  });


</script>

<template>
  <!-- Show LoadingSkeleton while data is being fetched -->
  <LoadingSkeleton v-if="isFetching" />

  <!-- Showing error while data is being fetched -->
  <div v-else-if="isError">Error: {{ error?.message }}</div>

  <div v-for="(repositories, index) in data.pages" :key="index" v-else-if="data">
    <ListItem :repoName="props.repositoryName" :repos="repositories?.items || []" />
  </div>
</template>
