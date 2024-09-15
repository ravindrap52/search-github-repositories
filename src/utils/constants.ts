import { Item } from '@/types/interface';

export const selectBoxDefaultItems: Item[] = [
  { label: 'Vue.js', value: 'vue' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'Node', value: 'node' },
  { label: 'React', value: 'react' },
];

export const defaultSelectedItem: Item[] = [
  { label: 'Vue.js', value: 'vue' },
];

//TODO:
// this should come from settings page,
// by default we will take from browser locale
// currently github supports on year-month-date format
export const dateFormat = 'YYYY/MM/DD';
