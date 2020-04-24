import React, { Component } from 'react'
import './patientMarker.scss';

// Redux
import { connect } from 'react-redux';
import actions from './../../redux/actions';
// import selectors from './../../redux/selectors';

// Map 
import { Marker, Popup } from 'react-leaflet';

class patientMarker extends Component {

  onPatientMarkerClicked = (patient) => {
    this.props.setCurrentPatient(patient);
  } 

  render() {
    const {patient} = this.props;
    return (
      <React.Fragment>
        <Marker position={[patient.lat, patient.lng]} onClick={() => this.onPatientMarkerClicked(patient)}>
          <Popup>
            <ul>
              <li>Name: {patient.name}</li>
              <li>Address: {patient.address}</li>
              <li>Note: {patient.note}</li>
              <li>Verify date: {patient.verifyDate}</li>
            </ul>
          </Popup>
        </Marker>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  setCurrentPatient: (patient) => dispatch(actions.setCurrentPatient(patient))
});

export default connect(mapStateToProps, mapDispatchToProps)(patientMarker);
