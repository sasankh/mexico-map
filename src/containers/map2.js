import React, {Component} from 'react';

import {connect} from 'react-redux';
//
// import MexicoMunicipalityAndStateTopoJson from '../../data/mexico_municipality_and_state_topoJson.json';
import MxTj from '../../data/mx_tj.json';

export default class Map extends Component {
  componentDidMount() {
    //console.log(d3.geo)
    //set dimensions
    var w = 700;
    var h = 400;

    //define projection
var projection = d3.geo.mercator()
                .center([-100, 22])
                .translate([ w/1.7, h/1.7])
                .scale([ w/.7 ]);

//define path generator
var path = d3.geo.path()
          .projection(projection)

          //svg
var svg = d3.select("#map2")
          .append("svg")
          .attr("width", w)
          .attr("height", h);

//load GeoJson data
// d3.json(MexicoHighLevelJson, function(json) {
console.log(MxTj)
//   // // bind data
  svg.selectAll("path")
     .data(topojson.object(MxTj, MxTj.objects.municipalities).geometries)
     //.data(MexicoMunicipalityAndStateTopoJson.features)
     //.data(MxTj.features)
     .enter()
     .append("path")
     .attr("d", path);

// });

  }

  render() {
    return <div id="map2" ref="map2" />
  }
}
