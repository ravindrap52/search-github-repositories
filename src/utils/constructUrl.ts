import { UrlType } from '@/types/interface';

export function constructUrl({ objValues, searchByStars }: UrlType): Array<string> {
  const baseUrl = process.env.BASE_URL;
  return objValues.map((value) => {
    return `${baseUrl}?q=${value}&stars%3A%3E=${searchByStars}&per_page=10&sort=desc`;
  });
}
