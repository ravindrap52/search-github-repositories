<script setup lang="ts">
import { useInfiniteQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import Heading from '@/components/common/Heading.vue';
import LoadingSkeleton from '@/components/common/LoadingSkeleton.vue';
import { useSearchByMultipleFilters } from '@/composables/useSearchByMultipleFilters';
import { useFormStore } from '@/stores/formStore';

const { t } = useI18n();
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

const { data, isError, isFetching, error, hasNextPage, fetchNextPage } = useInfiniteQuery({
  queryKey: filterQueryKey,
  queryFn: fetchFilteredData,
  staleTime: 5 * 60 * 1000,
  initialPageParam: 1,
  getNextPageParam: (lastPage, pages) => {
    return lastPage?.items.length === 10 ? pages.length + 1 : undefined;
  },
});

// fetch next page data when we scroll down
function onLoadId() {
  if (hasNextPage.value) {
    fetchNextPage();
  }
}

// Combine items from all pages
const allItems = computed(() => {
  return data.value?.pages.flatMap((page) => page?.items) || [];
});
</script>

<template>
  <!-- Show LoadingSkeleton while data is being fetched -->
  <LoadingSkeleton v-if="isFetching" />
  <!-- Show error while data is being fetched -->
  <div v-else-if="isError">Error: {{ error?.message }}</div>
  <div v-else>
    <Heading
      :textToDisplay="t('noDataAvailable')"
      class="tw-p-4 tw-text-2xl"
      v-if="allItems.length <= 0"
    />
    <q-card
      class="my-card tw-overflow-y-auto scroll"
      aria-labelledby="card-title"
      aria-describedby="card-description"
      style="max-height: 450px"
      :id="`scroll-target-id_${props.repositoryName}`"
      v-if="allItems.length > 0"
    >
      <q-infinite-scroll
        @load="onLoadId"
        :offset="450"
        :scroll-target="`#scroll-target-id_${props.repositoryName}`"
      >
        <q-card-section class="tw-p-0">
          <Heading :textToDisplay="props.repositoryName" class="tw-text-xl tw-capitalize tw-p-4" />
          <q-list v-for="item in allItems" :key="item?.id">
            <q-item class="tw-p-0">
              <q-item-section>
                <q-item-label class="tw-pl-4 tw-pt-4 tw-pb-4">
                  <span class="tw-pr-1">Name:</span> {{ item?.name }}
                </q-item-label>
                <q-item-label class="tw-pl-4">
                  <span class="tw-pr-1">Description:</span> {{ item?.description }}
                </q-item-label>
                <q-item-label class="tw-pl-4 tw-pt-4 tw-pb-4">
                  <span class="tw-pr-1">URL:</span>
                  <q-btn
                    target="_blank"
                    :label="`Navigate to ${item?.name}`"
                    outline
                    flat
                    color="primary"
                    :href="item?.html_url"
                    :no-caps="true"
                  />
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-separator spaced inset class="tw-m-0" />
          </q-list>
        </q-card-section>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
    </q-card>
  </div>
</template>
