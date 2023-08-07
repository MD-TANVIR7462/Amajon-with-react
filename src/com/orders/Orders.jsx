import React from 'react';
import Chart from '../chart/Chart';
import { useLoaderData } from 'react-router-dom';
import Details from '../Details';

const Orders = () => {
      const cartFromLocalStorage = useLoaderData()
      console.log(cartFromLocalStorage)
   return (
    <div className='grid md:grid-cols-8 gap-2 w-11/12 mx-auto'>


      
      





    <div className=" col-span-6 w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
    {
      cartFromLocalStorage.map(orderSummery=><Details orderSummery={orderSummery} ></Details>)
}
    </div>






     
      <div className='col-span-2'>
<Chart Add={cartFromLocalStorage}></Chart>
      </div>
    </div>
   );
};

export default Orders;