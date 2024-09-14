import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';

import IndexPage from '@/pages/IndexPage.vue';

installQuasarPlugin();

describe('ErrorNotFound', () => {
  let queryClient: QueryClient;
  beforeEach(() => {
    setActivePinia(createPinia());
    queryClient = new QueryClient();
  });
  it('should mount the component', () => {
    const wrapper = mount(IndexPage, {
      global: {
        plugins: [
          VueQueryPlugin,
          {
            install(app) {
              app.provide('queryClient', queryClient);
            }
          }
        ]
      }
    });
    expect(wrapper.classes()).toStrictEqual(['q-page', 'q-pa-md', 'tw-flex', 'tw-flex-col'])
  });
});
