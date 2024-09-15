<template>
  <q-page class="q-pa-md tw-flex tw-flex-col">
    <div v-if="selectedtems.length < 1">
      <Heading textToDisplay="No Data Available" />
    </div>
    <!-- ListComponent -->
    <div class="row tw-gap-4">
      <div class="col-xs-12 col-sm-6 col-md-3" v-for="item in selectedtems" :key="item.value">
        <ListComponent
          :repositoryName="item.value"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import Heading from '@/components/common/Heading.vue';
import ListComponent from '@/components/common/ListComponent.vue';
import { useFormStore } from '@/stores/formStore';

const formStore = useFormStore();

const { selectedtems } = storeToRefs(formStore);
</script>
