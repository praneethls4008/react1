import { useParams, useSearchParams } from "react-router-dom";
import { Table } from "./Table"
import { useFetch } from "./useFetch"
import { NotFound } from "./NotFound";

export const Details=()=>{
    const [searchParam,setSearchParam] = useSearchParams();
    const {data:details, isError, isLoading} = useFetch('http://localhost:8000/details', searchParam);
    console.log(`${isError.error} ${isLoading} ${details}`);
    return (
        <div className="Details">
            {isError.error && <div>{isError.msg}</div>}
            {isLoading && <div>Loading....</div>}
            {details && <Table details={details}/>}
            {!isError.error && !isLoading && !details && <NotFound/>}
        </div>
        
    )
}