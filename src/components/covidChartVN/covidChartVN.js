import React, { Component } from 'react'

import './covidChartVN.scss';

import axios from 'axios';

import { Line } from 'react-chartjs-2';

class covidChartVN extends Component {
  constructor(props){
    super(props);
    this.state = {
      infoChartVNDate: '',
      infoChartVNInfect: '',
      infoChartVNSuspect: '',
      infoChartVNCure: '',
    };
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://td.fpt.ai/corona/corona-chart-vn.json',)
    .then( res => {
      const infoChartVN = res.data;
      const info = Object.entries(infoChartVN);

      const infoChartVNDate = new Array(0);
      const infoChartVNInfect = new Array(0);
      const infoChartVNSuspect = new Array(0)
      const infoChartVNCure = new Array(0);

      info.map((eachDate, index) => {
        infoChartVNDate.push(eachDate[0]);
        infoChartVNInfect.push(eachDate[1][0]);
        infoChartVNSuspect.push(eachDate[1][1]);
        infoChartVNCure.push(eachDate[1][2]);
      });
      
      this.setState({
        infoChartVNDate: infoChartVNDate,
        infoChartVNInfect: infoChartVNInfect,
        infoChartVNSuspect: infoChartVNSuspect,
        infoChartVNCure: infoChartVNCure,
      })
    })
    .catch(err => {
      console.log(err);
    });
  }



  render() {
    const { infoChartVNDate, infoChartVNInfect, infoChartVNSuspect, infoChartVNCure } = this.state;
    const data = {
      labels: infoChartVNDate,
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
          data: infoChartVNInfect
        },
        {
          label: 'Nghi Nhiễm',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#fab81e',
          borderColor: '#fab81e',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#fab81e',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#fab81e',
          pointHoverBorderColor: '#DCDCDC',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: infoChartVNSuspect
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
          data: infoChartVNCure
        }
      ]
    };

    return (
      <div className="covidChartVN">
        <div>Việt Nam</div>
        <div className="chartVN">
          <Line ref="chart" data={data} />
        </div> 
      </div>
    )
  }
}

export default covidChartVN;