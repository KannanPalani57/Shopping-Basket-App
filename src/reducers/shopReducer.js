import { 
    ADD_SHOPPING_ITEM,
    DECREASE_SHOPPING_ITEM    
} from "../constants/constants"
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
    },
    {
        totalPrice: 0,
        subTotal: 0,
        savings: 0,
        breedSavings: 0,
        cheeseSavings: 0,
        butterSavings: 0,
    }
]

export const shopReducer = (state = foodData, {type, payload}) => {
    switch(type){
        case ADD_SHOPPING_ITEM:
            console.log(payload)
            state.forEach(item => {
                if(item.id === parseInt(payload)){
                    item["quantity"] = item["quantity"] + 1
                    item["ratePerQuantity"] = item["quantity"] * item["sellingRate"]
                }
            })
            const calculatedMoney = calculateSpecialPrizes(state);
            state[state.length-1] = {
                savings: calculatedMoney.savings,
                totalPrice: calculatedMoney.totalPrice,
                subTotal: calculatedMoney.subTotal,
            }
            state[0]['breedSavings'] = calculatedMoney.breedSavings;
            state[2]['cheeseSavings'] = calculatedMoney.cheeseSavings;
            state[4]['butterSavings'] = calculatedMoney.butterSavings;
            // state.push(rateDetails)
            return [...state];
        case DECREASE_SHOPPING_ITEM:
            state.forEach(item => {
                if(item.id === parseInt(payload)){
                    item["quantity"] = item["quantity"] - 1
                    item["ratePerQuantity"] = item["quantity"] * item["sellingRate"]
                }
            })
            const calculatedMoneyAfterDecrement = calculateSpecialPrizes(state);
            state[state.length-1] = {
                savings: calculatedMoneyAfterDecrement.savings,
                totalPrice: calculatedMoneyAfterDecrement.totalPrice,
                subTotal: calculatedMoneyAfterDecrement.subTotal,
            }
            state[0]['breedSavings'] = calculatedMoneyAfterDecrement.breedSavings;
            state[2]['cheeseSavings'] = calculatedMoneyAfterDecrement.cheeseSavings;
            state[4]['butterSavings'] = calculatedMoneyAfterDecrement.butterSavings;
           return [...state];            
        default: 
            return state;    
    }
}   


