import React, { useState, useEffect } from "react";
import './App.css';
import {Route, Switch, withRouter } from "react-router-dom";
import Home from './Containers/Home';
import Landing from './Containers/Landing';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import { urlValidate } from "./Conections/url";



function App(props) {
  let {modal, setModal} = useState(true)
  let forceLocation;
  let previousLocation
  const { location } = props;

  useEffect(() => {
    const { location } = props;
     if(shouldUpdatePreviousLocation()){
      previousLocation = location;
     }
  }, [])

  const shouldUpdatePreviousLocation = () => {
    const { location } = props;
    if (!location) return false;
        return !location.pathname==='/register';
    }

  const shouldUsePreviousLocation = () => {
    modal = modal;
    const { location} = props;
    
    if (!location) return false;

    return modal && location.pathname==='/register';
    
  }

  const usePreviousLocation = shouldUsePreviousLocation();

  if(usePreviousLocation){
      forceLocation = previousLocation || {pathname:'/'}
  } else {
    forceLocation= location;
  }

  const validateToken = async () => {

      let token= localStorage.getItem('token');
      let user= localStorage.getItem('email');

      return await urlValidate(user, token);
  }

  console.log(validateToken());


  return (
    <>
      <Switch location={forceLocation}>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/home" component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path="/register" render={ props => (
                        <Register {...props} modal />
                    )}/>
      </Switch>
      {usePreviousLocation && 

          <Route exact path="/register" render={ props => (
            <Register {...props} modal />
          )}/>

      }
       
       
    
    </>
  );
}

export default withRouter(App);
