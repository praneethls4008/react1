import { useContext } from "react"
import { useParams } from "react-router-dom"
import { contextProvider } from "./App"
import './UserDetails.css'

export const UserDetails = ()=>{
    const {id} = useParams();
    const {tableState, dispatcher} = useContext(contextProvider)
    const {data, error, loading} = tableState; 
    return (
        data && data.filter(currObj => currObj.id==id).
            map((filteredObj,index) => {
                return (<div  className='userDetails' key={`userDetails${index}`}>
                            <div>{filteredObj.id}</div>
                            <div>{filteredObj.name}</div>
                            <div>{filteredObj.age}</div>
                            <div>{filteredObj.office}
                        </div>
                </div>)
            })
    )
}