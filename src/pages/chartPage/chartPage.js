import React, { Component } from 'react';

import CovidStat from './../../components/covidStat/covidStat';
import './chartPage.scss';

class chartPage extends Component {
  render() {
    return (
      <div className="chartPage">
        <CovidStat />
      </div>
    )
  }
}

export default chartPage;