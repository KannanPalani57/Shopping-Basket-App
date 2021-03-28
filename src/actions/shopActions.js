import { 
    ADD_SHOPPING_ITEM,
    DECREASE_SHOPPING_ITEM
} from "../constants/shopConstants";
      
export const addShoppingItemAction = (foodId) => ({
    type: ADD_SHOPPING_ITEM,
    payload: foodId,
})

export const decreaseShoppingItemAction = (foodId) => ({
    type: DECREASE_SHOPPING_ITEM,
    payload: foodId,
})
