import React, { Component } from 'react'
import CovidMainComponent from './../../components/covidMainComponent/covidMainComponent';
import './mainPage.scss';

class mainPage extends Component {
  render() {
    return (
      <div>
        <div className="page__title">Covid Patient Map</div>
        <CovidMainComponent />
      </div>
    )
  }
}

export default mainPage;