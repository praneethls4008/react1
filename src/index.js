import ReactDOM from 'react-dom/client';
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AnimatePresence } from 'framer-motion';
import { App } from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
 
  <AnimatePresence>
    
    <BrowserRouter>
    <Routes>
      <Route path='*' element={
        <>
          <Nav/>
          <App />
          <Footer/>
        </>
      }/>
    </Routes>
    </BrowserRouter>
  </AnimatePresence>
    
);
