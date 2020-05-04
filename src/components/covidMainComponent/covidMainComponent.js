import React, { Component } from 'react'
import './covidMainComponent.scss'

// Redux
import { connect } from 'react-redux';
import actions from './../../redux/actions';
import selectors from './../../redux/selectors';

// Components
import CovidMap from './../covidMap/covidMap';
import ListViewPatientInfo from './../listViewPatientInfo/listViewPatientInfo';
import CustomSlider from './../customSlider/customSlider';

class covidMainComponent extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  componentDidMount () {
    const { callApiCovid } = this.props;
    callApiCovid();
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
              {/* <Switch
                checked={this.props.switchCheck}
                onChange={this.onSwitchHandleChange}
                color="primary"
                name="play_pause"
              /> */}
            </div>
            <CustomSlider />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  patientData: selectors.getDataPatient(state),
  switchCheck: selectors.getSwitchCheck(state),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  callApiCovid: () => dispatch(actions.callApiCovid()),
  setSwitchCheck: (switchCheck) => dispatch(actions.setSwitchCheck(switchCheck)),
});

export default connect(mapStateToProps, mapDispatchToProps)(covidMainComponent);