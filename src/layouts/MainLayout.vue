<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <!-- header will display a hamburger menu, and a title -->
    <Header>
      <q-toolbar>
        <BaseButton aria-label="Menu" icon="menu" type="button" round flat></BaseButton>
        <q-toolbar-title>
          <Heading text-to-display="DataGuard" css-classes="text-2xl text-slate-900" />
        </q-toolbar-title>
      </q-toolbar>
    </Header>
    <!-- imagine side bar is like a container, sidebar will have a drawer, and drawer will have a form
    and form contains filter item -->
    <SideBar>
      <BaseDrawer>
        <BaseForm />
      </BaseDrawer>
    </SideBar>
    <!-- displaying the route content -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
import BaseDrawer from '@/components/common/BaseDrawer.vue';
import BaseForm from '@/components/common/BaseForm.vue';
import Header from '@/components/common/Header.vue';
import Heading from '@/components/common/Heading.vue';
import SideBar from '@/components/common/SideBar.vue';

</script>
