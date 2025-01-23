import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import {foodList} from '../../assets/assets.js'

const FoodDisplay = ({category}) => {

    return (
        <>
        <div className="food-menu">
            <div className="food-display" id='food-display'>
                <h2 className='food-dishes-head'>Top Dishes near you</h2>
                <div className="food-list">
                   {foodList.map((item,index)=>{
                    if(category ==="All"||category ==item.category)
                    {
                      return <FoodItem key = {index} id ={item._id} name = {item.name} description = {item.description} price = {item.price} image = {item.image}/>
                    }
                    })}
                </div>
            </div>

        <div className="ads">

        </div>
        
        </div>

        </>
  )
}

export default FoodDisplay