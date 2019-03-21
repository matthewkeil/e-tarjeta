import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ACT} from '../../store';

class ProviderProfile extends Component {

  componentDidMount(){
    this.props.attemptGetProviderProfile(this.props.match.params.providerId);
  }

  render(){
    return <h1>hey</h1>;
  }
}


const mapStateToProps = state => {
  return {
    profile: state.providers.profile
  };
}

const mapDispatchToProps = dispatch => {
  return {
    attemptGetProviderProfile: (_id) => dispatch(ACT.providers.attemptGetProviderProfile(_id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProviderProfile);
