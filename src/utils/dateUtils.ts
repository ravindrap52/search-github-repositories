import { date } from 'quasar';

import type { DateParams } from '@/types/interface';

export function getFormattedDate({ dateParam, dateFormat, options = {} }: DateParams): string {
  if (!dateParam) {
    throw new Error('Invalid date parameter');
  }
  let formattedDate = '';
  if (Object.keys(options).length) {
    const subtractedDate = date.subtractFromDate(dateParam, options);
    formattedDate = date.formatDate(subtractedDate, dateFormat);
  } else {
    const dt = new Date(dateParam);
    formattedDate = date.formatDate(dt, dateFormat);
  }
  return formattedDate;
}
