import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
RouterProvider,
} from "react-router-dom";
import AuthProvider from './Component/AuthProvider/AuthProvider.jsx';
import router from './Routes/PublicRoutes/PublicRoute.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
