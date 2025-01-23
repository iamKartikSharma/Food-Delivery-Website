import { useState } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../context/StoreContext';
import { menu_list } from '../../assets/assets.js';

const ExploreMenu = ({category, setcategory}) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleClick = (category) => {
    setActiveCategory(category);
    setcategory(category);
  };

  return (
    <>
      <div className="explore-menu" id='services'>
        <h2>Explore Our Menu</h2>
      </div>
      <div className="services">
        <div 
          className={`category ${activeCategory === 'All' ? 'active' : 'All'}` } 
          onClick={() => handleClick('All')}
        >  
          All
        </div>
        {menu_list.map((item, index) => {
          return (
            <div 
              className={`box ${activeCategory === item.menu_name ? 'active' : ''}`} 
              onClick={() => handleClick(item.menu_name)} 
              key={index}
            >
              <div className="icon">
                <img src={item.menu_image} alt="" />
              </div>
              <div className="box-head">{item.menu_name}</div>
            </div>
          )
        })}
      </div>
    </>
  );
};

export default ExploreMenu;
