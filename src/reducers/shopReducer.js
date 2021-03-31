import { 
    CART_ADD_ITEM,
    ADD_SHOPPING_ITEM,
    DECREASE_SHOPPING_ITEM    
} from "../constants/shopConstants"
import { calculateSpecialPrizes } from "../helpers/shoppingHelpers";


export let foodData = [
    {
        id: 1,
        foodName: "bread",
        sellingRate: 1.10,
        ratePerQuantity: 1.10,
        quantity: 0,
    },
    {
        id: 2,
        foodName: "milk",
        sellingRate: 0.50,
        ratePerQuantity: 0.50,
        quantity: 0,
    },
    {
        id: 3,
        foodName: "cheese",
        sellingRate: 0.90,
        ratePerQuantity: 0.90,
        quantity: 0,
    },
    {
        id: 4,
        foodName: "soup",
        sellingRate: 0.60,
        ratePerQuantity: 0.60,
        quantity: 0,
    },
    {
        id: 5,
        foodName: "butter",
        sellingRate: 1.20,
        ratePerQuantity: 1.20,
        quantity: 0,
    }
]

export const shopReducer = (state = foodData, {type, payload}) => {
    switch(type){
        case ADD_SHOPPING_ITEM:
            state.forEach(item => {
                if(item.id === parseInt(payload)){
                    item["quantity"] = item["quantity"] + 1
                    item["ratePerQuantity"] = item["quantity"] * item["sellingRate"]
                }
            })

            calculateSpecialPrizes(state);
            return [...state];
        case DECREASE_SHOPPING_ITEM:
            state.forEach(item => {
                if(item.id === parseInt(payload)){
                    item["quantity"] = item["quantity"] - 1
                    item["ratePerQuantity"] = item["quantity"] * item["sellingRate"]
                }
            })
            return [...state];            

        default: 
            return state;    
    }
}   


