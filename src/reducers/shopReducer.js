import { 
    CART_ADD_ITEM,
    ADD_SHOPPING_ITEM,
    DECREASE_SHOPPING_ITEM    
} from "../constants/shopConstants"

let initialState = [
    {
        id: 1,
        foodName: "Bread",
        sellingRate: 1.10,
        ratePerQuantity: 1.10,
        quantity: 0,
    },
    {
        id: 2,
        foodName: "Milk",
        sellingRate: 0.50,
        ratePerQuantity: 0.50,
        quantity: 0,
    },
    {
        id: 3,
        foodName: "Cheese",
        sellingRate: 0.90,
        ratePerQuantity: 0.90,
        quantity: 0,
    },
    {
        id: 4,
        foodName: "Soup",
        sellingRate: 0.60,
        ratePerQuantity: 0.60,
        quantity: 0,
    },
    {
        id: 5,
        foodName: "Butter",
        sellingRate: 1.20,
        ratePerQuantity: 1.20,
        quantity: 0,
    }
]

export const shopReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_SHOPPING_ITEM:
            state.forEach(item => {
                if(item.id === parseInt(payload)){
                    item["quantity"] = item["quantity"] + 1
                    item["ratePerQuantity"] = item["quantity"] * item["sellingRate"]
                }
            })
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