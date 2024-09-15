<script setup lang="ts">
import Heading from '@/components/common/Heading.vue';
import { RepositoryItems } from '@/types/interface';

const props = defineProps<{
  repos: RepositoryItems[];
  repoName: string;
}>();
</script>

<template>
  <q-card
    class="my-card tw-overflow-y-auto"
    aria-labelledby="card-title"
    aria-describedby="card-description"
    style="max-height: 450px"
  >
    <q-card-section class="tw-p-0">
      <Heading :textToDisplay="props.repoName" class="tw-text-xl tw-capitalize tw-p-4" />
      <q-list v-for="item in props.repos" :key="item.id">
        <q-item class="tw-p-0">
          <q-item-section>
            <q-item-label class="tw-pl-4 tw-pt-4 tw-pb-4"
              ><span class="tw-pr-1">Name:</span> {{ item.name }}</q-item-label
            >
            <q-item-label class="tw-pl-4">
              <span class="tw-pr-1">Description:</span> {{ item.description }}
            </q-item-label>
            <q-item-label class="tw-pl-4 tw-pt-4 tw-pb-4"
              ><span class="tw-pr-1">URL:</span>
              <q-btn target="_blank" label="To Docs index" outline color="purple" :href="item.html_url" />
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator spaced inset class="tw-m-0" />
      </q-list>
    </q-card-section>
  </q-card>
</template>
