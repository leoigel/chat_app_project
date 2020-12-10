import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {authReducer} from  './reducers/auth';
const reducer = combineReducers({
    auth:authReducer,
})

const middleware = [thunk];
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

export default store;
