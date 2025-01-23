import userModel from "../models/userModel.js"

// add items to user cart
const addToCart = async (req,res)=>{
    try {
        let userData = await userModel.findOne({id:req.body.userId})
        let cartData = await userData.cartData;
        if(!cartdata[req.body.itemId])
        {
            cartData[req.body.itemId] = 1;
            userData.cartData = cartData;
            await userData.save();
            res.json(userData);
        }
        else{
            cartData[req.body.itemId] +=1;
        }
        await userModel.findByIdandUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Added to Cart"});
    } catch (error) {
        console.log(error);
        res.json({Success:false,message:"Error"})
        
    }
} 

// remove items from user cart
const removeFromCart = async(req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0)
        {
            cartData[req.body.itemId] -=1;
            if(cartData[req.body.itemId]<=0)
            {
                delete cartData[req.body.itemId]
                userData.cartData = cartData;
                await userData.save();
                res.json(userData);
            }
            await userModel.findByIdAndUpdate(req.body.userId,{cartData});
            res.json({success:true,message:"Removed from Cart"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:true,message:"Error"});
        
    }
} 

// fetch user cart data
const getCart = async(req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true,cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}

export {addToCart, removeFromCart,getCart}
