import { SAVE_CALCULATION } from "../constants/constants"


export function calculationReducer(state = {}, action){
    switch(action.type){
        case SAVE_CALCULATION: 
            console.log(action.payload)
            return action.payload
        default:
            return state;
    }
}
