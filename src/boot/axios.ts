import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

import type { Params } from '@/types/interface';
import { HttpMethod } from '@/types/types';

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

class HttpService {
  private http: AxiosInstance;
  private baseURL = process.env.BASE_URL || 'https://api.github.com/search/repositories';
  constructor() {
    this.http = axios.create({
      baseURL: this.baseURL,
      withCredentials: false,
      headers: this.setupHeaders(),
    });
  }
  // Set up request headers
  private setupHeaders() {
    return { 'Content-Type': 'application/json' };
  }
  // Public method to get the base URL for testing
  public getBaseURL(): string {
    return this.baseURL;
  }
  // Handle HTTP requests
  private async request<T>(
    method: HttpMethod,
    url: string,
    options: AxiosRequestConfig,
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.http.request<T>({
        method,
        url,
        ...options,
      });

      return response.data;
    } catch (error) {
      return this.normalizeError(error);
    }
  }
  // Perform GET request
  public async get<T>(url: string, params?: Params): Promise<T> {
    return this.request<T>(HttpMethod.Get, url, {
      params,
      headers: this.setupHeaders(),
    });
  }
  // error handling
  private normalizeError(error: unknown): Promise<never> {
    if (axios.isAxiosError(error)) {
      console.error('Axios Error:', error.response?.data || error.message);
    } else {
      console.error('Unknown Error:', error);
    }
    return Promise.reject(error);
  }
}

export { HttpService };
