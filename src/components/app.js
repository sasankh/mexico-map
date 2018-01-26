import React, { Component } from 'react';
import Map from '../containers/map';
import Map2 from '../containers/map2';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Map />
        </div>
        <br />
        <br />
        <div>
          <Map2 />
        </div>
      </div>
    );
  }
}
