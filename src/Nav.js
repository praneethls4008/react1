import { useState } from 'react';
import './Nav.css';
import { Link, useNavigate } from 'react-router-dom';
export const Nav = () => {
    const [search,setSearch] = useState('');
    const navigate = useNavigate();
    const searchHandler = (e)=>{
        if(e.key==='Enter'){
            
            navigate(`/details?office=${search}`);
            setSearch('');
        }
        
    }
    return(
        <div className="Nav">
            <Link to='/'><h1>Navigation bar</h1></Link>
            <div className="NavLinks">
                <Link to={'/'}>Home</Link>
                <input placeholder={'Search here'} value={search} onClick={()=>{setSearch('')}} onChange={e=>setSearch(e.target.value)} onKeyDown={searchHandler} />
                <Link to={'/create'}>Create</Link>
            </div>
        </div>
    );
}