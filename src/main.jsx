import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home.jsx';
import Root from './Root.jsx';
import Login from './Login/Login.jsx';
import Registerr from './Components/Registerr.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element:<Registerr></Registerr>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
