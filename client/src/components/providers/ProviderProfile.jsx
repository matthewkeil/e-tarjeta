import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ACT} from '../../store';

class ProviderProfile extends Component {

  componentDidMount(){
    console.log(this.props.match.params.providerId)
    this.props.attemptGetProviderProfile(this.props.match.params.providerId);
    console.log(this.props.providers);
  }

  render(){
    return <h1>hey</h1>;
  }
}


const mapStateToProps = state => {
  return {
    providers: state.providers
  };
}

const mapDispatchToProps = dispatch => {
  return {
    attemptGetProviderProfile: (_id) => dispatch(ACT.providers.attemptGetProviderProfile(_id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProviderProfile);
