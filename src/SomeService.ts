import API from './ApiUtil';
import Loadable from './Loadable';

export default class SomeService {
  static async someApiRequest<T>(params: any, data?: any): Promise<Loadable<T>> {
    return new Loadable<T>('get', '/some/endpoint', params, data).load();
  }
}
