import React from 'react';
import './Features.css';
import { assets } from '../../assets/assets.js';

const featuredProducts = [
{
    name: 'Cake',
    imageName: assets.cake
},
{
    name: 'Chips Pastries',
    imageName: assets.chips_cake
},
{
    name: 'Chocolate Buns',
    imageName: assets.ch_buns
},
{
    name: 'Nuts Cookies',
    imageName: assets.nuts_cookies
}
];

const Features = () => {
  return (
    <>
      <h2 id="feature">Featured Products</h2>
      <div className="Features">
        {featuredProducts.map((product) => (
          <>
           <div className="feature-box">
           <div className="front-box">
             <img src={product.imageName} alt="" />
           </div>
           <div className="back-box">
             <img src={product.imageName} alt="" />
             <div className="back-head">{product.name}</div>
           </div>
         </div>
        </>
        ))}
      </div>
    </>
  );
}

export default Features;
