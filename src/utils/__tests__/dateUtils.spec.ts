import { describe, expect, it } from 'vitest';

import { getFormattedDate } from '@/utils/dateUtils';

const date = new Date().toDateString();
const format = 'YYYY-MM-DD';

describe('Format Date', () => {
  it('should throw error if no dateParam is not available', () => {
    expect(() => {
      getFormattedDate({ dateParam: '', dateFormat: format });
    }).toThrow('Invalid date parameter');
  });
  it('should subtract the options provided', () => {
    const newDate = getFormattedDate({
      dateParam: date,
      dateFormat: format,
      options: { months: 6 },
    });
    expect(newDate).toBe('2024-03-14');
  });
  it('should return the current date', () => {
    const newDate = getFormattedDate({
      dateParam: date,
      dateFormat: format,
    });
    expect(newDate).toBe('2024-09-14');
  });
});
