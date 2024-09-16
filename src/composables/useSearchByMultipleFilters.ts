import { HttpService } from '@/boot/axios';
import type { GitHubRepository } from '@/types/interface';

interface ApiParams {
  repositoryName: string;
  numberOfStars: number;
  page: number;
  startDate: string;
  endDate: string;
}
const httpService = new HttpService();

export async function useSearchByMultipleFilters<T = GitHubRepository>({
  repositoryName,
  numberOfStars,
  page,
  startDate,
  endDate,
}: ApiParams): Promise<T | null> {
  //TODO: encode the url
  const url = `${process.env.BASE_URL}?q=${repositoryName}+stars:<${numberOfStars}+created:${startDate}..${endDate}&page=${page}&per_page=10&sort=stars&order=desc`;

  try {
    // Make the API calls
    const results = await httpService.get<GitHubRepository>(url);
    return results as T;
  } catch (error) {
    //TODO: handle the error
    console.error('An error occurred during the API calls:', error);
    return null;
  }
}
