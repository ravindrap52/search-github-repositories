import type { Item } from '@/types/interface';

export function getObjectValues<T extends Item>(obj: T[]): string[] {
  return obj.map((item) => item.value);
}
