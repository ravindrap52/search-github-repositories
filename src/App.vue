<template>
  <VueQueryDevtools />
  <router-view />
</template>

<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';

defineOptions({
  name: 'App',
});
</script>
