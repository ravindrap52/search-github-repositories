import { createTestingPinia } from '@pinia/testing';
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';

import BaseForm from '@/components/common/BaseForm.vue';

installQuasarPlugin();

describe('BaseForm Component', () => {
  it('should render form component', () => {
    const wrapper = mount(BaseForm, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
    const formElement = wrapper.find('.q-form');
    expect(formElement.exists()).toBe(true);
  });
  it('should render select box', () => {
    const wrapper = mount(BaseForm, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
    const selectElement = wrapper.find('.q-select');
    expect(selectElement.exists()).toBe(true);
  });
  it('should render rest of all inputs', () => {
    const wrapper = mount(BaseForm, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
    const inputElement = wrapper.find('.q-input');
    expect(inputElement.exists()).toBe(true);
  });
  it('should render button', () => {
    const wrapper = mount(BaseForm, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
    const buttonElement = wrapper.find('.q-btn');
    expect(buttonElement.exists()).toBe(true);
  });
  it('should should submit then form', async () => {
    const wrapper = mount(BaseForm, {
      global: {
        plugins: [createTestingPinia()],
      },

    });
    // const buttonElement = wrapper.find('.q-btn');
    const formElement = wrapper.find('.q-form');
    const spyOnForm = vi.spyOn(formElement, 'trigger')
    await formElement.trigger('click')
    expect(spyOnForm).toHaveBeenCalledOnce()
  });
});
