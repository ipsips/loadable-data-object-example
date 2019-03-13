import { observable } from 'mobx';
import Loadable from './Loadable';
import SomeService from './SomeService';

interface SomeExpectedResponse {
  prop1: string;
  prop2: string;
}

export class SomeStore {
  @observable loadableData: Loadable<SomeExpectedResponse> = new Loadable<SomeExpectedResponse>('get', '/some/endpoint');

  async getSome() {
    const params = { param1: 'A', param2: 'B' };
    const loadable = await this.loadableData.load({ params });

    // loadable === this.loadableData
    // loadable.response.prop1;
    // loadable.response.prop2;
  }
}

export default new SomeStore();
