
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ACT} from '../../store';
import CardLayout from '../core/CardLayout';
// import styles from "./ProviderProfile.module.scss";

class ClientProfile extends Component {

  componentDidMount(){
    this.props.attemptGetClientProfile(this.props.match.params.clientId);
  }

  render(){
    return !this.props.clients.profile ? 
      null : (
      <CardLayout>
        {/* <p>FULL NAME: {this.props.clients.profile.name.toUpperCase()}</p> */}
        <p>EMAIL: {this.props.clients.profile.email.toUpperCase()}</p>
        
      </CardLayout>
    );
  }
}


const mapStateToProps = state => {
  return {
    clients: state.clients
  };
}

const mapDispatchToProps = dispatch => {
  return {
    attemptGetClientProfile: (_id) => dispatch(ACT.clients.attemptGetClientProfile(_id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientProfile);
