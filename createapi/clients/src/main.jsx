import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Router} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Adduser from './components/Adduser.jsx'
import Home from './components/Home.jsx'
import Edith from './components/Edith.jsx'
import  {Toaster} from "react-hot-toast";
const route = createBrowserRouter([
  {
    path:"",
    element:<Home/>
  },
  {
    path:"/add",
    element: <Adduser/>
  },
  {
    path:"/edith/:id",
    element:<Edith/>
  },
  {
    path:"/delete",
    element:"deleted user"
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Toaster/>
    <RouterProvider router = {route}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
