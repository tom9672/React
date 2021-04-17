//export a store obj, one app only have one store obj.
import {createStore, applyMiddleware} from 'redux'
import countReducer from './count_redux'
import thunk from 'redux-thunk'
export default createStore(countReducer,applyMiddleware(thunk))