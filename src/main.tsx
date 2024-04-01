import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './indexCopy.css';
import Login from './pages/login.tsx';
import Cadastrar from './pages/cadastrar.tsx';
import Error from './pages/Error/error.tsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/", element: <App />
  },
  {
    path: "/login", element: <Login />
  },
  {
    path:"/cadastrar", element: <Cadastrar/>
  },
  {
    path:"/*", element: <Error/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
