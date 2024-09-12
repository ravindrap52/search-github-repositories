import { describe, expect, it } from 'vitest';

import { getObjectValues } from '@/utils/getObjectValues';

const obj = [
  {
    label: 'test',
    value: 'test',
  },
  {
    label: 'test1',
    value: 'test1',
  },
];
describe('getObjectValues', () => {
  it('should return array of values', () => {
    expect(getObjectValues(obj)).toMatchObject(['test', 'test1']);
  });
});
