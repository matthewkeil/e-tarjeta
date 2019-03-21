import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ACT} from '../../store';

class ProviderProfile extends Component{

  componentDidMount(){
    this.props.attemptGetProfile();
  }

  render(){
    return;
  }
}


const mapStateToProps = state => {
  return {
    providers: state.providers
  };
}

const mapDispatchToProps = dispatch => {
  return {
    attemptGetProfile: () => dispatch(ACT.providers.attemptGetProfile)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProviderProfile);
