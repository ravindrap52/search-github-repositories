<template>
  <div class="row tw-gap-4">
    <div class="col-xs-12 col-sm-6 col-md-3" v-for="item in [1,2,3]" :key="item">
      <div class="q-pa-md">
        <q-card>
          <q-item>
            <q-item-section>
              <q-item-label>
                <q-skeleton type="text" />
              </q-item-label>
              <q-item-label caption>
                <q-skeleton type="text" />
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-skeleton height="200px" square />
        </q-card>
      </div>
    </div>

  </div>
</template>
