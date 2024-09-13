import { Item } from '@/types/interface';

export const selectBoxDefaultItems: Item[] = [
  { label: 'JavaScript', value: 'javascript' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'Vue.js', value: 'vue' },
];

//TODO:
// this should come from settings page,
// by default we will take from browser locale
export const dateFormat = 'YYYY/MM/DD';
