import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import BaseDatePicker from '@/components/common/BaseDatePicker.vue';

installQuasarPlugin();

describe('BaseDatePicker.vue', () => {
  it('render with default props', () => {
    const wrapper = mount(BaseDatePicker, {
      props: {},
    });
    expect(wrapper.find('.q-input')).not.toBe(null);
  });
  it('render calendar icon', () => {
    const wrapper = mount(BaseDatePicker, {
      props: {},
    });
    expect(wrapper.find('.q-icon')).not.toBe(null);
    wrapper.find('.q-icon').getCurrentComponent();
  });
});
