<script setup lang="ts">

import ListItem from '@/components/common/ListItem.vue';
import { GitHubRepository } from '@/types/interface';

const props = defineProps<{
  data: GitHubRepository[]
}>()

</script>

<template>
  <div class="row tw-gap-4">
    <div class="col-xs-12 col-sm-6 col-md-4" v-for="item in props.data" :key="item.total_count">
      <ListItem :items="item.items" />
    </div>
  </div>
</template>
