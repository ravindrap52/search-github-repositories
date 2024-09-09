<script setup lang="ts">
import { HeadingProps } from '@/types/interface';

// Define component props
withDefaults(defineProps<HeadingProps>(), {
  cssClasses: '',
  textToDisplay: '',
});
</script>
<template>
  <p :class="cssClasses">{{ textToDisplay }}</p>
</template>
