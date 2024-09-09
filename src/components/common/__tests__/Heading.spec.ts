import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import Heading from '@/components/common/Heading.vue';

installQuasarPlugin();

describe('Heading.vue', () => {
  it('render with default props', () => {
    const wrapper = mount(Heading, {
      props: {},
    });
    const p = wrapper.find('p');
    const classes = p.classes();
    expect(classes).toEqual([]);
  });
  it('render with custom props with label', () => {
    const wrapper = mount(Heading, {
      props: {
        cssClasses: 'text-2xl',
        textToDisplay: 'Hello world',
      },
    });
    const p = wrapper.find('p');
    const classes = p.classes();
    expect(classes).toEqual(expect.arrayContaining(['text-2xl']));
    expect(p.text()).toBe('Hello world');
  });
});
