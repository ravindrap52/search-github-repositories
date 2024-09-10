<script setup lang="ts">
import { ref } from 'vue'

const  date = ref<object>({ from: '2020/07/08', to: '2020/07/17' })
</script>

<template>
    <div class="q-pa-md" style="max-width: 300px">
      <q-input filled v-model="date" mask="date" :rules="['date']">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-date v-model="date" range>
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
  </template>

