import { computed, observable } from 'mobx';
import { AxiosRequestConfig } from 'axios';
import API from './ApiUtil';

enum LoadableState {
  INITIAL = 'INITIAL',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  LOADED = 'LOADED'
}

export default class Loadable<T> {
  requestOptions: AxiosRequestConfig;

  @observable response: T;
  @observable error: Error;
  @observable state = LoadableState.LOADING;

  constructor(method: string, url: string, params?: any, data?: any) {
    this.requestOptions = { method, url, params, data };
  }

  async load(requestOptions?: AxiosRequestConfig): Promise<Loadable<T>> {
    try {
      const response = await API.request<T>({ ...this.requestOptions, ...requestOptions });
      this.response = response.data;
      this.state = LoadableState.LOADED;
    } catch (error) {
      this.error = error;
      this.state = LoadableState.ERROR;
    } finally {
      return this;
    }
  }

  @computed
  get isLoading() {
    return this.state === LoadableState.LOADING;
  }

  @computed
  get isFailed() {
    return this.state === LoadableState.ERROR;
  }
}
