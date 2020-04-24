import React, { Component } from 'react'
import './covidMainComponent.scss'

// Redux
import { connect } from 'react-redux';
import actions from './../../redux/actions';

// Components
import CovidMap from './../covidMap/covidMap';
import ListViewPatientInfo from './../listViewPatientInfo/listViewPatientInfo';

class covidMainComponent extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  componentDidMount () {
    this.props.callApiCovid();
  }

  render() {
    return (
      <div className="covidMainComponent">
        <ListViewPatientInfo />
        <CovidMap />
      </div>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  callApiCovid: () => dispatch(actions.callApiCovid())
});

export default connect(mapStateToProps, mapDispatchToProps)(covidMainComponent);