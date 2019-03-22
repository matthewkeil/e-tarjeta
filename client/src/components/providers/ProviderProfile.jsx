import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ACT} from '../../store';
import CardLayout from '../core/CardLayout';
import styles from "./ProviderProfile.module.scss";

class ProviderProfile extends Component {

  componentDidMount(){
    this.props.attemptGetProviderProfile(this.props.match.params.providerId);
  }

  render(){
    return !this.props.providers.profile ? 
      null : (
      <CardLayout>
        <p>FULL NAME: {this.props.providers.profile.name.toUpperCase()}</p>
        <p>EMAIL: {this.props.providers.profile.email.toUpperCase()}</p>
        <p>MEDICAL LICENSE ID: {this.props.providers.profile.license.toUpperCase()}</p>
      </CardLayout>
    );
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
