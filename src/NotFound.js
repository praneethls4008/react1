import { Link } from "react-router-dom"
import './NotFound.css'
export const NotFound=()=>{
    return(
        <div className="NotFound">
            <h2>404-Page Not found</h2>
            <h3>Go back to <Link to='/'>home</Link></h3>
        </div>
    )
}