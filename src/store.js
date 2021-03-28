import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { shopReducer } from "./reducers/shopReducer"

const reducer =  combineReducers({
    shoppingItems: shopReducer
})

// productList: productListReducer., example for reduceer
const initialState = {}
const middleware = [];

const store = createStore(reducer, initialState,  composeWithDevTools(applyMiddleware(...middleware)))

export default store;