import { useDispatch, useSelector } from "react-redux";
import { 
    addShoppingItemAction,
    decreaseShoppingItemAction 
} from "../../actions/shopActions";
import { addSomething } from "../../actions/calculationActions";


const Basket = () => {
    const dispatch = useDispatch();
    const foods = useSelector(state => state.shoppingItems.slice(0,5))
    const addShoppingItem = (id) => dispatch(addShoppingItemAction(id))
    const decreaseShoppingItem = (id) => dispatch(decreaseShoppingItemAction(id))
    const doSomething = (data) => dispatch(addSomething(data));
    console.log(foods)
    const basketFoods = foods.filter(food => food.quantity > 0)

    const handleIncrementBtnClick = (event, id) => {
        event.preventDefault();
        addShoppingItem(id)
    }

    const handleDecrementBtnClick = (event) => {
        event.preventDefault();
        decreaseShoppingItem(event.target.id)
    }

    const handleClick = (e) => {
        e.preventDefault();
        doSomething({name: "Kannan"});
    }
    return (
        <div>
            <h1 className = "text-3xl">Basket</h1>
            {
                basketFoods && basketFoods.map(food => {
                    return (
                        <div key = {food.id}>
                            <div className = "w-3/5 flex justify-around my-1">
                            <h3>{food.foodName}</h3>
                            <h3>£{food.ratePerQuantity.toFixed(1)}</h3>
                            <button id = {food.id} onClick = {handleDecrementBtnClick} className = "bg-purple-900 text-white px-3 py-2">Decrease</button>
                            <h3>{food.quantity}</h3>
                            <button onClick = {e => handleIncrementBtnClick(e, food.id)} className = "bg-purple-900 text-white px-3 py-2">Increase</button>
                            </div>
                            <div className = "w-3/5 flex flex-col items-center my-1">
                                <h3>Item Price £{food.sellingRate} * {food.quantity} = £{food.ratePerQuantity.toFixed(1)}</h3>
                                <h3>Savings - </h3>
                                <h3>Item Cost £{food.ratePerQuantity.toFixed(1)}</h3>
                            </div>
                        </div>      
                    )
                })
            }
            <button onClick = {handleClick}>Do something</button>
        </div>
    )
}   

export default Basket;