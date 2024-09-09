import { formatDate } from '@/utils/dateUtils';

export function getDefaultDates(): {endDate: string, startDate: string} {
  const today = new Date();
  const yesterday = new Date(2000, 0, 1);
  return {
    startDate: formatDate(yesterday),
    endDate: formatDate(today),
  };
}
