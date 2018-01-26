import React, {Component} from 'react';

import {connect} from 'react-redux';

import MexicoHighLevelJson from '../../data/mexico_highLevel_geoJson.json';

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
    var svg = d3.select("#map")
    .append("svg")
    .attr("width", w)
    .attr("height", h);


    svg.selectAll("path")
    .data(MexicoHighLevelJson.features)
    .enter()
    .append("path")
    .attr("d", path);

  }

  render() {
    return <div id="map" ref="map" />
  }
}
