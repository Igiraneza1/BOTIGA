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
    </Routes>
    </BrowserRouter>
  );
}

export default App;