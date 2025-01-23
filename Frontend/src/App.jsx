import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Order from './Pages/PlaceOrder/Order';
import Login from './components/Loginpop_up/Login';
import './index.css';
import Verify from './Pages/Verify/Verify';
import MyOrders from './Pages/MyOrders/MyOrders';
import BlogDisplay from './Pages/BlogDisplay/BlogDisplay';
import AI from './Pages/AI/AI'

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin}/> : null}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
          <Route path='/verify' element={Verify}/>
          <Route path='/myorders' element={MyOrders}/>
          <Route path='/Blogs' element={<BlogDisplay/>}/>
          <Route path='/AI' element={<AI/>}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
