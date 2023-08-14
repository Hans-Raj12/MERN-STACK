import {createStore, combineReducers} from 'redux';
import cakeReducer from './cake/cakeReducers';
import iceCreamReducer from './iceCream/iceCreamReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer);
export default store;