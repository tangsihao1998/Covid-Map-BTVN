import React, { Component } from 'react'
import './covidMainComponent.scss'

// Redux
import { connect } from 'react-redux';
import actions from './../../redux/actions';
import selectors from './../../redux/selectors';

// Components
import CovidMap from './../covidMap/covidMap';
import ListViewPatientInfo from './../listViewPatientInfo/listViewPatientInfo';
import { Slider, Switch } from '@material-ui/core';
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

class covidMainComponent extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  componentDidMount () {
    const { callApiCovid } = this.props;
    callApiCovid();
  }

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

  onSwitchHandleChange = (event) => {
    this.props.setSwitchCheck(event.target.checked);
  }

  render() {
    return (
      <div className="covidMainComponent">
        <ListViewPatientInfo />
        <div className="covidMainComponent__map">
          <CovidMap />
          <div className="covidMainComponent__slider">
            <div className="covidMainComponent__slider--title">
              Verify Date
              <Switch
                checked={this.props.switchCheck}
                onChange={this.onSwitchHandleChange}
                color="primary"
                name="play_pause"
              />
            </div>
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
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  timeNow: selectors.getTimeNow(state),
  dateDefault: selectors.getDateDefault(state),
  dateSelect: selectors.getDateSelect(state),
  patientData: selectors.getDataPatient(state),
  switchCheck: selectors.getSwitchCheck(state),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  callApiCovid: () => dispatch(actions.callApiCovid()),
  getDateSelect: (dateSelect) => dispatch(actions.getDateSelect(dateSelect)),
  getCurrentPatientData: (patientData) => dispatch(actions.getCurrentPatientData(patientData)),
  setSwitchCheck: (switchCheck) => dispatch(actions.setSwitchCheck(switchCheck)),
});

export default connect(mapStateToProps, mapDispatchToProps)(covidMainComponent);