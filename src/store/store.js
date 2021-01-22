import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import campusesReducer from '../reducers/campusesReducer';
import studentsReducer from '../reducers/studentsReducer';

const rootReducer = combineReducers({
    cps: campusesReducer,
    std: studentsReducer
});

const storeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(thunk))
);
export default store;
