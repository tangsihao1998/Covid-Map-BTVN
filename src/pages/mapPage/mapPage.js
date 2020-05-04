import React, { Component } from 'react'
import CovidMainComponent from '../../components/covidMainComponent/covidMainComponent';
import './mapPage.scss';

class mapPage extends Component {
  render() {
    return (
      <div className="mapPage">
        <CovidMainComponent />
      </div>
    )
  }
}

export default mapPage;