import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './Containers/Home';
import Landing from './Containers/Landing';


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/home" component={Home} />
      </Switch>
    
    </>
  );
}

export default App;
