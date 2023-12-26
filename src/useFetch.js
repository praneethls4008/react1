import { useEffect, useState } from "react"

export const useFetch = (url, searchParam)=>{
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState({error:false,msg:null});
    const [data, setData] = useState(null);
    useEffect(()=>{
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw new Error(`Error while Fetching:{url:${url}, statusCode:${res.status}, statusText:${res.statusText}}`);
            }
            return res.json();
        })
        .then(data=>{
            if(searchParam.size>0){
                const result = data.filter(curr =>{
                        for (const [key, value] of searchParam.entries()) {
                            if(curr[key]!==value){
                                return false;
                            }
                        }
                        return true;
                    })
                setData(result.length>0 ? result : null);
                
            }
            else{
                setData(data);
            }
            setIsLoading(false);
            setError({error:false,msg:null});
        })
        .catch(err=>{
            console.log(err);
            setError({error:true,msg: err.message==='error' ? `fetch error: ${url}` : err.message });
            setIsLoading(false);
        })
    }, [url,searchParam])
    return {data, isLoading, isError}
}