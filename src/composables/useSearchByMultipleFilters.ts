import { HttpService } from '@/boot/axios';
import type { FilterForm, GitHubRepository } from '@/types/interface';
import { constructUrl } from '@/utils/constructUrl';
import { getObjectValues } from '@/utils/getObjectValues';

const httpService = new HttpService();

export async function useSearchByMultipleFilters<T = GitHubRepository>({
  searchByDefaultRepositories,
  searchByRepository,
  searchByStars,
}: FilterForm): Promise<T[]> {

  // Get values from the object
  const objValues = getObjectValues(searchByDefaultRepositories);
  if (searchByRepository) {
    objValues.push(searchByRepository);
  }
  // Construct URLs
  const urls = constructUrl({ objValues, searchByStars });

  try {
    // Make the API calls
    const results = await Promise.allSettled(
      urls.map((url) => httpService.get<GitHubRepository[]>(url)),
    );

    // Filter out fulfilled responses and map to the result
    return results
      .filter(
        (result): result is PromiseFulfilledResult<GitHubRepository[]> =>
          result.status === 'fulfilled',
      )
      .flatMap((result) => result.value as T[]);
  } catch (error) {
    console.error('An error occurred during the API calls:', error);
    return []; // Return an empty array or handle the error as appropriate
  }
}
