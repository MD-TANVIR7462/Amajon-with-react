// const cardLoadForSideChart =async()=>{
// const loadProducts =await fetch('products.json')
// const products = await loadProducts.json()
// console.log(products)
// return products
// }

import { getShoppingCart } from "../utilities/fakedb"




// const cardLoadForSideChart =()=>{
// fetch('products.json')
// .then(res=>res.json())
// .then(data=>console.log(data))
// return cardLoadForSideChart
// }



const cardLoadForSideChart = async()=>{
   const loadProducts= await fetch('products.json')
   const products = await loadProducts.json()

   const storeCart = getShoppingCart()
   
   const saveCart = []

   for( let  id in storeCart ){
      const addedProducts = products.find(singleProduct => singleProduct.id === id)
      if(addedProducts){
         const quantity = storeCart[id]
         addedProducts.quantity= quantity
         saveCart.push(addedProducts)
         
      }
   }

 
   return saveCart

}
export default cardLoadForSideChart