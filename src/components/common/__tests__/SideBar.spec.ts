import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import Sidebar from '@/components/common/SideBar.vue';

installQuasarPlugin();

describe('Sidebar.vue', () => {
  it('should render correctly with no slot content', () => {
    const wrapper = mount(Sidebar);
    expect(wrapper.html()).toBe('<aside></aside>');
  });
  it('render with default slot', () => {
    const wrapper = mount(Sidebar, {
      slots: {
        default: 'This is slot content',
      },
    });
    expect(wrapper.html()).toContain('This is slot content');
  });
});

