<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <Header>
      <q-toolbar>
        <BaseButton aria-label="Menu" icon="menu" type="button" round flat></BaseButton>
      </q-toolbar>
    </Header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import Header from '@/components/common/Header.vue';
</script>
