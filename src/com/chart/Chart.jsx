import React from 'react';
import { deleteShoppingCart } from '../../utilities/fakedb';

const Chart = (props) => {


   const setPrice = props.Add
   
   let totalPrice = 0 
   let shipping = 0 
   let quantity=0
   

   // for(let AddPrice of setPrice){
   //    console.log(AddPrice)
   //    if (AddPrice.quantity === 0){
   //       AddPrice.quantity = 1 
   //    }
   //   let  NewtotalPrice = AddPrice.price+totalPrice
   //   totalPrice = NewtotalPrice
   // }
   
   for(let AddPrice of setPrice){
      let quantitys = AddPrice.quantity

      console.log(quantitys) 
   
      if(AddPrice.quantity===0){
         let nwquantity = quantity+1
         quantity = nwquantity
       
      }
     

      else{
         quantity=quantity+AddPrice.quantity
      }
      
     
totalPrice =totalPrice+AddPrice.price*AddPrice.quantity
shipping = shipping+ AddPrice.shipping


   }
   const tax= totalPrice*7/100
   let grandTotal = totalPrice+shipping+tax  





   return (
      
         <div className='md:col-span-1 p-2 sticky top-2 bg-orange-400  own-css-for-chart rounded-lg'>
<h2 className=' text-3xl text-center py-5  rounded-lg mb-1 text-white bg-purple-700 '>Order Summary</h2>
<p className=' text-start  mb-2 pl-4 bg-cyan-600 text-white py-2 border-2 rounded-md border-purple-700 font-semibold text-base '>Selected Items:{quantity}</p>
<p className=' text-start  pl-4 bg-cyan-600 text-white py-2 border-2 rounded-md border-purple-700 font-semibold text-base  mb-2 '>Total Price : $ {totalPrice}</p>
<p className=' text-start  pl-4 bg-cyan-600 text-white py-2 border-2 rounded-md border-purple-700 font-semibold text-base mb-2'>Shipping Charge : $ {shipping}</p>
<p className=' text-start  pl-4 bg-cyan-600  text-white py-2 border-2 rounded-md border-purple-700 font-semibold text-base '>Tax : $ {tax.toFixed(2)}</p>
<p className=' text-start  pl-4 bg-cyan-600 mt-2  text-white py-2 border-2 rounded-md border-purple-700 font-semibold text-base '>Total : $ {grandTotal.toFixed(2)}</p>



<button type="button" class=" mt-4 w-full text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >clear cart</button>
         </div>
      
   );
};

export default Chart;