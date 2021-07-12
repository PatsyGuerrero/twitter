import React, { useState, useEffect } from "react";
import './App.css';
import {Route, Switch, withRouter } from "react-router-dom";
import Home from './Containers/Home';
import Landing from './Containers/Landing';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import { urlValidate } from "./Conections/url";



function App(props) {
  let [ state, setState ] = useState({ modal: true, validate: false });
  let forceLocation, token= localStorage.getItem('token'), user= localStorage.getItem('email');
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
    state.modal = state.modal;
    const { location} = props;
    if (!location) return false;
    return state.modal && location.pathname==='/register';
  }

  const usePreviousLocation = shouldUsePreviousLocation();

  if(usePreviousLocation){
      forceLocation = previousLocation || {pathname:'/'}
  } else {
    forceLocation= location;
  }

  useEffect(()=>{
    if(!state.validate){
      (async function() {
        setState({ ...state, validate: (await urlValidate(user, token)).data });
      })();
    }
  }, [state.validate,localStorage.getItem('token')])
  // let security= validateToken().then( response => response);
  
  if(state.validate){
    return (
      <>
        <Switch location={forceLocation}>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/home" component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path="/register" render={ props => (
                          <Register {...props} modal={state.modal} />
                      )}/>
          <Route path="/*" component={() => "404 NOT FOUND"} />
        </Switch>
        {usePreviousLocation && 
  
            <Route exact path="/register" render={ props => (
              <Register {...props} modal={state.modal} />
            )}/>
  
        }
      </>
    );
  }else{
    return (
      <>
        <Switch location={forceLocation}>
          <Route exact path="/" component={Landing}/>
          {/* <Route exact path="/home" component={Home} /> */}
          <Route exact path='/login' component={Login} />
          <Route exact path="/register" render={ props => (
                          <Register {...props} modal={state.modal} />
                      )}/>
          <Route path="/*" component={() => {
            // setTimeout(function(){ if(!(state.validate)) window.location.replace(window.location.origin) }, 3000);
            // setTimeout(() => <Redirect to='/'/>, 3000)
            return "404 NOT FOUND";
          }} />
        </Switch>
        {usePreviousLocation && 
  
            <Route exact path="/register" render={ props => (
              <Register {...props} modal={state.modal} />
            )}/>
  
        }
      </>
    );
  }
}

export default withRouter(App);
