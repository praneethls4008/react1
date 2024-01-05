import { useEffect, useState } from "react"

export const useFetch = (url, searchParam, dispatcher)=>{
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
                dispatcher({type:'UPDATE', 
                    payload:{
                        data:result.length>0 ? result : null,
                        error: {error:false, msg: null},
                        loading: false
                    }})
                //setData(result.length>0 ? result : null); 
            }
            else{
                dispatcher({type:'UPDATE', 
                    payload:{
                        data:data,
                        error: {error:false, msg: null},
                        loading: false
                    }})
                //setData(data);
            }

            // setIsLoading(false);
            // setError({error:false,msg:null});
        })
        .catch(err=>{
            dispatcher({type:'UPDATE', 
                    payload:{
                        data:[],
                        error: {error:true,msg: err.message==='error' ? `fetch error: ${url}` : err.message },
                        loading: false
                    }})
            // console.log(err);
            // setError({error:true,msg: err.message==='error' ? `fetch error: ${url}` : err.message });
            // setIsLoading(false);
        })
    }, [url,searchParam])
    //return {data, isLoading, isError}
}