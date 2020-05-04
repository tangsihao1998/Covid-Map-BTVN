import React, { Component } from 'react'

import './switchPlayPause.scss';

// Redux
import { connect } from 'react-redux';
import actions from './../../redux/actions';
import selectors from './../../redux/selectors';

import { Switch } from '@material-ui/core';

class switchPlayPause extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false,
    }
  }  
  
  componentDidMount(){
    this.interval = setInterval(() => this.increase(), 100);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  onSwitchHandleChange = (event) => {
    this.setState({
      switch: event.target.checked
    });
  }

  increase = () => {
    const { dateSelect, timeNow, patientData, getDateSelect, getCurrentPatientData } = this.props;
    if(this.state.switch) {
      let newdate = dateSelect.getTime();
    
      if( newdate < (timeNow.getTime() - 86400000) ){
        newdate = newdate + 86400000;
        let date = new Date(newdate);
        getDateSelect(date);
        getCurrentPatientData(patientData);
      }
    }
  }

  render() {
    return (
      <div className="PlayPause__switch">
        <Switch
          checked={this.state.switch}
          onChange={this.onSwitchHandleChange}
          color="primary"
          name="play_pause"
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  dateSelect: selectors.getDateSelect(state),
  timeNow: selectors.getTimeNow(state),
  patientData: selectors.getDataPatient(state),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  getDateSelect: (dateSelect) => dispatch(actions.getDateSelect(dateSelect)),
  getCurrentPatientData: (patientData) => dispatch(actions.getCurrentPatientData(patientData)),
});

export default  connect(mapStateToProps, mapDispatchToProps)(switchPlayPause);