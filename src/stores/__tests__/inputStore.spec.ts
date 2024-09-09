import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, expect, it } from 'vitest';

import { useInputStore } from '@/stores/inputStore';

const inputValue = 'javascript';

describe('The User Store', () => {
  let inputStore: ReturnType<typeof useInputStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    inputStore = useInputStore();
  });
  // positive cases
  it('state should have the default value', () => {
    expect(inputStore.inputValue).toBe('');
  });
  it('state should have the selected item as set', () => {
    inputStore.setInputValue(inputValue);
    expect(inputStore.inputValue).toBe(inputValue);
  });
});
