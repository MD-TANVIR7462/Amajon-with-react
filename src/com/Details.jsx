import React from 'react';

const Details = ({orderSummery}) => {
  const {img,name ,price,shipping  } = orderSummery
   return (
      <div>
      
                <a href="#" class="flex  items-center   w-full p-3 text-base font-bold border-2 border-gray-100 my-4 text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                  <div className='flex items-center '>
                  <img src={img} className='w-14 h-14' alt="" />
                  </div>
                  <div className='font-bold  text-xs  pl-4 text-gray-700'>
            
                     <p>{name}</p>
                     <p>Price : <span className='text-orange-400'>${price}</span> </p>
                     <p>Shipping :<span className='text-orange-400'>${shipping} </span></p>
                  </div>
                  <button className='ml-auto mr-3'>delet</button>
                  
                </a>
                
      </div>
   );
};

export default Details;