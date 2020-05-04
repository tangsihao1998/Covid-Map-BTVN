import React, { Component } from 'react'
import SwitchMapStat from './../switchMapStat/switchMapStat';
import './header.scss';

class header extends Component {
  render() {
    return (
      <div>
        <div className="page__title">Covid Patient Map</div>
        <SwitchMapStat />
      </div>
    )
  }
}

export default header;