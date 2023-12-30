import React, {createContext} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Home";
import { CreatePost } from './CreatePost';
import { Details } from './Details';
import { NotFound } from './NotFound';
export const contextProvider = createContext();

export const App=()=>{
    return(
        
        <contextProvider.Provider value={"praneeth"}>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/create' element={<CreatePost/>}/>
        <Route path='*' element={<NotFound/>}/>
        </Routes>
        </contextProvider.Provider>
    )
}