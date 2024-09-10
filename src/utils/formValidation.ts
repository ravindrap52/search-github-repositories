export const isNumeric: Array<(value: string) => boolean | string> = [
  (value: string): boolean | string =>
    value === '' ? true : /^\d+$/.test(value) || 'Only numbers are allowed',
];

export const isAlphanumeric: Array<(value: string) => boolean | string> = [
  (value: string): boolean | string =>
    value === '' ? true : /^[a-zA-Z0-9]+$/.test(value) || 'Must be alphanumeric',
];
