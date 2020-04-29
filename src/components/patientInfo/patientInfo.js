import React, { Component } from 'react'
import './patientInfo.scss'

class patientInfo extends Component {

  render() {
    const {patient} = this.props;
    return (
      <div className={patient}>
      {/* {`patient${(setBold && '--bold' )||''} `}> */}
        <div>+ Name: {patient.name}</div>
        <div>+ Patient Group: {patient.patientGroup}</div>
        <div>+ Address: {patient.address}</div>
        <div>+ Note: {patient.note}</div>
        <div>+ Verify Date: {patient.verifyDate}</div>
      </div>
    )
  }
}

export default patientInfo;