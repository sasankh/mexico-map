import React, { Component } from 'react';
import Map from '../containers/map';

import MxTj from '../../data/mx_tj.json';
import MexicoHighLevelJson from '../../data/mexico_highLevel_geoJson.json';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h4>All Geojson</h4>
          <Map id={"GeoJson"} data={MexicoHighLevelJson.features}/>
        </div>
        <br />
        <br />
        <div>
          <h4>All Topojson Municipalities</h4>
          <Map id={"allMunicipalities"} data={topojson.object(MxTj, MxTj.objects.municipalities).geometries}/>
        </div>
        <br />
        <br />
        <div>
          <h4>All Topojson States</h4>
          <Map id={"allStates"} data={topojson.object(MxTj, MxTj.objects.states).geometries}/>
        </div>
      </div>
    );
  }
}
