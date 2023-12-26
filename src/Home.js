import { useParams, useSearchParams } from 'react-router-dom';
import './Home.css'
import { Table } from './Table';
import { useFetch } from './useFetch';

export const Home = () => {
    const [searchParam,setSearchParam] = useSearchParams();
    const {data:details, isLoading:isDetailsLoading, isError:isDetailsFetchError} = useFetch('http://localhost:8000/details', searchParam);
    return(
        <div className="Home">
            {isDetailsLoading && <div>Loading...</div>}
            {isDetailsFetchError.error && <div>{isDetailsFetchError.msg}</div>}
            {details && <Table details={details}></Table>}
        </div>
    );
}