import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import ErrorNotFound from '@/pages/ErrorNotFound.vue';

installQuasarPlugin();

describe('ErrorNotFound', () => {
  it('should mount the component', () => {
    const wrapper = mount(ErrorNotFound);
    expect(wrapper.exists()).toBe(true);
  });
  it('should contain text', () => {
    const wrapper = mount(ErrorNotFound);
    expect(wrapper.text()).toContain('Page not found');
  });
  it('should have button element', () => {
    const wrapper = mount(ErrorNotFound);
    const [button] = wrapper.findAll('button');
    button.trigger('clcik');
    expect(location.pathname).toBe('/')
  })
});
