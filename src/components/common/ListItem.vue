<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import Heading from '@/components/common/Heading.vue';
import { RepositoryItems } from '@/types/interface';

const { t } = useI18n();

const props = defineProps<{
  repos: RepositoryItems[];
  repoName: string;
}>();
</script>

<template>
   <div v-if="props.repos.length <= 0">
    <Heading
        :textToDisplay="t('noDataAvailable')"
        class="tw-p-4 tw-text-2xl"
      />
  </div>
  <q-card
    class="my-card tw-overflow-y-auto"
    aria-labelledby="card-title"
    aria-describedby="card-description"
    style="max-height: 450px"
    v-else-if="props.repos"
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
              <q-btn target="_blank" :label="`Navigate to ${item.name}`" outline flat color="primary" :href="item.html_url" :no-caps="true" />
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator spaced inset class="tw-m-0" />
      </q-list>
    </q-card-section>
  </q-card>
</template>
