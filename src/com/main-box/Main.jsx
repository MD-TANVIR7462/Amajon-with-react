import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Chart from '../chart/Chart';
import Singel from '../singelCard.jsx/Singel';
import './main.css'

const Main = () => {
   const [Cards, setCards] = useState([])
   const [Add,setAdd] = useState([])
   useEffect(() => {
      fetch('products.json')
         .then(res => res.json())
         .then(data => setCards(data))

   }, [])
  useEffect(()=>{
   // console.log(Cards)
  const getCardFromLocalStorage = getShoppingCart();
  const saveCard = []
//   console.log(getCardFromLocalStorage)
  for(let id in getCardFromLocalStorage){
let addProduct = Cards.find(newCard=>newCard.id===id)
if(addProduct){
const quantity =getCardFromLocalStorage[id]
addProduct.quantity=quantity 
saveCard.push(addProduct)
}
  }
setAdd(saveCard)


  },[Cards])
   const x =(props)=>{
    const newAdd=[...Add,props]
    console.log(newAdd)
    setAdd(newAdd)
    
addToDb(props.id)
   
     
  }
 
  
   return (
      <div className='grid md:grid-cols-8 gap-2  w-11/12 mx-auto'>
         <div className='md:col-span-6  '>
            <div className='md:grid grid-cols-3 gap-3'>
               {
             Cards.map((card) =>  <Singel card={card} key={card.id} x={x}></Singel> )
               }
            </div>

         </div>
         <div className='md:col-span-2'>
         <Chart Add={Add}></Chart>
         
         </div>
         
         
      </div>
   );
};

export default Main;