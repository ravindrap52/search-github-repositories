<script setup lang="ts">
import type { RepositoryItems } from '@/types/interface';

const props = defineProps<{
  items: RepositoryItems[];
}>();
</script>

<template>
  <q-card class="my-card" aria-labelledby="card-title" aria-describedby="card-description">
    <q-card-section>
      <q-list v-for="item in props.items" :key="item.id">
        <q-item >
          <q-item-section>
            <q-item-label>{{ item.name }}</q-item-label>
            <q-item-label caption lines="2">{{ item.default_branch }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator spaced inset />

      </q-list>
    </q-card-section>
  </q-card>
</template>
