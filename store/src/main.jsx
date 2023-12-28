import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './screens/Home.jsx'
import Store from './screens/Store.jsx'
import Cart from './screens/Cart.jsx'
import Success from './screens/Success.jsx'
import Cancel from './screens/Cancel.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<Home />}></Route>
      <Route path="/store" index={true} element={<Store />}></Route>
      <Route path="/cart" index={true} element={<Cart />}></Route>
      <Route path="/success" index={true} element={<Success />}></Route>
      <Route path="/cancel" index={true} element={<Cancel />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
)
