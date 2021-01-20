import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import campusesReducer from './store/reducers/campusesReducer';
import studentsReducer from './store/reducers/studentsReducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "bootswatch/dist/cerulean/bootstrap.min.css";


const rootReducer = combineReducers({
    cps: campusesReducer,
    std: studentsReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
