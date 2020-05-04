import React, { Component } from 'react';

import './covidStatComponent.scss';

import CovidChartVN from './../covidChartVN/covidChartVN';
import CovidChartWorld from './../covidChartWorld/covidChartWorld';

class covidStat extends Component {
  render() {
    return (
      <div className="covidStat">
        <CovidChartVN />
        <CovidChartWorld />
      </div>
    )
  }
}

export default covidStat;