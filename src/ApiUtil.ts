import { AxiosRequestConfig, AxiosResponse } from 'axios';

// mocking an axios instance
export default {
  async request<T>({ method, url, params, data }: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    await new Promise(f => setTimeout(f, 4000));

    return {
      data: 'I am the response body' as unknown as T,
      statusText: 'OK',
      status: 200,
      config: {},
      headers: {}
    };
    // throw new Error('I am the request error');
  }
}
