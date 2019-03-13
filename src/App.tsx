import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { SomeStore } from './SomeStore';

@inject('someStore')
@observer
export default class App extends Component<{ someStore?: SomeStore }> {
  componentDidMount() {
    this.props.someStore!.getSome();
  }
  render() {
    if (!this.props.someStore!.loadableData) {
      return null;
    }

    const { response, error, isLoading, isFailed } = this.props.someStore!.loadableData;

    return ( 
      <div className="App">
        Loading: {isLoading.toString()}
        <hr/>
        {isFailed
          ? 'Error: ' + error.message
          : 'Response: ' + response
        }
      </div>
    );
  }
}
