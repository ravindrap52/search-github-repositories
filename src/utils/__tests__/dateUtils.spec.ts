import { describe, expect, it } from 'vitest';

import { formatDate } from '@/utils/dateUtils';

describe('Format Date', () => {
  it('should format and return date', () => {
    const formattedDate = formatDate(new Date());
    expect(formattedDate).not.toBeNull();
  });
});
