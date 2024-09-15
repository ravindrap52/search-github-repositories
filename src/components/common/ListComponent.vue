<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';

import Heading from '@/components/common/Heading.vue';
import ListItem from '@/components/common/ListItem.vue';
import { useFormStore } from '@/stores/formStore';

const { t } = useI18n();
const formStore = useFormStore();

const { selectedtems, inputValueAsNumber, startDate, endDate } = storeToRefs(formStore);
</script>

<template>
  <q-page class="tw-flex tw-flex-col">
    <div>
      <Heading
        :textToDisplay="t('textHeading', [startDate, endDate, inputValueAsNumber])"
        class="tw-p-4 tw-text-2xl"
      />
    </div>
    <div v-if="selectedtems.length < 1">
      <Heading :textToDisplay="t('noDataAvailable')" class="tw-p-4 tw-text-2xl" />
    </div>
    <!-- List item Component -->
    <div class="row tw-gap-4">
      <div class="col-xs-12 col-sm-6 col-md-3" v-for="item in selectedtems" :key="item.value">
        <ListItem :repositoryName="item.value" />
      </div>
    </div>
  </q-page>
</template>
