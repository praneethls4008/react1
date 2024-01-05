import { useContext, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import './Home.css'
import { Table } from './Table';
import { useFetch } from './useFetch';
import { contextProvider } from './App';

export const Home = () => {
    const [searchParam,setSearchParam] = useSearchParams();
    const {tableState, dispatcher} = useContext(contextProvider);
    useFetch('http://localhost:8000/details', searchParam, dispatcher);
    const {data:details, loading:isDetailsLoading, error:isDetailsFetchError} = tableState;
    return(
        <div className="Home">
            {isDetailsLoading && <div>Loading...</div>}
            {isDetailsFetchError.error && <div>{isDetailsFetchError.msg}</div>}
            {details && <Table></Table>}
        </div>
    );
}