import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './com/main-box/Main';
import Home from './com/Home/Home';
import Orders from './com/orders/Orders';
import Inventory from './com/inventory/Inventory';
import Login from './com/login/Login';
import cardLoadForSideChart from './loadCard/Loadcard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path:"/",
        element : <Main></Main> 
      },
      {
        path:"/orders",
        element : <Orders></Orders>,
        loader : cardLoadForSideChart
      },
      {
        path:"/inventory",
        element : <Inventory></Inventory> 
      },
      {
        path:"/login",
        element : <Login></Login> 
      },
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
