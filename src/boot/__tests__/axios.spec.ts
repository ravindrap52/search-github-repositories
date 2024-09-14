
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';

import { HttpService } from '@/boot/axios';


describe('HttpService', () => {
  let httpService: HttpService;
  let mock: MockAdapter;
  const mockBaseURL = 'https://api.github.com/search/repositories';

  beforeEach(() => {
    mock = new MockAdapter(axios);
    httpService = new HttpService(); // Create a new instance of HttpService
  });

  afterEach(() => {
    mock.restore();
  });

  it('should create axios instance with base URL', () => {
    expect(httpService.getBaseURL()).toBe(mockBaseURL);
  });
  it('should return data for a successful GET request', async () => {
    const endpoint = '/test';
    const mockData = { data: 'test data' };

    mock.onGet(endpoint).reply(200, mockData);

    const data = await httpService.get(endpoint);
    expect(data).toEqual(mockData);
  });
  it('should throw an error for a failed GET request', async () => {
    const endpoint = '/test';

    mock.onGet(endpoint).reply(500);

    await expect(httpService.get(endpoint)).rejects.toThrow();
  });
});
