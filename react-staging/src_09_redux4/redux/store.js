//export a store obj, one app only have one store obj.
import {createStore, applyMiddleware, combineReducers} from 'redux'
import countReducer from './reducers/count_redux'
import personReducer from './reducers/person_reducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
    countReducer:countReducer,
    personReducer:personReducer
})
export default createStore(reducers,applyMiddleware(thunk))