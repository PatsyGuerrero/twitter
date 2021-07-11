import React, { useState } from "react";
import './App.css';
import {Route, Switch, withRouter } from "react-router-dom";
import Home from './Containers/Home';
import Landing from './Containers/Landing';
import Register from './Components/Register/Register';


function App() {
  const {modal, setModal} = useState(true)
  const force= {pathname:'/'}
  return (
    <>
      <Switch location={force}>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/home" component={Home} />
        <Route exact path="/register" render={ props => (
                        <Register {...props} modal />
                    )}/>
      </Switch>
        <Route exact path="/register" render={ props => (
          <Register {...props} modal />
        )}/>
    
    </>
  );
}

export default withRouter(App);
