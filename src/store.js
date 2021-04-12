import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { shopReducer } from "./reducers/shopReducer"
import { calculationReducer } from "./reducers/calculationReducer";
import thunk from "redux-thunk"


const reducer =  combineReducers({
    shoppingItems: shopReducer,
    calculation: calculationReducer,
})

// productList: productListReducer., example for reduceer
const initialState = {}
const middleware = [thunk];

const store = createStore(reducer, initialState,  composeWithDevTools(applyMiddleware(...middleware)))

export default store;