import { createTestingPinia } from '@pinia/testing';
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { flushPromises, mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import BaseSelectBox from '@/components/common/BaseSelectBox.vue';

installQuasarPlugin();

describe('BaseSelectBox Component', () => {
  it('should render with default props', () => {
    const wrapper = mount(BaseSelectBox, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
    const selectBoxAsLabelElement = wrapper.find('label');
    // check if selectbox loaded
    expect(selectBoxAsLabelElement.exists()).toBe(true);
    // check if label is there or not
    expect(wrapper.find('.q-field__label').text()).toBe('Select');
  });
  it('should render options and respond to selection', async () => {
    const wrapper = mount(BaseSelectBox, {
      global: {
        plugins: [createTestingPinia()],
      },
      props: {
        selectBoxOptions: [
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
        ],
      },
    });
    // Select an option
    await wrapper.find('.q-field__label').trigger('click');
    await wrapper.find('.q-select__focus-target').trigger('click'); // Select option
    // Wait for DOM updates
    await flushPromises();
    expect(wrapper.find('.q-chip').exists()).toBe(true);
  });
});
