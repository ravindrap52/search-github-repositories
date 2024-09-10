import { describe, expect, it } from 'vitest';

import { isNumeric, isAlphanumeric } from '@/utils/formValidation';

describe('isNumeric', () => {
  it('should return true for an empty string', () => {
    expect(isNumeric[0]('')).toBe(true);
  });

  it('should return true for a string with only digits', () => {
    expect(isNumeric[0]('12345')).toBe(true);
  });

  it('should return an error message for a string with non-digit characters', () => {
    expect(isNumeric[0]('123a5')).toBe('Only numbers are allowed');
  });

  it('should return an error message for a string with special characters', () => {
    expect(isNumeric[0]('12@45')).toBe('Only numbers are allowed');
  });
});

describe('isAlphanumeric', () => {
  it('should return true for an empty string', () => {
    expect(isAlphanumeric[0]('')).toBe(true);
  });

  it('should return true for a string with only letters and digits', () => {
    expect(isAlphanumeric[0]('abc123')).toBe(true);
  });

  it('should return an error message for a string with special characters', () => {
    expect(isAlphanumeric[0]('abc@123')).toBe('Must be alphanumeric');
  });

  it('should return an error message for a string with spaces', () => {
    expect(isAlphanumeric[0]('abc 123')).toBe('Must be alphanumeric');
  });
});
