import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Nav } from "./Nav";
import { Home } from "./Home";
import { Footer } from "./Footer";
import './index.css';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { CreatePost } from './CreatePost';
import { Details } from './Details';
import { NotFound } from './NotFound';
import { AnimatePresence } from 'framer-motion';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <AnimatePresence>
      <Routes>
        <Route element={
          <>
            <Nav/>
            <Outlet overflow-y= 'scroll'/>
            <Footer/>
          </>
        }>
            
            <Route path='/' element={<Home/>}/>
            <Route path='/details' element={<Details/>}/>
            <Route path='/create' element={<CreatePost/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
      </AnimatePresence>
    </BrowserRouter>
);
