import React from 'react';

const Singel = (props) => {
   const {name,price,ratings,id, img}=props.card
   
   const x=props.x
   
   return (
      <div>
         
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg=" src={img} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class=" text-xs font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price:${price}</p>
   
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Ratings : {ratings}<span>Star</span></p>
    </div>
    
    <button type="button" class=" rounded-lg w-full focus:outline-none text-white bg-purple-700 hover:bg-indigo-900 focus:ring-4 focus:ring-purple-300 font-medium text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700  dark:focus:ring-purple-900 text-center cursor-pointer"onClick={()=>x(props.card)} >Add To Cart</button>

      
   
</div>

      </div>
   );
};

export default Singel;