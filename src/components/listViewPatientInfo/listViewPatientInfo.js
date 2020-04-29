import React, { Component } from 'react';

import { List, ListItem, ListItemText } from '@material-ui/core';

import './listViewPatientInfo.scss';

// Redux
import { connect } from 'react-redux';
import actions from './../../redux/actions';
import selectors from './../../redux/selectors';

// Components
import PatientInfo from './../patientInfo/patientInfo';

const scrollableListRef = React.createRef();
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
    console.log(scrollableListRef)
    this.props.setCurrentPatient(patient);
  }

  renderPatient(patientArray) {
    let render = [];
    const {currentPatient} = this.props;
   
    patientArray.map((patient, index) => 
      {
        render.push(
          <List children={currentPatient.name}>
            <ListItem
            className="Patient__eachPatient"
            classes={{ root: 'root', selected: 'selected'}}
            alignItems = 'center'
            selected={patient.name === currentPatient.name}
            onClick={() => this.setCurrentPatient(patient)}
            children={currentPatient.name}
            autoFocus={true}
            key={index}
            >
              <ListItemText primary={patient.name} />
            </ListItem>
          </List>
        )
      }
    )
    return render;
  }

  render() {
    const {patientInfo, currentPatient} = this.props;
    const patientArray = Object.values(patientInfo);

    return (
      <React.Fragment>
        <div className="Patient__info">
          <button className="Patient__sort" onClick={() => this.onSortClick(patientArray)}>Sort by Date</button>
          <div className="Patient__listView">
            {this.renderPatient(patientArray)}
          </div>
          <div className="Patient__info--current">
            <PatientInfo patient={currentPatient} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  patientInfo: selectors.getCurrentPatientData(state),
  currentPatient: selectors.getCurrentPatient(state),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  setCurrentPatient: (patient) => dispatch(actions.setCurrentPatient(patient)),
  sortPatientByDate: (patientArray, sort) => dispatch(actions.sortPatientByDate(patientArray, sort)),
});

export default  connect(mapStateToProps, mapDispatchToProps)(listViewPatientInfo);