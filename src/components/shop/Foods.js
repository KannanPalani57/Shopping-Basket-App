import { addShoppingItemAction } from "../../actions/shopActions"
import { useDispatch, useSelector } from "react-redux"

const Foods = () => {
    const dispatch = useDispatch();
    const foods = useSelector(state => state.shoppingItems)
    const addShoppingItem = (data) => dispatch(addShoppingItemAction(data))

    const handleAddBtnClick = (event) =>{
        event.preventDefault();
        addShoppingItem(event.target.id)
    }
    
    return (
        <div className = "ml-5 mt-5">
            <h1 className = "text-3xl mb-2">Foods</h1>
            {
                foods && foods.map(food => {
                    return (
                        <div key = {food.id}>
                            <div className = "flex space-x-12">
                                <p className = "text-xl my-5">{food.foodName}</p>
                                <p className = "text-xl my-5">£{food.sellingRate}</p>
                                <button id = {food.id} className = "bg-gray-200 px-2" onClick = {handleAddBtnClick}>Add</button>
                            </div>
                        </div>    
                    )
                })
            }

        </div>
    )
}

export default Foods;