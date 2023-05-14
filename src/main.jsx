import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './components/Shop/Shop'
import { Order } from './components/Orders/Order'
import { Inventory } from './components/Inventory/Inventory'
import { Login } from './components/Login/Login'
import cartProductLoader from './CustomLoader/cartProductLoader'
const router=createBrowserRouter([
  {
path:'/',
element:<App/>,
children:[
  {
    path:'/',
    element:<Shop/>,
  },
  {
    path:'order',
    element:<Order/>,
    loader:cartProductLoader
    
  },
  {
    path:'inventory',
    element:<Inventory/>
  },
  {
    path:'login',
    element:<Login/>

  }
]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
