import React, { Component } from 'react';
import './customSlider.scss';

// Redux
import { connect } from 'react-redux';
import actions from './../../redux/actions';
import selectors from './../../redux/selectors';

import { Slider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const CustomSlider = withStyles({
  root:{
    color: '#ffc368',
    width: '70%',
    height: '4px',
  },
  valueLabel:{
    transform: 'none',
  }
})(Slider);

class customSlider extends Component {

  onSliderHandleChange = (event, newValue) => {
    const {patientData, getCurrentPatientData, getDateSelect} = this.props;
    let date = new Date(newValue);
    getDateSelect(date);
    getCurrentPatientData(patientData);
  }

  formatDate = (value) => {
    let date = new Date(value);
    return `${date.toLocaleDateString()}`;
  }

  render() {
    return (
      <div>
        <CustomSlider
          value={this.props.dateSelect.getTime()}
          min={this.props.dateDefault.getTime()}
          max={this.props.timeNow.getTime()}
          step={86400000}
          onChange={this.onSliderHandleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          valueLabelFormat={this.formatDate}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  timeNow: selectors.getTimeNow(state),
  dateDefault: selectors.getDateDefault(state),
  dateSelect: selectors.getDateSelect(state),
  patientData: selectors.getDataPatient(state),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  getDateSelect: (dateSelect) => dispatch(actions.getDateSelect(dateSelect)),
  getCurrentPatientData: (patientData) => dispatch(actions.getCurrentPatientData(patientData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(customSlider);