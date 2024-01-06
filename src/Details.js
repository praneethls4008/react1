import { useParams, useSearchParams } from "react-router-dom";
import { Table } from "./Table"
import { useFetch } from "./useFetch"
import { NotFound } from "./NotFound";
import { useContext, useEffect } from "react";
import { contextProvider } from './App';
export const Details=()=>{
    const [searchParam,setSearchParam] = useSearchParams();
    const {tableState, dispatcher} = useContext(contextProvider);
    //useFetch('http://localhost:8000/details', searchParam, dispatcher);
    const {data:details, error:isError, loading:isLoading} = tableState;
    
    return (
        <div className="Details">
             {isError.error && <div>{isError.msg}</div>}
             {isLoading && <div>Loading....</div>}
             {details && <Table searchParam={searchParam}/>}
             {!isError.error && !isLoading && !details && <NotFound/>}
        </div>
        
    )
}