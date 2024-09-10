<template>
  <q-drawer show-if-above bordered class="bg-grey-2" :width="360">
    <q-scroll-area class="fit">
      <slot></slot>
    </q-scroll-area>
  </q-drawer>
</template>
