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
import SwitchPlayPause from './../switchPlayPause/switchPlayPause';

class covidMainComponent extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  componentDidMount () {
    const { callApiCovid } = this.props;
    callApiCovid();
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
              <SwitchPlayPause />
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
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  callApiCovid: () => dispatch(actions.callApiCovid()),
});

export default connect(mapStateToProps, mapDispatchToProps)(covidMainComponent);