import { createTestingPinia } from '@pinia/testing';
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import BaseInput from '@/components/common/BaseInput.vue';

installQuasarPlugin();

describe('BaseInput Component', () => {
  it('should render with default props', () => {
    const wrapper = mount(BaseInput, {
      global: {
        plugins: [createTestingPinia()],
      },
    });
    const inputElement = wrapper.find('.q-field__native');
    // check if selectbox loaded
    expect(inputElement.exists()).toBe(true);
    // check if label is there or not
    expect(wrapper.find('.q-field__label').text()).toBe('');
  });
  it('renders with provided props', () => {
    const wrapper = mount(BaseInput, {
      props: {
        label: 'Test Label',
        placeholder: 'Test Placeholder',
        rules: [(value: string | number | null) => value !== '' || 'Field cannot be empty'],
        inputModelValue: 'Initial Value',
      },
    });
    expect(wrapper.find('.q-field__label').text()).toBe('Test Label');
    expect(wrapper.find('.q-field__native').attributes('placeholder')).toBe('Test Placeholder');
  });
  it('applies validation rules correctly', async () => {
    const wrapper = mount(BaseInput, {
      props: {
        label: 'Test Label',
        placeholder: 'Test Placeholder',
        rules: [
          (value: string | number | null) =>
            typeof value === 'string'
              ? /^[a-zA-Z0-9]*$/.test(value) || 'Must be alphanumeric'
              : 'Invalid input',
        ],
        lazyRules: true,
      },
    });
    const input = wrapper.find('.q-field__native');
    await input.setValue('!iNvalid@');
    expect(input.element.getAttribute('value')).toBe('!iNvalid@');
  });
});
