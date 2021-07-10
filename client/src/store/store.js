import { createStore, applyMiddleware, compose} from 'redux';
import twitter from '../reducer/twitter';
import thunk from "redux-thunk";


  export const store = createStore(twitter, 
    compose(applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))