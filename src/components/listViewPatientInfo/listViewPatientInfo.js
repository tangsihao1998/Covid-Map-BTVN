import React, { Component } from 'react'
import './listViewPatientInfo.scss';

// Redux
import { connect } from 'react-redux';
import actions from './../../redux/actions';
import selectors from './../../redux/selectors';

// Components
import PatientInfo from './../patientInfo/patientInfo';

class listViewPatientInfo extends Component {

  constructor(props) {
    super(props);
    this.state={
      sort: false,
    }
  }
  onSortClick = (patientArray) => {
    this.props.sortPatientByDate(patientArray, this.state.sort);
    if(this.state.sort){
      this.setState({
        sort: false,
      });
    }
    else {
      this.setState({
        sort: true,
      });
    }
  }

  setCurrentPatient = (patient) => {
    this.props.setCurrentPatient(patient);
  }

  renderPatient(patientArray) {
    let render = [];
    const {currentPatient} = this.props;
   
    patientArray.map((patient, index) => 
      {
        let setBold = false;
        if(currentPatient){
          if(currentPatient.name === patient.name) {
            setBold = true;
          }
        }
        
        render.push(
          <div key={index} className="Patient__eachPatient" onClick={() => this.setCurrentPatient(patient)}>
            <PatientInfo patient={patient} setBold = {setBold}/>
          </div>
        )
      }
    )
    return render;
  }

  render() {
    const {patientInfo} = this.props;
    const patientArray = Object.values(patientInfo);

    return (
      <React.Fragment>
        <div className="Patient__info">
          <button className="Patient__sort" onClick={() => this.onSortClick(patientArray)}>Sort by Date</button>
          <div className="Patient__listView">
            {this.renderPatient(patientArray)}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  patientInfo: selectors.getDataPatient(state),
  currentPatient: selectors.getCurrentPatient(state),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  setCurrentPatient: (patient) => dispatch(actions.setCurrentPatient(patient)),
  sortPatientByDate: (patientArray, sort) => dispatch(actions.sortPatientByDate(patientArray, sort)),
});

export default  connect(mapStateToProps, mapDispatchToProps)(listViewPatientInfo);