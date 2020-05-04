import React, { Component } from 'react'

import './covidChartWorld.scss';

import axios from 'axios';

import { Line } from 'react-chartjs-2';

class covidChartWorld extends Component {
  constructor(props){
    super(props);
    this.state = {
      infoChartWorldDate: '',
      infoChartWorldInfect: '',
      infoChartWorldDead: '',
      infoChartWorldCure: '',
    };
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://td.fpt.ai/corona/corona-total.json',)
    .then( res => {
      const infoChartWorld = res.data;
      const info = Object.entries(infoChartWorld);

      const infoChartWorldDate = new Array(0);
      const infoChartWorldInfect = new Array(0);
      const infoChartWorldCure = new Array(0)
      const infoChartWorldDead = new Array(0);

      info.map((eachDate, index) => {
        infoChartWorldDate.push(eachDate[0]);
        infoChartWorldInfect.push(eachDate[1][0]);
        infoChartWorldDead.push(eachDate[1][1]);
        infoChartWorldCure.push(eachDate[1][2]);
      });
      
      this.setState({
        infoChartWorldDate: infoChartWorldDate,
        infoChartWorldInfect: infoChartWorldInfect,
        infoChartWorldDead: infoChartWorldDead,
        infoChartWorldCure: infoChartWorldCure,
      })
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    const { infoChartWorldDate, infoChartWorldInfect, infoChartWorldCure, infoChartWorldDead } = this.state;
    const data = {
      labels: infoChartWorldDate,
      datasets: [
        {
          label: 'Nhiễm',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#fc2323',
          borderColor: '#fc2323',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#fc2323',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#fc2323',
          pointHoverBorderColor: '#DCDCDC',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: infoChartWorldInfect
        },
        {
          label: 'Chết',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#000000',
          borderColor: '#000000',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#000000',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#000000',
          pointHoverBorderColor: '#DCDCDC',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: infoChartWorldDead
        },
        {
          label: 'Khỏi Bệnh',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#4BC0C0',
          borderColor: '#4BC0C0',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#4BC0C0',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#4BC0C0',
          pointHoverBorderColor: '#DCDCDC',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: infoChartWorldCure
        }
      ]
    };

    return (
      <div className="covidChartWorld">
        <div>Thế Giới</div>
        <div className="chartWorld"> 
          <Line ref="chart" data={data} />
        </div>
      </div>
    )
  }
}

export default covidChartWorld;