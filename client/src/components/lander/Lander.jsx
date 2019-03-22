import React from "react";
import { connect } from "react-redux";
// import { reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import {CardLayout} from '../core';
import { routerActions } from "connected-react-router";


// const handleClick = (e) =>{
//   console.log(e.target.innerHTML)
//   switch(e.target.innerHTML){
//     case 'Client Registration':
//       attemptRegisterOrLoginRoute('/clients/new');
//       break;
//     case 'Client Login':
//       routerActions.push('/clients/login');
//       break;
//     case 'Provider Registration':
//       routerActions.push('/providers/new');
//       break;
//     case 'Provider Login':
//       routerActions.push('/providers/login');
//       break;
//     default:
//       break;
//   }
// }




const Lander = (props) => {
  const handleClick = (e) =>{
    e.persist();
    console.log(e)
    switch(e.target.innerHTML){
      case 'Client Registration':
        props.attemptRegisterOrLoginRoute('/clients/new');
        break;
      case 'Client Login':
        props.attemptRegisterOrLoginRoute('/clients/login');
        break;
      case 'Provider Registration':
        props.attemptRegisterOrLoginRoute('/providers/new');
        break;
      case 'Provider Login':
        props.attemptRegisterOrLoginRoute('/providers/login');
        break;
      default:
        break;
    }
  }
  return (
    <CardLayout>
      <Button variant='outlined' onClick={handleClick}>
        Client Registration
      </Button>
      <Button variant='outlined' onClick={handleClick}>
        Client Login
      </Button>
      <Button variant='outlined' onClick={handleClick}>
        Provider Registration
      </Button>
      <Button variant='outlined' onClick={handleClick}>
        Provider Login
      </Button>
    </CardLayout>
  );
}

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {
    attemptRegisterOrLoginRoute: (route) => dispatch(routerActions.push(route))  
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Lander);