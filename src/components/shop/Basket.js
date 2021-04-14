import ShowBill from "./ShowBill";
import { useDispatch, useSelector } from "react-redux";
import { 
    addShoppingItemAction,
    decreaseShoppingItemAction 
} from "../../actions/shopActions";
import React from 'react';
import { capitalizeFirstLetter } from "../../helpers/makeFirstLetterCaps"

const Basket = () => {
    const dispatch = useDispatch();
    const foods = useSelector(state => state.shoppingItems.slice(0,5))
    const addShoppingItem = (id) => dispatch(addShoppingItemAction(id))
    const decreaseShoppingItem = (id) => dispatch(decreaseShoppingItemAction(id))
    const basketFoods = foods.filter(food => food.quantity > 0)

    const handleIncrementBtnClick = (event, id) => {
        event.preventDefault();
        addShoppingItem(id)
    }

    const handleDecrementBtnClick = (event) => {
        event.preventDefault();
        decreaseShoppingItem(event.target.id)
    }

   
    return (
        <div>
            
            <h1 className = "text-3xl text-center mt-10">Basket</h1>
            {
                basketFoods && basketFoods.map(food => {
                    return (            
                      <div className = "flex flex-col justify-center lg: mt-5 w:3/5" key = {food.id}>  
                        <hr /> 
                        <div className = "sm: my-5 lg:w-3/5 ml:10 flex justify-around my-1">
                            <h3 className="lg: text-2xl">{capitalizeFirstLetter(food.foodName)}</h3>
                            <h3 className="lg: text-2xl">£{food.ratePerQuantity.toFixed(1)}</h3>
                            <button id = {food.id} onClick = {handleDecrementBtnClick} style = {{background: "#32174d"}} className = "text-white px-3 py-2"><i className="fa fa-minus"></i></button>
                            <h3 className="lg: text-2xl">{food.quantity}</h3>
                            <button onClick = {e => handleIncrementBtnClick(e, food.id)} style = {{background: "#32174d"}} className = " text-white px-3 py-2"><i className="fa fa-plus"></i></button>
                            </div>
                        <div className = "sm: my-5 w-5/5 lg:w-3/5 flex flex-col justify-center items-center my-1">
                                <h3 className="lg: ml:20 text-xl ">Item Price £{food.sellingRate} * {food.quantity} = £{food.ratePerQuantity.toFixed(1)}</h3>
                                 {   food.breedSavings && food.breedSavings !==0? <h1 className="text-green-800">Savings: {food.breedSavings}</h1>:"" }
                                 { food.cheeseSavings && food.cheeseSavings !==0?<h1 className="text-green-800">Savings: {food.cheeseSavings}</h1>:"" }
                                 { food.butterSavings && food.butterSavings !==0?<h1 className="text-green-800">Savings: {food.butterSavings}</h1>:"" }
                                <h3 className="lg: text-xl ">Item Cost = £{food.ratePerQuantity.toFixed(1)}</h3>
                                <hr />
                        </div>
                      </div>    
                    )
                })
            }
            <ShowBill />
            
        </div>
    )
}   

export default Basket;













