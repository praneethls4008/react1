import React, {createContext, useReducer} from 'react';
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Home";
import { CreatePost } from './CreatePost';
import { Details } from './Details';
import { UserDetails } from './UserDetails';
import { NotFound } from './NotFound';
export const contextProvider = createContext();

export const App=()=>{
    const [tableState,dispatcher] = useReducer((state,actions)=>{
        switch (actions.type){
            case "UPDATE":{
                return actions.payload;
            };
            default:{
                return {
                    data:[],
                    error:{error:false, msg: null},
                    loading:true
                };
            }
        }
    },{
        data:[],
        error:{error:false, msg: null},
        loading:true
    })
      
    return(
        <contextProvider.Provider value={{tableState, dispatcher}}>
            <Nav/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/details' element={<Details/>}/>
                    <Route path='/details/:id' element={<UserDetails/>}/>
                    <Route path='/create' element={<CreatePost/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            <Footer/>
        </contextProvider.Provider>
    )
}