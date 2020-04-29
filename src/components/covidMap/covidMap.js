import React, { PureComponent } from 'react';
import './covidMap.scss';

// Redux
import { connect } from 'react-redux';
import actions from './../../redux/actions';
import selectors from './../../redux/selectors';

// Map 
import { Map, TileLayer } from 'react-leaflet';
import PatientMarker from './../patientMarker/patientMarker';

class covidMap extends PureComponent {
  constructor(props){
    super(props);
    this.state={};
  }

  renderPatientMarker = () => {
    const {patientData, patientDataCurrent} = this.props;
    let patientArray;
    if(!patientDataCurrent) {
      patientArray = Object.values(patientData);
    }
    else {
      patientArray = Object.values(patientDataCurrent);
    }
    const renderMarker = new Array ();
    for(let i = 0; i < patientArray.length; ++i) {
      renderMarker.push(<PatientMarker key={i} patient={patientArray[i]} />);
    }
    return renderMarker;
  }

  render() {
    const {currentPatient} = this.props;
    let position = '';
    if(currentPatient){
      position = [currentPatient.lat,currentPatient.lng];
    }

    return (
      <React.Fragment>
        <Map center={(position || [10.762887, 106.6800684])} zoom={13}>
          <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.osm.org/{z}/{x}/{y}.png   "
          />
          {this.renderPatientMarker()}
        </Map>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  patientDataCurrent: selectors.getCurrentPatientData(state),
  currentPatient: selectors.getCurrentPatient(state),
  patientData: selectors.getDataPatient(state),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});


export default connect(mapStateToProps, mapDispatchToProps)(covidMap);