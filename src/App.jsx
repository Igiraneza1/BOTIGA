import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home.jsx'
import Shop from './components/Shop'
import Contact from './components/Contact.jsx'
import Account from './components/Account'
import Vendors from './components/Vendors'
import Blog from './components/Blog'
import './App.css'
import HomePage from './components/HomePage.jsx'
import SinglePage from './components/SinglePage.jsx'
import HomeProduct from './components/HomeProduct.jsx'
import Dashboardlayout from './components/Dashboard/Dashboardlayout.jsx'
import Dashboardview from './components/Dashboard/Dashboardview.jsx'
import Order from './components/Dashboard/Order.jsx'
import Stock from './components/Dashboard/Stock.jsx'
import Product from './components/Dashboard/Product.jsx'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Vendors" element={<Vendors />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path = '/view'element={<HomePage/>}/>
        <Route path = "/Singlecard/:id"element={<SinglePage/>}/>
        <Route path = '/HomeProduct'element={<HomeProduct/>}/>
      </Route>
      <Route path = '/'element={<Dashboardlayout/>}>
      <Route path = '/Dashboardview' index element={<Dashboardview/>}/>

      
      </Route>
      <Route path = '/Order' element={<Order/>}/>
      <Route path = '/Product' element={<Product/>}/>
      <Route path = '/Stock' element={<Stock/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;