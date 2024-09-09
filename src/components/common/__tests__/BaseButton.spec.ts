import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import BaseButton from '@/components/common/BaseButton.vue';

installQuasarPlugin();

describe('BaseButton.vue', () => {
  it('render with default props', () => {
    const wrapper = mount(BaseButton, {
      props: {},
    });
    const button = wrapper.find('button');
    const classes = button.classes();
    expect(classes).toEqual(expect.arrayContaining(['bg-primary', 'q-btn']));
  });
  it('render with custom props with label', () => {
    const wrapper = mount(BaseButton, {
      props: {
        type: 'submit',
        label: 'Click Me',
        icon: '',
      },
    });
    const button = wrapper.find('button');
    expect(button.attributes('type')).toBe('submit');
    expect(button.text()).toBe('Click Me');
  });
  it('render with custom props with icon', () => {
    const wrapper = mount(BaseButton, {
      props: {
        type: 'submit',
        label: '',
        icon: 'menu',
      },
    });
    const button = wrapper.find('button');
    const iconComponent = button.findComponent('i');
    expect(iconComponent.text()).toBe('menu');
  });
  it('render with custom props with button should be disabled', () => {
    const wrapper = mount(BaseButton, {
      props: {
        type: 'submit',
        label: 'Disabled',
        disable: true,
      },
    });
    const button = wrapper.find('button');
    const classes = button.classes();
    expect(classes).toEqual(expect.arrayContaining(['disabled', 'non-selectable']));
    expect(button.attributes('type')).toBe('submit');
    expect(button.text()).toBe('Disabled');
    expect(button.attributes('aria-disabled')).toBe('true');
  });
  it('emits click event on button click', async () => {
    const wrapper = mount(BaseButton, {
      props: {},
    });
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted()).toHaveProperty('click');
    expect(wrapper.emitted('click')?.length).toBe(1);
  });
});
