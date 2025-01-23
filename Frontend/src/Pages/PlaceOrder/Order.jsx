import { useContext, useEffect, useState } from 'react'
import './Order.css'
import { StoreContext } from '../../components/context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import axios from 'axios'
import Footer from '../../components/Footer/Footer';

const Order = () => {
  const {getTotalAmount,token,foodList,cartItems,url} = useContext(StoreContext);
   
  const [data,setData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((data) => ({
        ...data,
        [name]: value
    }));
};

  const placeOrder =  async (event)=>{
    event.preventDefault();
    let orderItems = [];
    foodList.map((item)=>{
      if(cartItems[item._id]>0)
      {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData = {
      address: data,
      items:orderItems,
      amount:getTotalAmount()+2,
    }  
    let response = await axios.post(`${url}/api/order/place`,orderData,{headers:{token}})
    if(response.data.success)
      {
        const {session_url} = response.data;
        window.location.replace(session_url);
      }  
      else{
        alert("Error")
      }
  }
  const navigate = useNavigate();
  useEffect(() => {
    if(!token)
    {
      navigate('/cart')
    }
    else if(getTotalAmount ===0)
    {
      navigate('/cart')
    }
  }, [token])
  
  return (
    <>
      <div className="buy">
        <div className="buy-content">
        <h2>
          <div className="random"></div>
          Scan this QR Code
          <i className='fas fa-close' onClick={
            ()=>{
              document.querySelector('.buy').style.display = 'none'
            }
          }></i>
        </h2>
        <div className="qr-img">
            <img src={assets.qr} alt="" />
        </div>
        <span>${getTotalAmount()>0?getTotalAmount()+2:0}</span>
        <div className="content">
          <p>
          <input type="checkbox" required />
          By checking this, you are accepting the terms of use & privacy
          </p>
        </div>
        </div>
      </div>
        <div className="order">
          <div className="left">
          <form onSubmit={placeOrder} action="" className="place-order">
                  <p className="title">
                    Delivery Information 
                  </p>
                  <div className="fields">
                    <input required name='firstName' onChange={onChangeHandler} value={data.firstName} className='field' type="text" placeholder='Enter First Name' />
                    <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" className='field' placeholder='Enter Last Name' />
                  </div>
                  <div className="fields">
                    <input required name='email' onChange={onChangeHandler} value={data.email} type="email" className='field' placeholder='Enter Your Email' />
                  <input required name='street' onChange={onChangeHandler} value={data.street} type="text" className='field' placeholder='Enter Address' />
                  </div>
                  <div className="fields">
                    <input required type="text" name='city' onChange={onChangeHandler} value={data.city} className='field' placeholder='City' />
                    <input required type="text" name='state' onChange={onChangeHandler} value={data.state} className='field' placeholder='State' />
                  </div>
                  <div className="fields">
                    <input required type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode}  className='field' placeholder='Zipcode' />
                    <input required type="text" name='country' onChange={onChangeHandler} value={data.country} className='field' placeholder='Country' />
                  </div>
                    <input required name='phone' onChange={onChangeHandler} value={data.phone} type="number" maxLength={10} className='field' placeholder='Enter Mobile Number' />
          </form>
          </div>
          <div className="right">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery</p>
                <p>${getTotalAmount()>0?"2":"0"}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalAmount()>0?getTotalAmount()+2:0}</b>
              </div>
              <button type='submit' className='btn-class' onClick={()=>{
                document.querySelector('.buy').style.display = 'block';
              }}>Proceed To Payment</button>
            </div>
          </div>
          </div>
          </div>
          <Footer/>
    </>
  )
}

export default Order